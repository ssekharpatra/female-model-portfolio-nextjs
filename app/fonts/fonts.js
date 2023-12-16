import localFont from "next/font/local";

export const lovelace = localFont({
	src: "./Lovelace/Lovelace Regular.otf",
	display: "swap",
	variable: "--lovelace-font",
});

export const tenorSans = localFont({
	src: "./Tenor_Sans/TenorSans-Regular.ttf",
	display: "swap",
	variable: "--tenorSans-font",
});

export const brownSugar = localFont({
	src: "./Brown_Sugar/Brown Sugar .ttf",
	display: "swap",
	variable: "--brownSugar-font",
});
