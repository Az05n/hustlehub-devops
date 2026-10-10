import React, { useEffect, useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "Student User",
    email: "student@example.com",
    bio: "Aspiring learner and hustler."
  });
  const [editing, setEditing] = useState(false);
  const [postedGigs, setPostedGigs] = useState([]);
  const [appliedGigs, setAppliedGigs] = useState([]);
  const [savedGigs, setSavedGigs] = useState([]);

  useEffect(() => {
    const p = JSON.parse(localStorage.getItem("userProfile") || "null");
    if (p) setProfile(p);
    const posted = JSON.parse(localStorage.getItem("postedGigs") || "[]");
    setPostedGigs(posted);
    const applied = JSON.parse(localStorage.getItem("appliedGigs") || "[]");
    setAppliedGigs(applied);
    const saved = JSON.parse(localStorage.getItem("savedGigs") || "[]");
    setSavedGigs(saved);
  }, []);

  const saveProfile = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    setEditing(false);
    alert("Profile saved.");
  };

  const deletePosted = (id) => {
    const updated = postedGigs.filter(g => g.id !== id);
    setPostedGigs(updated);
    localStorage.setItem("postedGigs", JSON.stringify(updated));
  };

  return (
    <div className="bg-[#0B1221] min-h-screen text-white px-6 md:px-20 py-16 space-y-8">
      <div className="max-w-4xl mx-auto bg-[#071022] p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            <p className="text-sm text-gray-300">{profile.email}</p>
            <p className="mt-2 text-gray-300">{profile.bio}</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 border rounded" onClick={() => { setEditing(!editing); }}>
              {editing ? "Cancel" : "Edit profile"}
            </button>
            <button className="px-4 py-2 bg-orange-500 rounded" onClick={() => { localStorage.removeItem("userProfile"); setProfile({ name: "", email: "", bio: "" }); alert("Logged out (local)"); }}>
              Log out
            </button>
          </div>
        </div>

        {editing && (
          <div className="mt-4 space-y-3">
            <input value={profile.name} onChange={e => setProfile({ ...profile, name: e.target.value })}
              className="w-full px-3 py-2 rounded bg-[#0F1724] border border-[#183047]" placeholder="Name" />
            <input value={profile.email} onChange={e => setProfile({ ...profile, email: e.target.value })}
              className="w-full px-3 py-2 rounded bg-[#0F1724] border border-[#183047]" placeholder="Email" />
            <textarea value={profile.bio} onChange={e => setProfile({ ...profile, bio: e.target.value })}
              rows={3} className="w-full px-3 py-2 rounded bg-[#0F1724] border border-[#183047]" placeholder="Bio" />
            <div className="flex justify-end">
              <button className="px-4 py-2 bg-orange-500 rounded" onClick={saveProfile}>Save</button>
            </div>
          </div>
        )}
      </div>

      {/* Dashboard sections */}
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-3">
        <div className="bg-[#071022] p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Posted Gigs</h3>
          {postedGigs.length === 0 ? (
            <p className="text-gray-400 text-sm">No gigs posted yet.</p>
          ) : (
            <ul className="space-y-2">
              {postedGigs.map(g => (
                <li key={g.id} className="flex justify-between items-start bg-[#0F1724] p-3 rounded">
                  <div>
                    <div className="font-semibold">{g.title}</div>
                    <div className="text-xs text-gray-300">{g.company || g.poster} · {g.location}</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="px-2 py-1 text-sm bg-orange-500 rounded" onClick={() => alert("View details not implemented")}>View</button>
                    <button className="px-2 py-1 text-sm border rounded" onClick={() => deletePosted(g.id)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="bg-[#071022] p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Applied Gigs</h3>
          {appliedGigs.length === 0 ? (
            <p className="text-gray-400 text-sm">No applications yet.</p>
          ) : (
            <ul className="space-y-2">
              {appliedGigs.map(a => (
                <li key={a.id} className="bg-[#0F1724] p-3 rounded">
                  <div className="font-semibold">{a.title}</div>
                  <div className="text-xs text-gray-300">{a.company} · {a.status || "Pending"}</div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="bg-[#071022] p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Saved Gigs</h3>
          {savedGigs.length === 0 ? (
            <p className="text-gray-400 text-sm">No saved gigs.</p>
          ) : (
            <ul className="space-y-2">
              {savedGigs.map(s => (
                <li key={s.id} className="bg-[#0F1724] p-3 rounded flex justify-between items-center">
                  <div>
                    <div className="font-semibold">{s.title}</div>
                    <div className="text-xs text-gray-300">{s.company}</div>
                  </div>
                  <button className="px-2 py-1 text-sm border rounded" onClick={() => alert("Remove saved not implemented")}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Quick links */}
      <div className="max-w-4xl mx-auto bg-[#071022] p-6 rounded-lg flex flex-col md:flex-row gap-4 justify-between">
        <div>
          <h4 className="font-semibold">Quick actions</h4>
          <p className="text-gray-400 text-sm">Post a new gig, view your messages, or manage settings.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-orange-500 rounded" onClick={() => (window.navigateApp ? window.navigateApp("/post-gig") : (window.location.href = "/post-gig"))}>Post a gig</button>
          <button className="px-4 py-2 border rounded" onClick={() => (window.navigateApp ? window.navigateApp("/my-campus") : (window.location.href = "/my-campus"))}>Go to My Campus</button>
          <button className="px-4 py-2 border rounded" onClick={() => alert("Open settings")}>Settings</button>
        </div>
      </div>
    </div>
  );
}