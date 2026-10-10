import React, { useState } from "react";

export default function PostGigsPage() {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [pay, setPay] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGig = {
      id: Date.now(),
      title,
      poster,
      location,
      category,
      pay,
      description,
      postedAt: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem("postedGigs") || "[]");
    existing.unshift(newGig);
    localStorage.setItem("postedGigs", JSON.stringify(existing));
    alert("Gig posted.");
    if (window.navigateApp) window.navigateApp("/");
    else window.location.href = "/";
  };

  return (
    <div className="bg-[#0B1221] min-h-screen text-white px-6 md:px-20 py-16">
      <div className="max-w-3xl mx-auto bg-[#071022] p-8 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Post a gig</h1>
        <p className="text-gray-300 mb-6">Create a gig to find campus talent.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-300">Title</label>
            <input required value={title} onChange={(e) => setTitle(e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded bg-[#0F1724] border border-[#183047]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-300">Poster</label>
              <input required value={poster} onChange={(e) => setPoster(e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded bg-[#0F1724] border border-[#183047]" />
            </div>
            <div>
              <label className="text-sm text-gray-300">Location</label>
              <input value={location} onChange={(e) => setLocation(e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded bg-[#0F1724] border border-[#183047]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-300">Category</label>
              <input value={category} onChange={(e) => setCategory(e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded bg-[#0F1724] border border-[#183047]" />
            </div>
            <div>
              <label className="text-sm text-gray-300">Pay / Rate</label>
              <input value={pay} onChange={(e) => setPay(e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded bg-[#0F1724] border border-[#183047]" />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-300">Description</label>
            <textarea required value={description} onChange={(e) => setDescription(e.target.value)}
              rows={6} className="w-full mt-1 px-3 py-2 rounded bg-[#0F1724] border border-[#183047]" />
          </div>

          <div className="flex gap-3 justify-end">
            <button type="button" onClick={() => { if (window.navigateApp) window.navigateApp("/"); else window.location.href = "/"; }}
              className="px-4 py-2 rounded border border-gray-600">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600">Post gig</button>
          </div>
        </form>
      </div>
    </div>
  );
}