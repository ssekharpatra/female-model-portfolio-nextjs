import Image from "next/image";

const Portfolio = () => {
	return (
		<>
			<section
				id="portfolio"
				className="p-12 pb-16 h-[100vh] flex flex-col justify-between"
			>
				<div className="flex relative">
					<span className="pageNumber text-4xl absolute">03</span>
					<h2 className="text-7xl capitalize text-center mx-auto">
						Some of my <br /> work
					</h2>
				</div>
				<div className="flex gap-20">
					<div className="w-1/2 flex justify-end items-end">
						<Image
							src="/img-3.jpg"
							alt="Image 3"
							height="100"
							width="292"
							quality="95"
							className="w-full max-w-[80%] h-min"
						/>
					</div>
					<div className="w-1/2">
						<Image
							src="/img-4.jpg"
							alt="Image 4"
							height="100"
							width="292"
							quality="95"
							className="w-full max-w-[80%]"
						/>
						<h3 className="uppercase mt-6 text-lg">A focus on the body</h3>
						<p>A self-directed shoot to show flow and movement.</p>
					</div>
				</div>
			</section>

			<section className="p-12 py-16 h-[100vh]">
				<div className="relative">
					<span className="pageNumber text-4xl absolute">04</span>
				</div>
				<div className="flex gap-20 h-full ml-[15%]">
					<div className="flex flex-col justify-between w-3/5">
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
					<div className="w-2/5">
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

			<section className="p-12 py-16 h-[100vh]">
				<div className="relative">
					<span className="pageNumber text-4xl absolute">05</span>
				</div>
				<div className="flex justify-between h-full">
					<div className="flex flex-col w-1/3">
						<h3 className="uppercase text-lg mt-auto">A play on color</h3>
						<p>
							I&apos;m also fascinated by different hues, and how they can come
							alive on camera.
						</p>
					</div>
					<div className="flex justify-center items-center w-2/3 relative mr-[5%]">
						<Image
							src="/img-7.jpg"
							alt="Image 7"
							height="100"
							width="292"
							quality="95"
							className="w-full max-w-[380px] absolute -z-2 right-[350px] -rotate-[5deg] top-4"
						/>
						<Image
							src="/img-8.jpg"
							alt="Image 8"
							height="100"
							width="292"
							quality="95"
							className="w-full max-w-[380px] absolute right-0 bottom-4"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Portfolio;
