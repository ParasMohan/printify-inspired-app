import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<header className="bg-purple-800 text-white p-4">
			<nav className="flex justify-between items-center">
				<div className="text-2xl font-bold">MyBrand</div>
				<div className="flex space-x-4">
					<NavLink to="/" className="text-white hover:text-yellow-300">
						Home
					</NavLink>
					<NavLink to="/pricing" className="text-white hover:text-yellow-300">
						Pricing
					</NavLink>
					<NavLink to="/blog" className="text-white hover:text-yellow-300">
						Blog
					</NavLink>
					<NavLink to="/services" className="text-white hover:text-yellow-300">
						Services
					</NavLink>
				</div>
				<div className="flex space-x-2">
					<button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">
						Log In
					</button>
					<button className="bg-white text-purple-800 px-4 py-2 rounded hover:bg-gray-100">
						Sign Up
					</button>
				</div>
			</nav>
		</header>
	);
}

export default Header;
