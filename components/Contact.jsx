"use client";

import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {
	const { ref } = useSectionInView("Contact");

	return (
		<section
			ref={ref}
			id="contact"
			className="p-5 lg:p-12 relative flex flex-col justify-between min-h-screen scroll-mt-[4.5rem] md:scroll-mt-0"
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
					07
				</motion.span>
			</div>
			<div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-[40%] w-full">
				<motion.h2
					className="text-6xl md:text-7xl lg:text-8xl capitalize text-center"
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
					Let&apos;s work <br /> together
				</motion.h2>
				<motion.div
					className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10 w-full max-w-[17rem] flex justify-center items-center"
					initial={{
						opacity: 0,
						y: "-50%",
						x: "-50%",
						rotate: "-12deg",
						scale: 0.9,
					}}
					whileInView={{
						opacity: 1,
						y: "-50%",
						x: "-50%",
						rotate: "12deg",
						scale: 1,
					}}
					transition={{
						type: "tween",
						duration: 0.8,
						delay: 0.2,
					}}
					viewport={{
						once: true,
					}}
				>
					<Image
						src="/img-10.jpg"
						alt="Image 10"
						height="100"
						width="292"
						quality="95"
						className="w-full opacity-60"
					/>
				</motion.div>
			</div>
			<div className="flex justify-between flex-col md:flex-row gap-4">
				<span className="text-center">
					<motion.h3
						className="uppercase text-xl mb-1"
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
						Address
					</motion.h3>
					<motion.p
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
						<Link
							href="https://maps.app.goo.gl/bZYsZ3QyJFsgQEe4A"
							target="_blank"
						>
							123 Anywhere St., Any City, ST
						</Link>
					</motion.p>
				</span>
				<span className="text-center">
					<motion.h3
						className="uppercase text-xl mb-1"
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
						Phone
					</motion.h3>
					<motion.p
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
						<Link href="tel:+123456789">(123) 456 7890</Link>
					</motion.p>
				</span>
				<span className="text-center">
					<motion.h3
						className="uppercase text-xl mb-1"
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
						Email
					</motion.h3>
					<motion.p
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
						<Link href="mailto:hello@reallygreatsite.com">
							hello@reallygreatsite.com
						</Link>
					</motion.p>
				</span>
			</div>
		</section>
	);
};

export default Contact;
