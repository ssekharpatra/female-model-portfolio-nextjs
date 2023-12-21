"use client";

import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
	const { ref } = useSectionInView("Contact");

	return (
		<section
			ref={ref}
			id="contact"
			className="p-5 lg:p-12 relative flex flex-col justify-between min-h-screen scroll-mt-[4.5rem] md:scroll-mt-0"
		>
			<div className="relative">
				<span className="pageNumber text-3xl md:text-4xl absolute">07</span>
			</div>
			<div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-[40%] w-full">
				<h2 className="text-6xl md:text-7xl lg:text-8xl capitalize text-center">
					Let&apos;s work <br /> together
				</h2>
				<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10 w-full max-w-[17rem] flex justify-center items-center">
					<Image
						src="/img-10.jpg"
						alt="Image 10"
						height="100"
						width="292"
						quality="95"
						className="rotate-[12deg] w-full opacity-60"
					/>
				</div>
			</div>
			<div className="flex justify-between flex-col md:flex-row gap-4">
				<span className="text-center">
					<h3 className="uppercase text-xl mb-1">Address</h3>
					<p>
						<Link
							href="https://maps.app.goo.gl/bZYsZ3QyJFsgQEe4A"
							target="_blank"
						>
							123 Anywhere St., Any City, ST
						</Link>
					</p>
				</span>
				<span className="text-center">
					<h3 className="uppercase text-xl mb-1">Phone</h3>
					<p>
						<Link href="tel:+123456789">(123) 456 7890</Link>
					</p>
				</span>
				<span className="text-center">
					<h3 className="uppercase text-xl mb-1">Email</h3>
					<p>
						<Link href="mailto:hello@reallygreatsite.com">
							hello@reallygreatsite.com
						</Link>
					</p>
				</span>
			</div>
		</section>
	);
};

export default Contact;
