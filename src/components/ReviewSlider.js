import React, { useState, useEffect } from "react";

const reviews = [
	{
		name: "Robert A. Voltaire",
		role: "Store link",
		avatar: "https://via.placeholder.com/60",
		text: "Printify has been an incredible service for musicians...",
	},
	{
		name: "Quinten Barney",
		role: "Etsy Merchant",
		avatar: "https://via.placeholder.com/60",
		text: "We chose Printify because of their offerings...",
	},
	{
		name: "Nikki",
		role: "Store link",
		avatar: "https://via.placeholder.com/60",
		text: "Printify has been an amazing resource...",
	},
];

const ReviewSlider = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const handleDotClick = (index) => setActiveIndex(index);

	return (
		<div className="relative w-full overflow-hidden mt-8">
			<div
				className="flex transition-transform duration-500"
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}
			>
				{reviews.map((review, index) => (
					<div key={index} className="min-w-full p-6">
						<div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
							<img
								src={review.avatar}
								alt={review.name}
								className="w-14 h-14 rounded-full mb-4 object-cover"
							/>
							<h3 className="text-lg font-semibold mb-1">{review.name}</h3>
							<p className="text-sm text-green-600 mb-2">{review.role}</p>
							<p className="text-gray-600 text-center">{review.text}</p>
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-center mt-4">
				{reviews.map((_, index) => (
					<button
						key={index}
						onClick={() => handleDotClick(index)}
						className={`w-3 h-3 rounded-full mx-1 ${
							index === activeIndex ? "bg-indigo-600" : "bg-gray-400"
						}`}
					></button>
				))}
			</div>
		</div>
	);
};

export default ReviewSlider;
