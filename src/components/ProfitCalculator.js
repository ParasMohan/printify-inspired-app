import React from "react";

const ProfitCalculator = ({
	title,
	subtitle,
	sellPrice,
	productionCost,
	profit,
	ctaText,
	onCtaClick,
}) => {
	return (
		<div className="profit-calculator max-w-screen-lg mx-auto flex flex-col md:flex-row bg-green-500 text-white p-4">
			{/* Left Side: Content */}
			<div className="left-content bg-green-600 p-8 flex-1 text-left">
				<h1 className="text-3xl font-bold">{title}</h1>
				<p className="mt-4">{subtitle}</p>

				<div className="breakdown mt-6 bg-green-800 p-4 rounded-md">
					<div className="flex justify-between">
						<span>You sell a t-shirt</span>
						<span>${sellPrice}</span>
					</div>
					<div className="flex justify-between mt-2">
						<span>You pay for its production</span>
						<span>${productionCost}</span>
					</div>
					<hr className="my-4 border-gray-400" />
					<div className="flex justify-between text-xl font-bold">
						<span>Your profit</span>
						<span className="text-green-300">${profit}</span>
					</div>
				</div>

				<button
					className="mt-6 bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-300"
					onClick={onCtaClick}
				>
					{ctaText}
				</button>
			</div>

			{/* Right Side: Graphic */}
			<div className="right-content flex-1 bg-white p-8">
				<img
					src="https://picsum.photos/seed/picsum/200/300"
					alt="Graphic description"
					className="w-full h-auto"
				/>
			</div>
		</div>
	);
};

export default ProfitCalculator;
