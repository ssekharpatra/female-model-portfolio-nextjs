import Image from "next/image";

const Intro = () => {
	return (
		<section className="flex flex-col justify-end p-12 relative">
			<div className="absolute left-1/2 top-[47%] -translate-x-1/2 -translate-y-[47%]">
				<h1 className="text-8xl xl:text-9xl text-center">
					Samira <br /> Hadid
				</h1>
				<Image
					src="/img-1.jpg"
					alt="Image 1"
					height="100"
					width="292"
					quality="95"
					priority={true}
					className="absolute top-1/2 -translate-y-1/2 -right-[16.4rem] -scale-x-100 -rotate-[5deg] -z-10"
				/>
			</div>
			<div className="flex justify-between">
				<h3 className="uppercase leading-[1.2rem] text-lg">
					Professional <br /> Model
				</h3>
				<h3 className="text-right uppercase leading-[1.2rem] text-lg">
					Part-time <br /> photographer
				</h3>
			</div>
		</section>
	);
};

export default Intro;
