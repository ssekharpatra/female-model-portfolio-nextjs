"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const Intro = () => {
	const { ref } = useSectionInView("Home", 0.5);

	return (
		<section ref={ref} id="home" className="p-5 lg:p-12 relative h-screen">
			<div className="absolute w-[90%] md:max-w-[75%] lg:max-w-[480px] left-1/2 top-[47%] -translate-x-1/2 -translate-y-[47%]">
				<motion.h1
					className="text-7xl md:text-8xl lg:text-9xl text-left lg:text-center capitalize"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: "tween",
						duration: 0.8,
					}}
				>
					Samira <br /> Hadid
				</motion.h1>
				<motion.div
					className="absolute top-1/2 -translate-y-1/2 right-[5%] lg:-right-[50%] -z-10 w-1/2 md:w-auto"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: "tween",
						duration: 0.8,
						delay: 0.3,
					}}
				>
					<Image
						src="/img-1.jpg"
						alt="Image 1"
						height="100"
						width="292"
						quality="95"
						priority={true}
						className="-scale-x-100 -rotate-[5deg] opacity-70 lg:opacity-100"
					/>
				</motion.div>
			</div>
			<div className="flex justify-between items-end h-[calc(100vh-2.5rem)] lg:h-[calc(100vh-6rem)]">
				<motion.h3
					className="uppercase leading-[1.2rem] text-lg self-start md:self-end mt-[4.5rem]"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: "tween",
						duration: 0.8,
						delay: 0.5,
					}}
				>
					Professional <br /> Model
				</motion.h3>
				<motion.h3
					className="text-right uppercase leading-[1.2rem] text-lg"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: "tween",
						duration: 0.8,
						delay: 0.5,
					}}
				>
					Part-time <br /> photographer
				</motion.h3>
			</div>
		</section>
	);
};

export default Intro;
