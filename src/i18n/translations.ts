export const translations = {
	fr: {
		hero: {
		welcome: "Bienvenue !",
		imTitle: "Je suis",
		role: "Développeuse web",
		aboutMeLabel: "À propos de moi",
		aboutMeText: [
			"Je suis étudiante à 42 Angoulême, où j’apprends principalement par la documentation, l’expérimentation et la réalisation de projets concrets.",
			"Actuellement, je me concentre principalement sur le développement logiciel et web. Je souhaite également élargir progressivement mes compétences vers la data et l’intelligence artificielle, qui font partie des domaines que je souhaite explorer et développer dans la suite de mon parcours.",
		],
		availability: "🎯 En recherche d'une alternance de 2 ans en vue d'un RNCP 7 (Bac + 5 / Master) - Web, Data ou IA - Angoulême, Poitiers, Bordeaux, Télétravail",
		onSiteLabel: "Sur ce site",
		onSiteText: "Vous pourrez explorer mon CV, ma tech stack, mes projets, et ma roadmap (web, data, IA). Chaque page projet inclut l'objectif, les compétences utilisées, une vidéo d'exploration, et un lien vers le repo GitHub."
		},
		cv: {
		download: "Télécharger",
		},
		roadmap: {
			goals: {
				title: "Buts",
				goal1: "Valider le tronc commun",
				goal2: "Faire un site de rencontres en Web/Data",
				goal3: "Réaliser des projets en IA et Machine learning",
				goal4: "Approfondir mes connaissances en docker"
			},
			cc: {
				date: "Octobre 2025 - Novembre 2026",
				duration: "1 an 1 mois",
				title: "",
				description: "Projets du tronc commun de 42",
				skills: "Programming, Unix logic, Sorting algorithm, Object-oriented, Graphics, Network, Docker, System",
				langages: "C, C++",
			},
			linearRegression: {
				date: "Novembre 2026",
				duration: "2 semaines",
				title: "Linear Regression",
				description: "Un algorithme de machine learning qui prédit le prix d'une voiture en utilisant une fonction linéaire entraînée avec un algorithme de descente de gradient.",
				skills: "DataScience, Math, Algorithms & AI, DB & Data",
				langages: "Python",
			},
			learnTwoSlither: {
				date: "Novembre - Décembre 2026",
				duration: "3 semaines",
				title: "Learn 2 Slither",
				description: "Un projet de pointe en Q-learning axé sur la prise de décision autonome dans un environnement dynamique.",
				skills: "DataScience, Algorithms & AI, Adaptation & creativity",
				langages: "Python",
			},
			inceptionOfThings: {
				date: " 2026",
				duration: "",
				title: "",
				description: "Built and configured a Docker-based cluster, along with a fully functional continuous integration (CI) pipeline for application development and testing.",
				skills: "System administration, Docker-kuber, Network & system administration",
				langages: "",
			},
			matcha: {
				date: "",
				duration: "",
				title: "Matcha",
				description: "Une application web de rencontres conçue pour faciliter les connexions entre partenaires potentiels, couvrant l'ensemble du parcours utilisateur, de l'inscription jusqu'à la rencontre finale.",
				skills: "Web, DB & Data, Sécurité",
				langages: "JavaScript, NodeJS, CSS",
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
		availability: "🎯 Looking for an alternance in Web, Data or AI - 2 years - available from January 2027 - Angoulême, Poitiers, Bordeaux, Full remote",
		onSiteLabel: "On this website",
		onSiteText: "You can explore my CV, my tech stack, my projects and my roadmap for what's in progress and coming next (web, data, AI). Each project page includes the goal, the skills involved, demo videos, and a link to the GitHub repo."
		},
		cv: {
		download: "Download",
		},
		roadmap: {
			goals: {
				title: "Buts",
				goal1: "Valider le tronc commun",
				goal2: "Faire un site de rencontres en Web/Data",
				goal3: "Réaliser des projets en IA et Machine learning",
				goal4: "Approfondir mes connaissances en docker"
			},
			cc: {
				date: "October 2025 - November 2026",
				duration: "1 year 1 month",
				title: "",
				description: "All projects of common core 42",
				skills: "Programming, Unix logic, Sorting algorithm, Object-oriented, Graphics, Network, Docker, System",
				langages: "C, C++",
			},
			linearRegression: {
				date: "November 2026",
				duration: "2 weeks",
				title: "Linear Regression",
				description: "A machine learning algorithm that predicts the price of a car by using a linear function train with a gradient descent algorithm.",
				skills: "DataScience, Math, Algorithms & AI, DB & Data",
				langages: "Python",
			},
			learnTwoSlither: {
				date: "November - December 2026",
				duration: "3 weeks",
				title: "Learn 2 Slither",
				description: "A cutting-edge Q-learning project focused on autonomous decision-making in a dynamic environment.",
				skills: "DataScience, Algorithms & AI, Adaptation & creativity",
				langages: "Python",
			},
			inceptionOfThings: {
				date: " 2026",
				duration: " weeks",
				title: "",
				description: "Built and configured a Docker-based cluster, along with a fully functional continuous integration (CI) pipeline for application development and testing.",
				skills: "System administration, Docker-kuber, Network & system administration",
				langages: "",
			},
			matcha: {
				date: "",
				duration: "",
				title: "Matcha",
				description: "A dating web application designed to facilitate connections between potential partners, covering the entire user journey from registration to the final meeting.",
				skills: "Web, DB & Data, Security",
				langages: "JavaScript, NodeJS, CSS",
			},
		},
	}
} as const;

export type Lang = keyof typeof translations;