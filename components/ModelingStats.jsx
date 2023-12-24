"use client";

import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { motion } from "framer-motion";

const ModelingStats = () => {
	const { ref } = useSectionInView("Modeling Stats");

	return (
		<section
			ref={ref}
			id="modelingStats"
			className="p-5 lg:p-12 h-auto md:h-screen scroll-mt-[4.5rem] md:scroll-mt-0"
		>
			<div className="relative">
				<motion.span
					className="pageNumber text-3xl md:text-4xl absolute"
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
					06
				</motion.span>
			</div>
			<div className="flex flex-col md:flex-row gap-8 justify-between h-full">
				<div className="flex flex-col md:justify-center w-full md:w-1/2">
					<motion.h2
						className="text-6xl md:text-7xl lg:text-8xl capitalize mt-20 lg:mt-auto mb-8 md:mb-12"
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
						Modeling <br /> Stats
					</motion.h2>
					<table className="table-auto w-4/5 h-72">
						<tbody>
							<motion.tr
								className="mb-6"
								initial={{ opacity: 0, y: 10 }}
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
								<td>Height</td>
								<td>5&apos;9&quot;</td>
							</motion.tr>
							<motion.tr
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									type: "tween",
									duration: 0.8,
									delay: 0.3,
								}}
								viewport={{
									once: true,
								}}
							>
								<td>Weight</td>
								<td>108 lbs.</td>
							</motion.tr>
							<motion.tr
								initial={{ opacity: 0, y: 10 }}
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
								<td>Dress size</td>
								<td>2</td>
							</motion.tr>
							<motion.tr
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									type: "tween",
									duration: 0.8,
									delay: 0.5,
								}}
								viewport={{
									once: true,
								}}
							>
								<td>Shoe size</td>
								<td>9</td>
							</motion.tr>
							<motion.tr
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									type: "tween",
									duration: 0.8,
									delay: 0.6,
								}}
								viewport={{
									once: true,
								}}
							>
								<td>Bust</td>
								<td>32B</td>
							</motion.tr>
							<motion.tr
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									type: "tween",
									duration: 0.8,
									delay: 0.7,
								}}
								viewport={{
									once: true,
								}}
							>
								<td>Waist</td>
								<td>22</td>
							</motion.tr>
							<motion.tr
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									type: "tween",
									duration: 0.8,
									delay: 0.8,
								}}
								viewport={{
									once: true,
								}}
							>
								<td>Hips</td>
								<td>33</td>
							</motion.tr>
							<motion.tr
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									type: "tween",
									duration: 0.8,
									delay: 0.9,
								}}
								viewport={{
									once: true,
								}}
							>
								<td>Hair/Eyes</td>
								<td>Brown/Green</td>
							</motion.tr>
						</tbody>
					</table>
				</div>
				<motion.div
					className="w-full md:w-1/2 lg:w-auto"
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{
						type: "tween",
						duration: 0.8,
					}}
					viewport={{
						once: true,
					}}
				>
					<Image
						src="/img-9.jpg"
						alt="Image 9"
						height="100"
						width="292"
						quality="95"
						className="h-full w-full object-cover"
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default ModelingStats;
