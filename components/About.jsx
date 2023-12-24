"use client";

import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
	const { ref } = useSectionInView("About");

	return (
		<section
			ref={ref}
			id="about"
			className="flex flex-col md:flex-row justify-between p-5 pb-9 lg:p-12 gap-0 lg:gap-6 scroll-mt-[4.5rem] md:scroll-mt-0 min-h-screen"
		>
			<div className="flex flex-col justify-between w-full md:w-3/5 mb-12">
				<div>
					<motion.span
						className="pageNumber text-3xl md:text-4xl"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							type: "tween",
							duration: 1,
						}}
						viewport={{
							once: true,
						}}
					>
						02
					</motion.span>
					<motion.h2
						className="text-6xl md:text-7xl lg:text-8xl capitalize mt-12 md:mt-16 lg:mt-32 mb-8"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							type: "tween",
							duration: 0.8,
						}}
						viewport={{
							once: true,
						}}
					>
						More <br /> about me
					</motion.h2>
				</div>
				<div className="flex flex-col lg:flex-row gap-5 lg:gap-16">
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							type: "tween",
							duration: 0.8,
							delay: 0.2,
						}}
						viewport={{
							once: true,
						}}
					>
						With a captivating presence honed over 3 years in the fashion
						industry, I am a seasoned professional model based in the heart of
						New York. From runway to editorial, I bring versatility and grace to
						every project.
					</motion.p>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							type: "tween",
							duration: 0.8,
							delay: 0.4,
						}}
						viewport={{
							once: true,
						}}
					>
						My journey is a fusion of passion and dedication, creating a visual
						symphony that transcends trends. Join me on this artistic voyage,
						where style meets substance, and together, we redefine the narrative
						of beauty and expression.
					</motion.p>
				</div>
			</div>
			<motion.div
				className="flex justify-center items-center w-[95%] md:w-3/5 lg:w-2/5 rotate-[4deg] mx-auto"
				initial={{ opacity: 0, rotate: 0 }}
				whileInView={{ opacity: 1, rotate: 4 }}
				transition={{
					type: "tween",
					duration: 1,
					delay: 0.3,
				}}
				viewport={{
					once: true,
				}}
			>
				<Image
					src="/img-2.jpg"
					alt="Image 2"
					height="100"
					width="292"
					quality="95"
					className="w-[70%]"
				/>
			</motion.div>
		</section>
	);
};

export default About;
