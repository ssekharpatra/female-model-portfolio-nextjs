import Image from "next/image";

const Portfolio = () => {
	return (
		<>
			<section
				id="portfolio"
				className="p-12 h-[100vh] flex flex-col justify-between"
			>
				<div className="flex relative">
					<span className="pageNumber text-4xl absolute">03</span>
					<h2 className="text-8xl capitalize text-center mx-auto">
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

			<section className="p-12 h-[100vh]">
				<div className="relative">
					<span className="pageNumber text-4xl absolute">04</span>
				</div>
				<div className="flex gap-20 h-full">
					<div className="flex flex-col justify-between w-3/5"></div>
					<div className="w-2/5">
						<Image
							src="/img-6.jpg"
							alt="Image 6"
							height="100"
							width="292"
							quality="95"
							className="h-full w-auto"
						/>
					</div>
				</div>
			</section>

			<section className="p-12 h-[100vh]">
				<div className="relative">
					<span className="pageNumber text-4xl absolute">05</span>
				</div>
			</section>
		</>
	);
};

export default Portfolio;
