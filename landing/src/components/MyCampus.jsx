import React, { useState } from "react";

const SAMPLE_SKILLS = [
  { id: 1, skill: "Web Development", by: "John", rating: 4.8 },
  { id: 2, skill: "Graphic Design", by: "Sara", rating: 4.9 },
  { id: 3, skill: "Python Programming", by: "Mike", rating: 4.7 }
];

const SAMPLE_NOTES = [
  { id: 1, course: "CS101 - Intro to Programming", seller: "Alice", price: "$5" },
  { id: 2, course: "MATH201 - Calculus II", seller: "Bob", price: "$7" },
  { id: 3, course: "ENG102 - English Literature", seller: "Carol", price: "$4" }
];

const SAMPLE_TUTORS = [
  { id: 1, name: "Prof. Khan", subject: "Mathematics", rate: "$15/hr" },
  { id: 2, name: "Lisa Chen", subject: "Chemistry", rate: "$12/hr" },
  { id: 3, name: "Marcus Williams", subject: "Physics", rate: "$14/hr" }
];

const SAMPLE_ITEMS = [
  { id: 1, name: "Calculus Textbook", price: "$30", seller: "Tom" },
  { id: 2, name: "Dorm Lamp", price: "$15", seller: "Nina" },
  { id: 3, name: "Gaming Laptop", price: "$600", seller: "Ryan" }
];

export default function MyCampus() {
  const [skillQuery, setSkillQuery] = useState("");
  const [noteQuery, setNoteQuery] = useState("");
  const [tutorQuery, setTutorQuery] = useState("");
  const [itemQuery, setItemQuery] = useState("");

  return (
    <div className="bg-[#0B1221] min-h-screen text-white">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-20 py-5">
        <h1 className="text-2xl font-bold tracking-wide">HustleHub</h1>
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          <li className="hover:text-white cursor-pointer" onClick={() => (window.navigateApp ? window.navigateApp("/") : (window.location.href = "/"))}>
            See Gigs
          </li>
          <li className="hover:text-white cursor-pointer" onClick={() => (window.navigateApp ? window.navigateApp("/post-gig") : (window.location.href = "/post-gig"))}>
            Post gigs
          </li>
          <li className="hover:text-white cursor-pointer">My Campus</li>
          <li className="hover:text-white cursor-pointer">Map View</li>
          <li className="hover:text-white cursor-pointer" onClick={() => (window.navigateApp ? window.navigateApp("/profile") : (window.location.href = "/profile"))}>
            My Profile
          </li>
        </ul>
      </nav>

      {/* HEADER */}
      <header className="px-6 md:px-20 py-12 text-center bg-[#071022]">
        <h1 className="text-4xl font-bold mb-2">My Campus</h1>
        <p className="text-gray-300">Community features for learning, trading, and hiring on campus.</p>
      </header>

      {/* SKILL EXCHANGE SECTION */}
      <section className="px-6 md:px-20 py-16 bg-[#0B1221]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold">🔄 Skill Exchange</h2>
              <p className="text-gray-300 mt-1">Teach or learn skills from other students.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded font-semibold transition">
                Explore All
              </button>
              <button className="px-4 py-2 border border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-white rounded font-semibold transition">
                Post a skill
              </button>
            </div>
          </div>

          <div className="mb-6">
            <input
              value={skillQuery}
              onChange={(e) => setSkillQuery(e.target.value)}
              placeholder="Search skills..."
              className="w-full px-4 py-2 rounded bg-[#0F1724] border border-[#183047] text-white"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_SKILLS.filter(s => s.skill.toLowerCase().includes(skillQuery.toLowerCase())).length > 0 ? (
              SAMPLE_SKILLS.filter(s => s.skill.toLowerCase().includes(skillQuery.toLowerCase())).map(s => (
                <div key={s.id} className="p-5 bg-[#0F1724] rounded-lg border border-[#183047] hover:border-orange-500 transition">
                  <h3 className="text-lg font-semibold mb-2">{s.skill}</h3>
                  <p className="text-sm text-gray-300 mb-4">By {s.by} · ⭐ {s.rating}</p>
                  <button className="w-full px-3 py-2 bg-orange-500 hover:bg-orange-600 rounded font-semibold transition">Connect</button>
                </div>
              ))
            ) : (
              <p className="text-gray-400 col-span-full text-center">No skills found</p>
            )}
          </div>
        </div>
      </section>

      {/* NOTE SELLING SECTION */}
      <section className="px-6 md:px-20 py-16 bg-[#071022]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold">📝 Note Selling</h2>
              <p className="text-gray-300 mt-1">Buy and sell study notes and guides.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded font-semibold transition">
                Explore All
              </button>
              <button className="px-4 py-2 border border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-white rounded font-semibold transition">
                Sell Notes
              </button>
            </div>
          </div>

          <div className="mb-6">
            <input
              value={noteQuery}
              onChange={(e) => setNoteQuery(e.target.value)}
              placeholder="Search courses..."
              className="w-full px-4 py-2 rounded bg-[#0F1724] border border-[#183047] text-white"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_NOTES.filter(n => n.course.toLowerCase().includes(noteQuery.toLowerCase())).length > 0 ? (
              SAMPLE_NOTES.filter(n => n.course.toLowerCase().includes(noteQuery.toLowerCase())).map(n => (
                <div key={n.id} className="p-5 bg-[#0F1724] rounded-lg border border-[#183047] hover:border-orange-500 transition">
                  <h3 className="text-lg font-semibold mb-2">{n.course}</h3>
                  <p className="text-sm text-gray-300 mb-4">By {n.seller} · <span className="text-orange-400 font-bold">{n.price}</span></p>
                  <button className="w-full px-3 py-2 bg-orange-500 hover:bg-orange-600 rounded font-semibold transition">Buy</button>
                </div>
              ))
            ) : (
              <p className="text-gray-400 col-span-full text-center">No notes found</p>
            )}
          </div>
        </div>
      </section>

      {/* TUTORING SECTION */}
      <section className="px-6 md:px-20 py-16 bg-[#0B1221]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold">👨‍🎓 Tutoring</h2>
              <p className="text-gray-300 mt-1">Find or offer tutoring sessions.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded font-semibold transition">
                Explore All
              </button>
              <button className="px-4 py-2 border border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-white rounded font-semibold transition">
                Offer Tutoring
              </button>
            </div>
          </div>

          <div className="mb-6">
            <input
              value={tutorQuery}
              onChange={(e) => setTutorQuery(e.target.value)}
              placeholder="Search subjects..."
              className="w-full px-4 py-2 rounded bg-[#0F1724] border border-[#183047] text-white"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_TUTORS.filter(t => t.subject.toLowerCase().includes(tutorQuery.toLowerCase())).length > 0 ? (
              SAMPLE_TUTORS.filter(t => t.subject.toLowerCase().includes(tutorQuery.toLowerCase())).map(t => (
                <div key={t.id} className="p-5 bg-[#0F1724] rounded-lg border border-[#183047] hover:border-orange-500 transition">
                  <h3 className="text-lg font-semibold mb-2">{t.name}</h3>
                  <p className="text-sm text-gray-300 mb-4">{t.subject} · <span className="text-orange-400 font-bold">{t.rate}</span></p>
                  <button className="w-full px-3 py-2 bg-orange-500 hover:bg-orange-600 rounded font-semibold transition">Book Session</button>
                </div>
              ))
            ) : (
              <p className="text-gray-400 col-span-full text-center">No tutors found</p>
            )}
          </div>
        </div>
      </section>

      {/* ITEM EXCHANGE SECTION */}
      <section className="px-6 md:px-20 py-16 bg-[#071022]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold">📦 Item Exchange</h2>
              <p className="text-gray-300 mt-1">Buy, sell, or trade campus items.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded font-semibold transition">
                Explore All
              </button>
              <button className="px-4 py-2 border border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-white rounded font-semibold transition">
                Post Item
              </button>
            </div>
          </div>

          <div className="mb-6">
            <input
              value={itemQuery}
              onChange={(e) => setItemQuery(e.target.value)}
              placeholder="Search items..."
              className="w-full px-4 py-2 rounded bg-[#0F1724] border border-[#183047] text-white"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_ITEMS.filter(i => i.name.toLowerCase().includes(itemQuery.toLowerCase())).length > 0 ? (
              SAMPLE_ITEMS.filter(i => i.name.toLowerCase().includes(itemQuery.toLowerCase())).map(i => (
                <div key={i.id} className="p-5 bg-[#0F1724] rounded-lg border border-[#183047] hover:border-orange-500 transition">
                  <h3 className="text-lg font-semibold mb-2">{i.name}</h3>
                  <p className="text-sm text-gray-300 mb-4">{i.seller} · <span className="text-orange-400 font-bold">{i.price}</span></p>
                  <button className="w-full px-3 py-2 bg-orange-500 hover:bg-orange-600 rounded font-semibold transition">Contact Seller</button>
                </div>
              ))
            ) : (
              <p className="text-gray-400 col-span-full text-center">No items found</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}