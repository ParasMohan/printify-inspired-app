import React from "react";

function BlogSection() {
	return (
		<section className="py-12 bg-gray-50 text-center">
			<h2 className="text-2xl font-bold mb-6">From Our Blog</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
				<div className="p-6 bg-white shadow-md rounded-lg">
					How to Make Money with Printify
				</div>
				<div className="p-6 bg-white shadow-md rounded-lg">
					Best Practices for E-commerce
				</div>
			</div>
			<div className="cta-form bg-indigo-100 p-6 rounded-lg">
				<h3 className="text-xl font-semibold mb-4">Make Money Risk-Free</h3>
				<form className="flex flex-col sm:flex-row justify-center gap-4">
					<input
						type="email"
						placeholder="Enter your email"
						className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
					/>
					<button
						type="submit"
						className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
					>
						Get Started
					</button>
				</form>
			</div>
		</section>
	);
}

export default BlogSection;
