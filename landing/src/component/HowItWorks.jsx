import React, { useState } from "react";

/* Replace images with inline SVG icons for both "Find gigs" and "Post gigs" modes.
   Icons are lightweight and won't require asset files. */

const IconSearch = (
  <svg
    className="w-16 h-16 mx-auto text-orange-400"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M21 21l-4.35-4.35"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="11"
      cy="11"
      r="6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconApply = (
  <svg
    className="w-16 h-16 mx-auto text-orange-400"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M12 5v7l3 3"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const IconHustle = (
  <svg
    className="w-16 h-16 mx-auto text-orange-400"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M3 12h18"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M12 3v18"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const IconCreate = (
  <svg
    className="w-16 h-16 mx-auto text-orange-400"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M12 5v14M5 12h14"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconReview = (
  <svg
    className="w-16 h-16 mx-auto text-orange-400"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M9 11l2 2 4-4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="3"
      y="4"
      width="18"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
);

const IconManage = (
  <svg
    className="w-16 h-16 mx-auto text-orange-400"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M12 8v8M8 12h8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const FIND_STEPS = [
  {
    id: 1,
    icon: IconSearch,
    title: "Browse",
    desc: "Explore campus gigs near you and filter by skills, location, and pay.",
  },
  {
    id: 2,
    icon: IconApply,
    title: "Apply",
    desc: "Submit your profile and proposals — connect with the poster quickly.",
  },
  {
    id: 3,
    icon: IconHustle,
    title: "Hustle",
    desc: "Complete the gig, get paid, and build your campus experience.",
  },
];

const POST_STEPS = [
  {
    id: 1,
    icon: IconCreate,
    title: "Create a gig",
    desc: "Describe the task, set location, pay and required skills — keep it clear.",
  },
  {
    id: 2,
    icon: IconReview,
    title: "Review applicants",
    desc: "Check profiles, chat with candidates and shortlist the best fit.",
  },
  {
    id: 3,
    icon: IconManage,
    title: "Hire & manage",
    desc: "Assign work, track progress and complete payment when finished.",
  },
];

export default function HowItWorks() {
  const [mode, setMode] = useState("find"); // "find" or "post"
  const steps = mode === "find" ? FIND_STEPS : POST_STEPS;

  return (
    <section className="px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">How it works</h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-center mb-6">
          {mode === "find"
            ? "Find gigs, apply, and build real experience — made for students."
            : "Post gigs, find campus talent, and manage your opportunities easily."}
        </p>

        <div className="flex justify-center mb-8 gap-3">
          <button
            onClick={() => setMode("find")}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              mode === "find"
                ? "bg-orange-500 text-white"
                : "bg-transparent text-gray-300 border border-[#183047]"
            }`}
            aria-pressed={mode === "find"}
          >
            Find gigs
          </button>
          <button
            onClick={() => setMode("post")}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              mode === "post"
                ? "bg-orange-500 text-white"
                : "bg-transparent text-gray-300 border border-[#183047]"
            }`}
            aria-pressed={mode === "post"}
          >
            Post gigs
          </button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-[#0F1724] p-6 rounded-lg text-center"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
