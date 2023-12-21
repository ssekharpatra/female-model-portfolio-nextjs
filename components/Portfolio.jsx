"use client";

import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

const Portfolio = () => {
	const { ref } = useSectionInView("Portfolio");

	return (
		<>
			<section
				ref={ref}
				id="portfolio"
				className="p-5 lg:p-12 md:pb-10 lg:pb-16 flex flex-col justify-between h-auto lg:h-screen scroll-mt-[4.5rem] md:scroll-mt-0"
			>
				<div className="flex relative">
					<span className="pageNumber text-3xl md:text-4xl absolute">03</span>
					<h2 className="text-6xl md:text-7xl lg:text-8xl capitalize text-center mx-auto mt-20 lg:mt-0 mb-12 md:mb-16 lg:mb-0">
						Some of my work
					</h2>
				</div>
				<div className="flex flex-col lg:flex-row gap-6 lg:gap-20">
					<div className="w-full lg:w-1/2 flex justify-end items-end">
						<Image
							src="/img-3.jpg"
							alt="Image 3"
							height="100"
							width="292"
							quality="95"
							className="w-full max-w-full lg:max-w-[80%] h-min"
						/>
					</div>
					<div className="w-full lg:w-1/2">
						<Image
							src="/img-4.jpg"
							alt="Image 4"
							height="100"
							width="292"
							quality="95"
							className="w-full max-w-full lg:max-w-[80%]"
						/>
						<h3 className="uppercase mt-6 text-lg">A focus on the body</h3>
						<p>A self-directed shoot to show flow and movement.</p>
					</div>
				</div>
			</section>

			<section className="p-5 md:py-10 lg:p-12 lg:py-16 h-auto">
				<div className="relative">
					<span className="pageNumber text-3xl md:text-4xl absolute">04</span>
				</div>
				<div className="flex flex-col md:flex-row gap-6 lg:gap-20 h-full mt-20 md:mt-0 md:ml-[15%]">
					<div className="flex flex-col justify-between md:w-3/5">
						<Image
							src="/img-5.jpg"
							alt="Image 5"
							height="100"
							width="292"
							quality="95"
							className="w-full"
						/>
						<div>
							<h3 className="uppercase mt-6 text-lg">Shoot concept</h3>
							<p>
								To make the shoot look effortless and organic, I took timed
								stills of me in the middle of a dance.
							</p>
						</div>
					</div>
					<div className="md:w-2/5">
						<Image
							src="/img-6.jpg"
							alt="Image 6"
							height="100"
							width="292"
							quality="95"
							className="h-full w-fit"
						/>
					</div>
				</div>
			</section>

			<section className="p-5 lg:p-12 lg:py-16 h-[80vh] md:h-screen">
				<div className="relative">
					<span className="pageNumber text-3xl md:text-4xl absolute">05</span>
				</div>
				<div className="flex flex-col lg:flex-row justify-between h-full">
					<div className="flex flex-col lg:w-1/3 mt-20 mb-12 md:mb-16 lg:mb-0">
						<h3 className="uppercase text-lg mt-auto">A play on color</h3>
						<p>
							I&apos;m also fascinated by different hues, and how they can come
							alive on camera.
						</p>
					</div>
					<div className="lg:w-2/3 relative lg:mr-[5%] h-full lg:h-auto">
						<Image
							src="/img-7.jpg"
							alt="Image 7"
							height="100"
							width="292"
							quality="95"
							className="w-full max-w-[55%] lg:max-w-[380px] absolute -z-2 lg:right-[350px] -rotate-[5deg] top-4 left-[4%] lg:left-auto"
						/>
						<Image
							src="/img-8.jpg"
							alt="Image 8"
							height="100"
							width="292"
							quality="95"
							className="w-full max-w-[55%] lg:max-w-[380px] absolute right-0 bottom-4"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Portfolio;
