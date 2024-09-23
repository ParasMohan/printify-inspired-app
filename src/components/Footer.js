import React from "react";

function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Footer Section 1: Logo */}
					<div>
						<h3 className="text-lg font-bold mb-4">MyBrand</h3>
						<p>
							Elevating your brand with quality products. Explore a wide range
							of custom options tailored to your business needs.
						</p>
					</div>

					{/* Footer Section 2: Quick Links */}
					<div>
						<h4 className="font-semibold mb-4">Quick Links</h4>
						<ul>
							<li className="mb-2">
								<a href="/" className="hover:text-yellow-400">
									Home
								</a>
							</li>
							<li className="mb-2">
								<a href="/pricing" className="hover:text-yellow-400">
									Pricing
								</a>
							</li>
							<li className="mb-2">
								<a href="/blog" className="hover:text-yellow-400">
									Blog
								</a>
							</li>
							<li className="mb-2">
								<a href="/services" className="hover:text-yellow-400">
									Services
								</a>
							</li>
						</ul>
					</div>

					{/* Footer Section 3: Contact Info */}
					<div>
						<h4 className="font-semibold mb-4">Contact Us</h4>
						<ul>
							<li className="mb-2">Email: info@mybrand.com</li>
							<li className="mb-2">Phone: +123 456 7890</li>
							<li className="mb-2">Address: 123 Business Ave, City</li>
						</ul>
					</div>

					{/* Footer Section 4: Social Media */}
					<div>
						<h4 className="font-semibold mb-4">Follow Us</h4>
						<div className="flex space-x-4">
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noreferrer"
								className="hover:text-yellow-400"
							>
								<i className="fab fa-facebook-f"></i> Facebook
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noreferrer"
								className="hover:text-yellow-400"
							>
								<i className="fab fa-twitter"></i> Twitter
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noreferrer"
								className="hover:text-yellow-400"
							>
								<i className="fab fa-instagram"></i> Instagram
							</a>
						</div>
					</div>
				</div>

				<div className="text-center mt-8">
					<p className="text-gray-500">
						&copy; 2024 MyBrand. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
