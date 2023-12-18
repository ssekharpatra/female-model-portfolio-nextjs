import Header from "@/components/Header";
import { tenorSans, lovelace, brownSugar } from "./fonts/fonts";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";

export const metadata = {
	title: "Samira Hadid | Professional Model",
	description:
		"Samira Hadid is a professional model and also a part-time photographer.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="!scroll-smooth">
			<body
				className={`${tenorSans.variable} ${lovelace.variable} ${brownSugar.variable}`}
			>
				<ActiveSectionContextProvider>
					<Header />
					{children}
				</ActiveSectionContextProvider>
			</body>
		</html>
	);
}
