"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Intro = () => {
	return (
		<section className="flex flex-col justify-end p-12 relative h-[100vh]">
			<div className="absolute left-1/2 top-[47%] -translate-x-1/2 -translate-y-[47%]">
				<motion.h1
					className="text-9xl text-center capitalize"
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
					className="absolute top-1/2 -translate-y-1/2 -right-[16.4rem] -z-10"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: "tween",
						duration: 0.8,
						delay: 0.2,
					}}
				>
					<Image
						src="/img-1.jpg"
						alt="Image 1"
						height="100"
						width="292"
						quality="95"
						priority={true}
						className="-scale-x-100 -rotate-[5deg]"
					/>
				</motion.div>
			</div>
			<div className="flex justify-between">
				<motion.h3
					className="uppercase leading-[1.2rem] text-lg"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						type: "tween",
						duration: 0.8,
						delay: 0.4,
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
						delay: 0.4,
					}}
				>
					Part-time <br /> photographer
				</motion.h3>
			</div>
		</section>
	);
};

export default Intro;
