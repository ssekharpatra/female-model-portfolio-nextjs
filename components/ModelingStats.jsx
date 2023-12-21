"use client";

import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

const ModelingStats = () => {
	const { ref } = useSectionInView("Modeling Stats");

	return (
		<section
			ref={ref}
			id="modelingStats"
			className="p-5 lg:p-12 h-auto md:h-screen scroll-mt-[4.5rem] md:scroll-mt-0"
		>
			<div className="relative">
				<span className="pageNumber text-3xl md:text-4xl absolute">06</span>
			</div>
			<div className="flex flex-col md:flex-row gap-8 justify-between h-full">
				<div className="flex flex-col md:justify-center w-full md:w-1/2">
					<h2 className="text-6xl md:text-7xl lg:text-8xl capitalize mt-20 lg:mt-auto mb-8 md:mb-12">
						Modeling <br /> Stats
					</h2>
					<table className="table-auto w-4/5 h-72">
						<tbody>
							<tr className="mb-6">
								<td>Height</td>
								<td>5&apos;9&quot;</td>
							</tr>
							<tr>
								<td>Weight</td>
								<td>108 lbs.</td>
							</tr>
							<tr>
								<td>Dress size</td>
								<td>2</td>
							</tr>
							<tr>
								<td>Shoe size</td>
								<td>9</td>
							</tr>
							<tr>
								<td>Bust</td>
								<td>32B</td>
							</tr>
							<tr>
								<td>Waist</td>
								<td>22</td>
							</tr>
							<tr>
								<td>Hips</td>
								<td>33</td>
							</tr>
							<tr>
								<td>Hair/Eyes</td>
								<td>Brown/Green</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="w-full md:w-1/2 lg:w-auto">
					<Image
						src="/img-9.jpg"
						alt="Image 9"
						height="100"
						width="292"
						quality="95"
						className="h-full w-full object-cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default ModelingStats;
