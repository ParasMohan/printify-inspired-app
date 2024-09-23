import React, { useState, useEffect } from "react";

const reviews = [
	{
		name: "Robert A. Voltaire",
		role: "Store link",
		avatar: "https://via.placeholder.com/60",
		rating: 5,
		text: "Printify has been an incredible service for musicians like me. The quality and options they provide for custom merchandise are top-notch, and it’s helped me grow my store significantly. The seamless integration with platforms like Etsy makes running the store a breeze. I couldn't be happier with the results and the support from Printify!",
	},
	{
		name: "Quinten Barney",
		role: "Etsy Merchant",
		avatar: "https://via.placeholder.com/60",
		rating: 4,
		text: "We chose Printify because of their wide range of product offerings and competitive pricing. Managing orders is smooth, and the turnaround times are great. It has allowed us to scale up our business on Etsy with minimal effort. While there’s room for improvement in certain areas, overall, I’m satisfied with the service.",
	},
	{
		name: "Nikki",
		role: "Store link",
		avatar: "https://via.placeholder.com/60",
		rating: 5,
		text: "Printify has been an amazing resource for my business. The platform is easy to navigate, and their print-on-demand solutions have allowed me to focus on growing my brand without worrying about inventory or shipping. Their customer support is always responsive and helpful. Highly recommend it to anyone looking to start a print-on-demand store!",
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

	const renderStars = (rating) => {
		return Array.from({ length: 5 }, (_, i) => (
			<svg
				key={i}
				xmlns="http://www.w3.org/2000/svg"
				className={`w-4 h-4 ${
					i < rating ? "text-yellow-500" : "text-gray-300"
				}`}
				fill="currentColor"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.13 6.56a1 1 0 00.95.69h6.905c.97 0 1.371 1.24.588 1.81l-5.57 4.04a1 1 0 00-.364 1.118l2.13 6.56c.3.921-.755 1.688-1.54 1.118l-5.57-4.04a1 1 0 00-1.176 0l-5.57 4.04c-.785.57-1.84-.197-1.54-1.118l2.13-6.56a1 1 0 00-.364-1.118L2.48 11.99c-.784-.57-.382-1.81.588-1.81h6.905a1 1 0 00.95-.69l2.13-6.56z"
				/>
			</svg>
		));
	};

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
							<div className="flex mb-2">{renderStars(review.rating)}</div>
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
