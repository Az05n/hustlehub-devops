# HustleHub

A student freelance and gig platform with a React/Vite frontend, Express/Mongoose backend, and MongoDB. This repository is a separate DevOps-ready copy of the application; the original HustleHub repository is not changed by its Docker or CI configuration.

## Docker and CI/CD Setup

### Prerequisites

- Docker Desktop with Docker Compose v2 enabled (Windows users can use the WSL 2 backend).
- Git, if cloning this separate repository.
- Node.js 22 and npm 10+ only if running the lint/build checks directly on the host; Docker builds use Node 22.

### Environment variables

From the repository root, copy the example file:

```powershell
Copy-Item .env.example .env
```

The example contains local development values only:

- `FRONTEND_PORT` — host port for the web UI; defaults to `8080`.
- `BACKEND_PORT` — host port for Express and `/health`; defaults to `5000`.
- `MONGO_PORT` — optional host port for MongoDB; defaults to `27017`.
- `MONGODB_URI` — backend MongoDB connection string. Under Compose, the hostname must be the service name `mongodb`, not `localhost`.

Compose already provides defaults for these values, but creating `.env` makes it easy to adjust host ports. `.env` is ignored by Git; do not add real credentials to `.env.example` or commit `.env`.

### Build and start

Run commands from the repository root:

```powershell
docker compose config
docker compose up --build -d
docker compose ps
```

Compose builds the frontend and backend images, starts MongoDB, waits for MongoDB’s health check before starting the backend, then waits for the backend health check before starting the frontend.

- Frontend: <http://localhost:8080>
- Backend root: <http://localhost:5000/>
- Backend health: <http://localhost:5000/health>
- Frontend-to-backend form submission: `POST /api/users` through the frontend’s Nginx proxy at <http://localhost:8080/api/users>
- MongoDB: host port `27017` by default; the backend connects to `mongodb:27017` on the private Compose network.

If you changed the host port values in `.env`, use those ports instead. The frontend uses same-origin `/api` requests in its Docker build, so the browser does not need to resolve an internal Docker service hostname.

### Health and logs

In PowerShell, check health and service status with:

```powershell
Invoke-RestMethod http://localhost:5000/health
docker compose ps
```

A healthy API returns HTTP 200 and JSON indicating `status: ok` and `database: connected`. If the database is disconnected, it returns HTTP 503 without exposing the connection string.

Inspect service logs and recent container exit status with:

```powershell
docker compose logs --tail 100
docker compose logs --follow backend
docker compose ps --all
docker inspect --format "{{.State.ExitCode}}" (docker compose ps -aq backend)
```

Press Ctrl+C to stop following logs; this does not stop the services.

### Troubleshooting

- **Port already allocated:** change the relevant `FRONTEND_PORT`, `BACKEND_PORT`, or `MONGO_PORT` in `.env`, then recreate the services with `docker compose up --build -d`.
- **Backend exits or MongoDB is unavailable:** inspect `docker compose logs backend mongodb`; confirm `MONGODB_URI` uses `mongodb://mongodb:27017/hustlehub`. Compose health dependencies handle readiness on startup, but an invalid URI or a later database failure still needs investigation.
- **Missing MongoDB setting:** the backend exits with a clear `MONGODB_URI is required` message rather than silently using container loopback.
- **Form/API request fails:** check `docker compose ps`, `docker compose logs frontend backend`, and the browser’s Network panel. The frontend sends to `/api/users`; Nginx forwards `/api/` to the backend service.
- **Docker command unavailable:** install/start Docker Desktop, enable its Linux containers/WSL 2 engine, then open a new terminal and verify `docker --version` and `docker compose version`.

### MongoDB data persistence and cleanup

MongoDB stores data in the named Docker volume `mongodb-data`. Restarting or recreating the MongoDB container does not remove that volume:

```powershell
docker compose down
docker compose up -d
```

To stop the app and permanently remove the named volume and its database contents:

```powershell
docker compose down --volumes --remove-orphans
```

Do not use `--volumes` if you want to retain local data.

### CI workflow

The workflow at `.github/workflows/ci.yml` runs on pushes and pull requests targeting `main` (and can be started manually). It uses Ubuntu 24.04 and Node 22, installs both apps with `npm ci`, runs frontend lint and production build, checks backend JavaScript syntax, builds both Docker images, then starts Compose and smoke-tests the frontend, backend health, API write, and MongoDB data after a backend restart. It prints service logs on failure and removes its temporary Compose volume during cleanup. It only builds images locally in the runner; it does **not** publish images or deploy the application.

There is no dedicated unit/integration test suite configured in either app yet. The backend's existing `npm test` script is a placeholder that intentionally exits as a failure, so CI does not call it or claim tests exist. The Compose workflow smoke checks are real end-to-end checks, not a replacement for a maintained test suite. Good next tests would cover user creation and invalid payload/error handling, plus health status when MongoDB is unavailable.

The frontend lint script checks the active Vite entry points and `src/components`. The copied legacy `src/component` folder has merge-conflict markers and parse errors, so it is intentionally not included in the current lint command; repair or remove those legacy files before broadening lint to the entire source tree.

### CI versus deployment/CD

**Continuous integration (CI)** here means automatically validating changes, building application assets and Docker images, and running service smoke checks. **Deployment/CD** would publish an image or release and roll it out to a hosting environment. This repository intentionally stops at CI: there is no registry login, image publication, cloud credentials, or deployment step.

### Limitations and future improvements

- Docker/Compose is for local development and portfolio demonstration; it is not production-grade monitoring or high availability.
- The default MongoDB service has no authentication and should not be exposed as a production database.
- Add a maintained backend test suite, request validation, and stronger API error handling; review dependency audit findings before deployment.
- Repair or remove the legacy frontend source folder so linting can cover the full frontend tree.
- For a real deployment, add secrets management, TLS, authenticated MongoDB, image scanning/signing, registry publication, and an explicitly reviewed deployment workflow.
