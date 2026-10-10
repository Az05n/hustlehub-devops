import React, { useState, useMemo } from "react";

const SAMPLE_GIGS = [
  {
    id: 1,
    title: "Social Media Assistant",
    company: "Campus Club",
    location: "Main Campus",
    category: "Marketing",
    description: "Create short social posts and manage event promos.",
    pay: "$15/hour"
  },
  {
    id: 2,
    title: "Research Assistant",
    company: "Psych Dept",
    location: "North Campus",
    category: "Research",
    description: "Help with survey collection and data entry.",
    pay: "$12/hour"
  },
  {
    id: 3,
    title: "Delivery Runner",
    company: "Local Cafe",
    location: "Downtown",
    category: "Logistics",
    description: "Pick up and deliver small orders around campus.",
    pay: "$10/hour"
  },
  {
    id: 4,
    title: "Graphic Designer",
    company: "Student Org",
    location: "Main Campus",
    category: "Design",
    description: "Design posters and digital assets for events.",
    pay: "$20/project"
  },
  {
    id: 5,
    title: "Content Writer",
    company: "Student Blog",
    location: "Online",
    category: "Writing",
    description: "Write blog posts and articles about campus life.",
    pay: "$50/article"
  },
  {
    id: 6,
    title: "Photo Editing",
    company: "Photography Club",
    location: "Main Campus",
    category: "Design",
    description: "Edit and enhance photos from campus events.",
    pay: "$18/hour"
  }
];

export default function BrowseGigs() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const filtered = useMemo(() => {
    const k = keyword.trim().toLowerCase();
    const loc = location.trim().toLowerCase();
    const cat = category.trim().toLowerCase();
    return SAMPLE_GIGS.filter((g) => {
      if (k && !(g.title + " " + g.description + " " + g.company).toLowerCase().includes(k)) {
        return false;
      }
      if (loc && !g.location.toLowerCase().includes(loc)) return false;
      if (cat && !g.category.toLowerCase().includes(cat)) return false;
      return true;
    });
  }, [keyword, location, category]);

  return (
    <div className="bg-[#0B1221] min-h-screen text-white px-6 md:px-20 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center">Find gigs near you</h1>
      <p className="text-gray-300 max-w-2xl mx-auto text-center mb-8">
        Search and filter campus gigs to find opportunities that match your skills.
      </p>

      <div className="max-w-4xl mx-auto bg-[#071022] p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Keyword (title, company, description)"
            className="flex-1 px-4 py-2 rounded bg-[#0B1B2B] text-white border border-[#183047]"
          />
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location (e.g., Main Campus)"
            className="w-48 px-4 py-2 rounded bg-[#0B1B2B] text-white border border-[#183047]"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-48 px-4 py-2 rounded bg-[#0B1B2B] text-white border border-[#183047]"
          >
            <option value="">All categories</option>
            <option>Marketing</option>
            <option>Research</option>
            <option>Logistics</option>
            <option>Design</option>
            <option>Writing</option>
          </select>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-200 mb-6">
          Results ({filtered.length} gigs found)
        </h3>

        {filtered.length === 0 ? (
          <p className="text-gray-400 text-center">No gigs found. Try different filters.</p>
        ) : (
          <ul className="space-y-4">
            {filtered.map((g) => (
              <li key={g.id} className="p-6 bg-[#0F1724] rounded-lg border border-[#183047] hover:border-orange-500 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">{g.title}</h4>
                    <p className="text-sm text-gray-300">{g.company} · {g.location}</p>
                  </div>
                  <span className="text-orange-400 font-bold text-lg ml-4">{g.pay}</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs bg-[#133047] text-orange-400 px-3 py-1 rounded-full">{g.category}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{g.description}</p>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded font-semibold transition-all">
                    View details
                  </button>
                  <button className="px-4 py-2 border border-orange-400 text-orange-400 rounded hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all font-semibold">
                    Apply now
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}