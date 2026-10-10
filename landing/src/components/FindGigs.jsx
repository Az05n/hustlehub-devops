import React from "react";

export default function FindGigs() {
  return (
    <section className="px-6 md:px-20 py-16 bg-[#071022]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Find gigs near you</h2>
        <p className="text-gray-300 text-lg mb-8">
          Discover campus opportunities that match your skills. Browse gigs posted by students, organizations, and faculty. Whether you're looking for quick tasks, flexible projects, or ongoing work, find the perfect gig to earn money and build your experience.
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (typeof window !== "undefined" && window.navigateApp) window.navigateApp("/browse-gigs");
            else window.location.href = "/browse-gigs";
          }}
          className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-all"
        >
          Browse all gigs
        </button>
      </div>
    </section>
  );
}