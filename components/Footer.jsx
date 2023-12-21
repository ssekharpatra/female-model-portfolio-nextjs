import Link from "next/link";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
	return (
		<footer>
			<p className="text-xs lg:text-sm p-4 text-center">
				Copyright © {new Date().getFullYear()} All rights reserved | Developed
				with <FaHeart className="inline-block" /> by{" "}
				<Link href="https://www.instagram.com/technovaty" target="_blank">
					Technovaty
				</Link>
			</p>
		</footer>
	);
};

export default Footer;
