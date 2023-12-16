import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import ModelingStats from "@/components/ModelingStats";
import Portfolio from "@/components/Portfolio";

export default function Home() {
	return (
		<main>
			<Intro />
			<About />
			<Portfolio />
			<ModelingStats />
			<Contact />
		</main>
	);
}
