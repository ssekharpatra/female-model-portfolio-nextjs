import Image from "next/image";

const About = () => {
	return (
		<section className="flex justify-between p-12 h-[100vh] gap-6">
			<div className="flex flex-col justify-between w-3/5">
				<div>
					<span className="pageNumber text-4xl">02</span>
					<h2 className="text-8xl capitalize mt-32">
						More <br /> about me
					</h2>
				</div>
				<div className="flex gap-16">
					<p>
						With a captivating presence honed over 3 years in the fashion
						industry, I am a seasoned professional model based in the heart of
						New York. From runway to editorial, I bring versatility and grace to
						every project.
					</p>
					<p>
						My journey is a fusion of passion and dedication, creating a visual
						symphony that transcends trends. Join me on this artistic voyage,
						where style meets substance, and together, we redefine the narrative
						of beauty and expression.
					</p>
				</div>
			</div>
			<div className="flex justify-center items-center w-2/5">
				<Image
					src="/img-2.jpg"
					alt="Image 2"
					height="100"
					width="292"
					quality="95"
					className="w-[70%] rotate-[4deg]"
				/>
			</div>
		</section>
	);
};

export default About;
