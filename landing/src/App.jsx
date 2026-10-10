import React, { useEffect, useState, lazy, Suspense } from "react";
import HowItWorks from "./components/HowItWorks";
import FindGigs from "./components/FindGigs";
import FindTalent from "./components/FindTalent";
import CampusCorner from "./components/CampusCorner";
import Testimonials from "./components/Testimonials";
import Form from "./components/Form";

// lazy imports - all from components folder now

const LazyPostGigs = lazy(() =>
  import("./components/postgigspage").catch(() => ({
    default: () => <div className="p-8 text-center">Post Gigs page not found</div>,
  }))
);
const LazyBrowseGigs = lazy(() =>
  import("./components/BrowseGigs").catch(() => ({
    default: () => <div className="p-8 text-center">Browse Gigs page not found</div>,
  }))
);
const LazyMyCampus = lazy(() =>
  import("./components/MyCampus").catch(() => ({
    default: () => <div className="p-8 text-center">My Campus page not found</div>,
  }))
);
const LazyProfile = lazy(() =>
  import("./components/Profile").catch(() => ({
    default: () => <div className="p-8 text-center">Profile page not found</div>,
  }))
);

// global navigate helper
function navigateApp(path = "/") {
  if (typeof window === "undefined") return;
  if (window.location.pathname === path) return;
  history.pushState(null, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}
if (typeof window !== "undefined") window.navigateApp = navigateApp;

const heroImage =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80";

export default function App() {
  const [route, setRoute] = useState(typeof window !== "undefined" ? window.location.pathname : "/");

  useEffect(() => {
    const onPop = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // route mapping
  if (route === "/post-gig") {
    return (
      <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
        <LazyPostGigs />
      </Suspense>
    );
  }
  if (route === "/browse-gigs") {
    return (
      <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
        <LazyBrowseGigs />
      </Suspense>
    );
  }
  if (route === "/my-campus") {
    return (
      <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
        <LazyMyCampus />
      </Suspense>
    );
  }
 if (route === "/profile" || route === "/my-profile") {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <div className="bg-[#0B1221] min-h-screen text-white p-6 md:p-12">
        <LazyProfile />

        {/* PROFILE FORM */}
        <div className="mt-10 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
          <Form />
        </div>
      </div>
    </Suspense>
  );
}


  // default landing page
  return (
    <div className="bg-[#0B1221] min-h-screen text-white">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-20 py-5">
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer" onClick={() => (window.navigateApp ? window.navigateApp("/") : (window.location.href = "/"))}>HustleHub</h1>
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          <li className="hover:text-white cursor-pointer" onClick={() => (window.navigateApp ? window.navigateApp("/browse-gigs") : (window.location.href = "/browse-gigs"))}>
            See Gigs
          </li>
          <li className="hover:text-white cursor-pointer" onClick={() => (window.navigateApp ? window.navigateApp("/post-gig") : (window.location.href = "/post-gig"))}>
            Post gigs
          </li>
          <li className="hover:text-white cursor-pointer" onClick={() => (window.navigateApp ? window.navigateApp("/my-campus") : (window.location.href = "/my-campus"))}>
            My Campus
          </li>
          <li className="hover:text-white cursor-pointer">Map View</li>
          <li className="hover:text-white cursor-pointer" onClick={() => (window.navigateApp ? window.navigateApp("/profile") : (window.location.href = "/profile"))}>
            My Profile
          </li>
        </ul>
        <div className="md:hidden text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5" />
          </svg>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16">
        <div className="flex-1 max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Unlock Your Campus <br /> Career Potential</h1>
          <p className="text-gray-300 text-lg mt-4">Where student skills meet opportunities</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all" onClick={() => navigateApp("/browse-gigs")}>
              Browse gigs
            </button>
            <button className="border border-orange-400 hover:bg-orange-500 hover:text-white text-orange-400 px-6 py-3 rounded-lg font-semibold transition-all" onClick={() => navigateApp("/post-gig")}>
              Post gigs
            </button>
          </div>
        </div>

        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img src={heroImage} alt="Students collaborating" className="w-[90%] md:w-[80%] max-w-lg" />
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <HowItWorks />

      {/* FIND GIGS SECTION */}
      <FindGigs />

      {/* FIND TALENT SECTION */}
      <FindTalent />

      {/* CAMPUS CORNER SECTION */}
      <CampusCorner />

      {/* TESTIMONIALS SECTION */}
      <Testimonials />
    </div>
  );
} 
