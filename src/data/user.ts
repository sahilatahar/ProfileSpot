interface UserData {
	name: string
	title: string
	bio: string
	avatar: string
	interests: string[]
	skills: string[]
	projects: {
		title: string
		description: string
		github_url: string
		live_url: string
	}[]
	socials: {
		gmail: string
		twitter: string
		linkedin: string
		github: string
		instagram: string
	}
	links: {
		category: string
		resources: {
			title: string
			url: string
		}[]
	}[]
}

const userData: UserData = {
	name: "Sahil Atahar",
	title: "Full Stack Web Developer",
	bio: "I'm a Full Stack Developer looking for growth possibilities. I'm currently learning NextJS and TypeScript for smooth frontend-to-backend interaction.",
	avatar: "https://github.com/sahilatahar.png",
	interests: [
		"Full Stack Development",
		"MERN Development",
		"Web Development",
		"Frontend Development",
		"Backend Development",
	],
	skills: [
		"HTML",
		"CSS",
		"SCSS",
		"JavaScript",
		"TypeScript",
		"React JS",
		"Next JS",
		"Tailwind CSS",
		"Redux",
		"Node.js",
		"Express",
		"MongoDB",
		"Firebase",
		"Git & GitHub",
		"VS Code",
		"Prettier",
		"Markdown",
	],
	projects: [
		{
			title: "Code-Sync",
			description:
				"Code Sync offers a real-time collaborative code editor featuring unique room generation, syntax highlighting, and auto-suggestions. Users can seamlessly edit, save, and download files while communicating through group chat",
			github_url: "https://github.com/sahilatahar/Code-Sync",
			live_url: "https://code-sync-live.vercel.app/",
		},
		{
			title: "Real-Notes",
			description:
				"A note-taking application with CRUD operations, authentication, profile management, multi-language support, and customizable themes.",
			github_url: "https://github.com/sahilatahar/Real-Notes",
			live_url: "https://realnotes.netlify.app/",
		},
		{
			title: "MediaMaster",
			description:
				"MediaMaster is a versatile media recording application that allows users to capture screen activity, audio input, and more. Whether you're recording presentations, tutorials, or game play, MediaMaster provides intuitive features for seamless recording",
			github_url: "https://github.com/sahilatahar/MediaMaster",
			live_url: "https://media-master.vercel.app/",
		},
	],
	socials: {
		gmail: "mailto:sahilatahar@gmail.com",
		twitter: "https://twitter.com/sahilatahar",
		linkedin: "https://www.linkedin.com/in/sahilatahar",
		github: "https://github.com/sahilatahar",
		instagram: "https://instagram.com/sahilatahar",
	},
	links: [
		{
			category: "Cheat Sheets",
			resources: [
				{
					title: "Awesome cheatsheets",
					url: "https://lecoupa.github.io/awesome-cheatsheets/",
				},
				{
					title: "Rico's cheatsheets",
					url: "https://devhints.io/",
				},
				{
					title: "Quick Reference",
					url: "https://quickref.me/",
				},
				{
					title: "OverAPI.com - Collecting All Cheat Sheets",
					url: "https://overapi.com/",
				},
				{
					title: "React TypeScript cheatsheets",
					url: "https://react-typescript-cheatsheet.netlify.app/",
				},
			],
		},
		{
			category: "Free Coding Resources",
			resources: [
				{
					title: "Free for dev",
					url: "https://free-for.dev/",
				},
				{
					title: "Free hosting",
					url: "https://github.com/cloudcommunity/Free-Hosting",
				},
				{
					title: "Ultimate web development resources",
					url: "https://github.com/DhanushNehru/Ultimate-Web-Development-Resources",
				},
				{
					title: "Visualize web skills",
					url: "https://github.com/andreasbm/web-skills",
				},
				{
					title: "List of free stuff for developer",
					url: "https://github.com/hilmanski/freeStuffDev",
				},
			],
		},
		{
			category: "Coding Practice",
			resources: [
				{
					title: "Frontend Mentor - Improve your coding skills by building realistic projects",
					url: "https://www.frontendmentor.io",
				},
				{
					title: "LeetCode - Practice coding interviews and algorithm problems",
					url: "https://leetcode.com/",
				},
				{
					title: "Become a Pro in Frontend Dev with FrontendPro.dev",
					url: "https://www.frontendpro.dev/",
				},
				{
					title: "Practice with Real Life Coding Projects - DevChallenges",
					url: "https://devchallenges.io/",
				},
			],
		},
		{
			category: "AI Tools",
			resources: [
				{
					title: "ChatGPT - Conversational AI by OpenAI",
					url: "https://chat.openai.com",
				},
				{
					title: "Google's Gemini",
					url: "https://www.gemini.org/",
				},
				{
					title: "Chat with characters",
					url: "https://character.ai/",
				},
			],
		},
		{
			category: "Free APIs for Projects",
			resources: [
				{
					title: "Public APIs - List of free public APIs",
					url: "https://publicapis.dev/",
				},
				{
					title: "Fake Store API - Fake store REST API for your e-commerce or shopping website",
					url: "https://fakestoreapi.com/",
				},
				{
					title: "OpenWeatherMap - Access current weather data for any location",
					url: "https://openweathermap.org/api",
				},
				{
					title: "The open movie database",
					url: "https://www.omdbapi.com/",
				},
				{
					title: "The screenshot API for developers",
					url: "https://screenshotone.com/",
				},
			],
		},
		{
			category: "Design Resources",
			resources: [
				{
					title: "Free Website Figma Template",
					url: "https://templatesjungle.com/downloads/category/free-figma-resources/",
				},
				{
					title: "Free Design Resources",
					url: "https://www.designermill.com/",
				},
				{
					title: "Unsplash - Beautiful, free images and photos",
					url: "https://unsplash.com/",
				},
				{
					title: "Canva - Design anything. Publish anywhere.",
					url: "https://www.canva.com/",
				},
				{
					title: "Design resources for developers",
					url: "https://github.com/bradtraversy/design-resources-for-developers",
				},
			],
		},
		{
			category: "Programming Resources",
			resources: [
				{
					title: "Programming Notes for Professionals books",
					url: "https://goalkicker.com/",
				},
				{
					title: "Programming E-Books by CodeWithCurious",
					url: "https://codewithcurious.com/our-ebooks/",
				},
			],
		},
		{
			category: "Free Image Generators",
			resources: [
				{
					title: "Infinite image generation powered by AI",
					url: "https://picfinder.ai/",
				},
				{
					title: "Perchance - 100% free ai image generator",
					url: "https://perchance.org/ai-photo-generator",
				},
				{
					title: "Perchance - Pretty AI",
					url: "https://perchance.org/pretty-ai",
				},
				{
					title: "Midgen AI",
					url: "https://www.midgenai.com/",
				},
			],
		},
	],
}

export default userData
