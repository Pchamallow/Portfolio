export const translations = {
	fr: {
		hero: {
		welcome: "Bienvenue !",
		imTitle: "Je suis",
		role: "Développeuse web · exploration data & IA",
		aboutMeLabel: "À propos de moi",
		aboutMeText: [
			"Je suis étudiante à 42 Angoulême, où j’apprends principalement par la documentation, l’expérimentation et la réalisation de projets concrets.",
			"Actuellement, je me concentre principalement sur le développement logiciel et web. Je souhaite également élargir progressivement mes compétences vers la data et l’intelligence artificielle, qui font partie des domaines que je souhaite explorer et développer dans la suite de mon parcours.",
		],
		availability: "🎯 Recherche une alternance en Web, Data ou IA — disponible dès janvier 2027",
		onSiteLabel: "Sur ce site",
		onSiteText: "Vous pourrez explorer mes projets web et data, ma roadmap (web, data, IA), et mon CV. Chaque page projet inclut l'objectif, les compétences utilisées, une vidéo d'exploration, et un lien vers le repo GitHub."
		},
		cv: {
		download: "Télécharger",
		},
		roadmap: {
			projetsCC: {
				date : "Octobre 2025 - Novembre 2026",
				title: "CC",
				description: "All project of common core 42.",
			},
			linearRegression: {
				date : "Novembre 2026",
				title: "ft_linear_regression",
				description: "",
			},
		},
	},
	en: {
		hero: {
		welcome: "Welcome !",
		imTitle: "I'm",
		role: "Web developer · exploring data & AI",
		aboutMeLabel: "About me",
		aboutMeText: [
			"I am a student at 42 Angoulême, where I learn primarily through documentation, experimentation, and hands-on projects.",
			"Currently, my main focus is software and web development. I also plan to progressively expand my skills into data and artificial intelligence, as these are areas I am interested in exploring and developing throughout my career.",
		],
		availability: "🎯 Looking for an alternance in Web, Data or AI — available from January 2027",
		onSiteLabel: "On this website",
		onSiteText: "You can explore my projects across web and data, my roadmap for what's in progress and coming next (web, data, AI), and my CV. Each project page includes the goal, the skills involved, demo videos, and a link to the GitHub repo."
		},
		cv: {
		download: "Download",
		}
	}
} as const;

export type Lang = keyof typeof translations;