import { Variants } from "framer-motion"

export const fadeUpParent: Variants = {
	hidden: { opacity: 1, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
}

export const fadeUpChild: Variants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
}

export const fadeToLeft: Variants = {
	hidden: { x: 20, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 1,
		},
	},
}
