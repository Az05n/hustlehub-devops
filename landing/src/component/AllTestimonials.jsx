import React, { useState } from "react";

const ALL_TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "3rd Year Student",
    text: "HustleHub helped me earn $500 last semester by doing small gigs. It's perfect for students looking to balance work and studies!",
    rating: 5,
    avatar: "👩‍🎓",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Marcus Lee",
    role: "2nd Year Student",
    text: "I found a great tutor for my Chemistry class and improved my grades significantly. The platform is super user-friendly!",
    rating: 5,
    avatar: "👨‍🎓",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "4th Year Student",
    text: "Posted my design services and got consistent clients. HustleHub is an amazing portfolio builder while earning money.",
    rating: 5,
    avatar: "👩‍💼",
    date: "3 days ago"
  },
  {
    id: 4,
    name: "David Brown",
    role: "1st Year Student",
    text: "The skill exchange feature helped me learn web development from a senior. Best campus community platform ever!",
    rating: 4,
    avatar: "👨‍💻",
    date: "5 days ago"
  },
  {
    id: 5,
    name: "Jessica Martinez",
    role: "3rd Year Student",
    text: "Sold my old textbooks and bought notes for my classes. Everything is so convenient and affordable!",
    rating: 5,
    avatar: "👩‍🎓",
    date: "1 week ago"
  },
  {
    id: 6,
    name: "Alex Wilson",
    role: "2nd Year Student",
    text: "As an organization leader, posting events and finding student helpers through HustleHub was a game-changer!",
    rating: 5,
    avatar: "👨‍💼",
    date: "10 days ago"
  },
  {
    id: 7,
    name: "Priya Patel",
    role: "3rd Year Student",
    text: "Connected with amazing talents for my startup project. The quality and reliability of students is outstanding!",
    rating: 5,
    avatar: "👩‍💻",
    date: "2 weeks ago"
  },
  {
    id: 8,
    name: "James Rodriguez",
    role: "2nd Year Student",
    text: "Made great money during summer by offering tutoring sessions. HustleHub is definitely worth using!",
    rating: 5,
    avatar: "👨‍🏫",
    date: "1 month ago"
  },
  {
    id: 9,
    name: "Sophie Turner",
    role: "4th Year Student",
    text: "The community is supportive and genuine. I found both opportunities and lifelong friends here!",
    rating: 5,
    avatar: "👩‍🎓",
    date: "3 weeks ago"
  },
  {
    id: 10,
    name: "Kevin Zhang",
    role: "1st Year Student",
    text: "Great platform for freshmen like me. Easy to find gigs and build experience from day one.",
    rating: 4,
    avatar: "👨‍🎓",
    date: "4 days ago"
  },
  {
    id: 11,
    name: "Lisa Anderson",
    role: "3rd Year Student",
    text: "Bought and sold items multiple times. The marketplace is secure and the community is trustworthy.",
    rating: 5,
    avatar: "👩‍💼",
    date: "1 week ago"
  },
  {
    id: 12,
    name: "Nathan Scott",
    role: "2nd Year Student",
    text: "Found my best friend through skill exchange and we now freelance together. Amazing platform!",
    rating: 5,
    avatar: "👨‍💻",
    date: "2 weeks ago"
  }
];

export default function AllTestimonials() {
  const [sortBy, setSortBy] = useState("recent");

  const sorted = [...ALL_TESTIMONIALS].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="bg-[#0B1221] min-h-screen text-white px-6 md:px-20 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center">All Student Testimonials</h1>
      <p className="text-gray-300 max-w-2xl mx-auto text-center mb-8">
        Read what thousands of students and organizations say about HustleHub.
      </p>

      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Showing {sorted.length} testimonials</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded bg-[#0F1724] text-white border border-[#183047]"
          >
            <option value="recent">Most Recent</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {sorted.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-[#0F1724] p-6 rounded-lg border border-[#183047] hover:border-orange-500 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-orange-400">⭐</span>
                ))}
              </div>
            </div>
            <p className="text-gray-300 text-base italic">"{testimonial.text}"</p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-12 bg-[#071022] p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Share Your Story</h3>
        <p className="text-gray-300 mb-6">Have a great experience with HustleHub? We'd love to hear from you!</p>
        <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-all">
          Write a Testimonial
        </button>
      </div>
    </div>
  );
}