import { tenorSans, lovelace, brownSugar } from "./fonts/fonts";
import "./globals.css";

export const metadata = {
	title: "Samira Hadid | Professional Model",
	description:
		"Samira Hadid is a professional model and also a part-time photographer.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${tenorSans.variable} ${lovelace.variable} ${brownSugar.variable}`}
			>
				{children}
			</body>
		</html>
	);
}
