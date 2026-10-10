// src/component/HomePage.jsx
import React from 'react';
import HowItWorks from './howitworks';
import FindGigs from './FindGigs';
import FindTalent from './FindTalent';
import CampusCorner from './CampusCorner';
import Testimonials from './Testimonials';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  const heroImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80";

  return (
    <div className="bg-[#0B1221] min-h-screen text-white">
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16">
        <div className="flex-1 max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Unlock Your Campus <br /> Career Potential
          </h1>
          <p className="text-gray-300 text-lg mt-4">
            Where student skills meet opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              onClick={() => navigate("/browsegigs")}
            >
              Browse gigs
            </button>
            <button
              className="border border-orange-400 hover:bg-orange-500 hover:text-white text-orange-400 px-6 py-3 rounded-lg font-semibold transition-all"
              onClick={() => navigate("/postgigs")}
            >
              Post gigs
            </button>
          </div>
        </div>
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img src={heroImage} alt="Students collaborating" className="w-[90%] md:w-[80%] max-w-lg" />
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <HowItWorks />
      <FindGigs />
      <FindTalent />
      <CampusCorner />
      <Testimonials />
    </div>
  );
}
