// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="bg-navy min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-16 text-center lg:text-left flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Hustle Smarter. <br /> Find Your <span className="text-primary">Next Gig.</span>
          </h1>
          <p className="text-textLight text-lg mb-8 max-w-xl">
            HustleHub connects passionate freelancers with clients looking for skills. 
            Post your work, browse gigs, and grow your hustle — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-primary hover:bg-primaryLight px-6 py-3 rounded-xl font-semibold">
              Browse Gigs
            </button>
            <button className="border border-secondary text-secondary hover:bg-secondary/20 px-6 py-3 rounded-xl font-semibold">
              Post a Gig
            </button>
          </div>
        </div>

        {/* Right Illustration / Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img 
            src="/hero-illustration.png" 
            alt="HustleHub Illustration" 
            className="max-w-md w-full"
          />
        </div>
      </div>
    </section>
  );
}
