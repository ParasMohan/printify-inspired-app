import React from "react";
import ReviewSlider from "./ReviewSlider";
import BenefitsSection from "./BenefitsSection";
import BlogSection from "./BlogSection";
import ProfitCalculator from "./ProfitCalculator";
import "../components.css";

function Home() {
	const handleStartSelling = () => {
		alert("Start selling button clicked!");
	};
	return (
		<div>
			<ProfitCalculator
				title="Make Money, Risk-Free"
				subtitle="You pay for fulfillment only when you make a sale"
				sellPrice={30}
				productionCost={12}
				profit={18}
				ctaText="Start selling"
				onCtaClick={handleStartSelling}
			/>
			<ReviewSlider />
			<BenefitsSection />
			<BlogSection />
		</div>
	);
}

export default Home;
