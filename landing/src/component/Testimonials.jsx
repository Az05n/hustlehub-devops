import React, { useState } from "react";

const TESTIMONIALS_DATA = [
	{
		id: 1,
		name: "Sarah Johnson",
		role: "3rd Year Student",
		text: "HustleHub helped me earn $500 last semester by doing small gigs. It's perfect for students looking to balance work and studies!",
		rating: 5,
		avatar: "👩‍🎓",
	},
	{
		id: 2,
		name: "Marcus Lee",
		role: "2nd Year Student",
		text: "I found a great tutor for my Chemistry class and improved my grades significantly. The platform is super user-friendly!",
		rating: 5,
		avatar: "👨‍🎓",
	},
	{
		id: 3,
		name: "Emily Chen",
		role: "4th Year Student",
		text: "Posted my design services and got consistent clients. HustleHub is an amazing portfolio builder while earning money.",
		rating: 5,
		avatar: "👩‍💼",
	},
	{
		id: 4,
		name: "David Brown",
		role: "1st Year Student",
		text: "The skill exchange feature helped me learn web development from a senior. Best campus community platform ever!",
		rating: 4,
		avatar: "👨‍💻",
	},
	{
		id: 5,
		name: "Jessica Martinez",
		role: "3rd Year Student",
		text: "Sold my old textbooks and bought notes for my classes. Everything is so convenient and affordable!",
		rating: 5,
		avatar: "👩‍🎓",
	},
	{
		id: 6,
		name: "Alex Wilson",
		role: "2nd Year Student",
		text: "As an organization leader, posting events and finding student helpers through HustleHub was a game-changer!",
		rating: 5,
		avatar: "👨‍💼",
	},
];

export default function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
	};

	const prevSlide = () => {
		setCurrentIndex(
			(prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length
		);
	};

	const visibleTestimonials = [
		TESTIMONIALS_DATA[currentIndex],
		TESTIMONIALS_DATA[(currentIndex + 1) % TESTIMONIALS_DATA.length],
		TESTIMONIALS_DATA[(currentIndex + 2) % TESTIMONIALS_DATA.length],
	];

	return (
		<section className="px-6 md:px-20 py-16 bg-[#071022]">
			<h2 className="text-3xl font-bold mb-4 text-center">
				Student Testimonials
			</h2>
			<p className="text-gray-300 max-w-2xl mx-auto text-center mb-10">
				Hear from our community of successful students and organizations.
			</p>

			<div className="max-w-6xl mx-auto">
				<div className="grid gap-6 md:grid-cols-3 mb-8">
					{visibleTestimonials.map((testimonial) => (
						<div
							key={testimonial.id}
							className="bg-[#0F1724] p-6 rounded-lg border border-[#183047]"
						>
							<div className="flex items-center mb-4">
								<div className="text-4xl mr-4">{testimonial.avatar}</div>
								<div>
									<h4 className="font-semibold text-white">
										{testimonial.name}
									</h4>
									<p className="text-sm text-gray-400">
										{testimonial.role}
									</p>
								</div>
							</div>
							<div className="flex mb-3">
								{[...Array(testimonial.rating)].map((_, i) => (
									<span key={i} className="text-orange-400">
										⭐
									</span>
								))}
							</div>
							<p className="text-gray-300 text-sm italic">
								"{testimonial.text}"
							</p>
						</div>
					))}
				</div>

				{/* Navigation Controls */}
				<div className="flex justify-center items-center gap-4">
					<button
						onClick={prevSlide}
						className="p-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all"
					>
						←
					</button>
					<div className="flex gap-2">
						{TESTIMONIALS_DATA.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`w-2 h-2 rounded-full transition-all ${
									index === currentIndex ? "bg-orange-500 w-8" : "bg-gray-500"
								}`}
							/>
						))}
					</div>
					<button
						onClick={nextSlide}
						className="p-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all"
					>
						→
					</button>
				</div>

				{/* View All Link */}
				<div className="text-center mt-8">
					<a
						href="/all-testimonials"
						className="text-orange-400 hover:text-orange-300 font-semibold"
					>
						View all testimonials →
					</a>
				</div>
			</div>
		</section>
	);
}