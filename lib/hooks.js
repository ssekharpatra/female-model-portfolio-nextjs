import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(sectionName, threshold = 0.6) {
	const { ref, inView } = useInView({
		threshold,
	});
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection(sectionName);
		}
	}, [inView, setActiveSection, timeOfLastClick, sectionName]);

	return {
		ref,
	};
}
