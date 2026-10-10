import React from "react";

const ACTIVITIES = [
  {
    id: 1,
    title: "Skill Exchange",
    description: "Learn and teach skills within your campus community. Exchange knowledge on programming, design, languages, and more.",
    icon: "🔄",
    route: "/skill-exchange"
  },
  {
    id: 2,
    title: "Note Selling",
    description: "Buy and sell class notes, study guides, and exam preparation materials from fellow students.",
    icon: "📝",
    route: "/note-selling"
  },
  {
    id: 3,
    title: "Tutoring",
    description: "Find tutors for subjects you struggle with or offer your expertise to help other students succeed.",
    icon: "👨‍🎓",
    route: "/tutoring"
  },
  {
    id: 4,
    title: "Item Exchange",
    description: "Buy, sell, or trade textbooks, laptops, dorm supplies, and other campus essentials.",
    icon: "📦",
    route: "/item-exchange"
  }
];

export default function CampusCorner() {
  return (
    <section className="px-6 md:px-20 py-16">
      <h2 className="text-3xl font-bold mb-4 text-center">Campus Corner</h2>
      <p className="text-gray-300 max-w-2xl mx-auto text-center mb-10">
        Explore activities and services within your campus community.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {ACTIVITIES.map((activity) => (
          <div
            key={activity.id}
            className="bg-[#0F1724] p-6 rounded-lg text-center hover:bg-[#133047] transition-all cursor-pointer"
          >
            <div className="text-4xl mb-4">{activity.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{activity.description}</p>
            <a
              href={activity.route}
              className="inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded font-semibold transition-all"
            >
              Explore
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}