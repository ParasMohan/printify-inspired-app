import React from "react";
import "../components.css";

function BenefitsSection() {
	return (
		<section className="benefits-section">
			<h2>Why Choose Us?</h2>
			<div className="benefits-grid">
				<div className="benefit-item">
					Higher Profits: Lowest prices in the industry.
				</div>
				<div className="benefit-item">
					Robust Scaling: Handle peak seasons easily.
				</div>
				<div className="benefit-item">
					Best Selection: 900+ products to choose from.
				</div>
			</div>
		</section>
	);
}

export default BenefitsSection;
