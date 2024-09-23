import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./tailwind.css"; // Include your Tailwind CSS

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App flex flex-col min-h-screen">
			{/* Header Component */}
			<Header />

			{/* Main content area, wrapped to ensure full height */}
			<div className="content flex-grow">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/services" element={<Services />} />
				</Routes>
			</div>

			{/* Footer Component */}
			<Footer />
		</div>
	);
}

export default App;
