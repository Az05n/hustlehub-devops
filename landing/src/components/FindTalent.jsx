import React from "react";

export default function FindTalent() {
  return (
    <section className="px-6 md:px-20 py-16 bg-[#071022]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Find talent for your opportunities</h2>
        <p className="text-gray-300 text-lg mb-8">
          Looking to hire talented students for your project, event, or organization? Post opportunities on HustleHub and connect with motivated campus talent. Get quality work done by students eager to build experience and earn money.
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (typeof window !== "undefined" && window.navigateApp) window.navigateApp("/post-gig");
            else window.location.href = "/post-gig";
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all"
        >
          Post an opportunity
        </button>
      </div>
    </section>
  );
}