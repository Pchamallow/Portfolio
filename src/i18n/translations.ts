export const translations = {
	fr: {
		hero: {
		welcome: "Bienvenue !",
		imTitle: "Je suis",
		role: "Développeuse web · exploration data & IA",
		aboutMeLabel: "À propos de moi",
		aboutMeText: [
			"Je suis étudiante à 42 Angoulême, j'apprends en documentant et en construisant.",
			"Le développement web est mon focus principal, avec la data et l'IA comme outils pour rendre mes produits plus intelligents.",
			"Actuellement à la recherche d'une alternance pour apporter cet état d'esprit terrain à une équipe."
		],
		availability: "🎯 Recherche une alternance en Web, Data ou IA — disponible dès janvier 2027",
		onSiteLabel: "Sur ce site",
		onSiteText: "Vous pouvez explorer mes projets web et data, ma roadmap (web, data, IA), et mon CV. Chaque page projet inclut l'objectif, les compétences utilisées, une vidéo d'exploration, et un lien vers le repo GitHub."
		}
	},
	en: {
		hero: {
		welcome: "Welcome !",
		imTitle: "I'm",
		role: "Web developer · exploring data & AI",
		aboutMeLabel: "About me",
		aboutMeText: [
			"I'm a 42 Angoulême student who learns by documenting and building.",
			"Web development is my main focus, with data and AI as tools I use to make products smarter.",
			"Currently searching for an alternance to bring that hands-on mindset to a real team."
		],
		availability: "🎯 Looking for an alternance in Web, Data or AI — available from January 2027",
		onSiteLabel: "On this website",
		onSiteText: "You can explore my projects across web and data, my roadmap for what's in progress and coming next (web, data, AI), and my CV. Each project page includes the goal, the skills involved, demo videos, and a link to the GitHub repo."
		}
	}
} as const;

export type Lang = keyof typeof translations;