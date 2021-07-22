import diamondDreams from 'src/assets/projects/diamond-dreams.jpg';
import menuYojisu from 'src/assets/projects/menu-yojisu.jpg';
import portfolio from 'src/assets/projects/portfolio.jpg';

export default [
  {
    id: 1,
    url: diamondDreams,
    title: 'Diamond Dreams',
    subtitle: "Création d'un site d'E-commerce de bijoux",
    context: "Projet de fin d'études formation Fullstack JS - École O'Clock",
    link: '',
    tasks: [
      "Développement d'une API REST sur NodeJS/Express",
      "Développement d'une API GraphQL avec Apollo Server",
      "Création d'une base de données PostgresQL",
      'Versionnement de la base de données avec Sqitch',
      'Authentification avec JWT',
      "Intégration d'un module de paiement avec Stripe",
      'Développement du côté client avec React et Redux',
      "Déploiement de l'API sur Heroku",
    ],
  },
  {
    id: 2,
    url: menuYojisu,
    title: 'Restaurant Yojisu',
    subtitle: "Création d'un menu consultatif mobile-first",
    context: 'Projet professionel',
    link: 'http://menu.yoji.fr',
    tasks: [
      "Développement d'une API REST sur NodeJS/Express",
      "Création et gestion d'une base de données PostgresQL",
      'Connexion à une API externe',
      'Développement du côté client avec NextJS et Redux',
      'Utilisation de Material UI',
      'Authentification avec JWT',
      'Déploiement sur un VPS OVH',
      'Intégration de Google Analytics',
    ],
  },
  {
    id: 3,
    url: portfolio,
    title: 'Portfolio',
    subtitle: 'Création de mon portfolio',
    context: 'Projet personnel',
    link: 'http://www.buri.fr',
    tasks: [
      'Développement du côté client avec React',
      'Utilisation de la librairie framer-motion',
      'Utilisation de Material UI',
    ],
  },
];
