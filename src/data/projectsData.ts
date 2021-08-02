import diamondDreams from 'src/assets/projects/diamond-dreams.jpg';
import menuYojisu from 'src/assets/projects/menu-yojisu.jpg';
import portfolio from 'src/assets/projects/portfolio.jpg';
import coachingCanopy from 'src/assets/projects/coaching-canopy.jpg';

export default [
  {
    id: 1,
    url: diamondDreams,
    title: 'Diamond Dreams',
    subtitle: "Création d'un site d'E-commerce de bijoux",
    context: "Projet de fin d'études formation Fullstack JS - École O'Clock",
    link: 'https://www.youtube.com/watch?v=XliSnSJouJs#t=1h23m0s',
    tasks: [
      "Développement d'une API sur NodeJS/Express",
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
    link: 'https://menu.yoji.fr',
    tasks: [
      "Développement d'une API REST sur NodeJS/Express",
      "Création et gestion d'une base de données PostgresQL",
      'Connexion à une API externe',
      'Développement du côté client avec NextJS et Redux',
      'Utilisation de Material UI',
      'Authentification avec JWT',
      'Déploiement sur un VPS OVH',
      "Accès à l'application via un reverse-proxy Nginx",
      'Intégration de Google Analytics',
    ],
  },
  {
    id: 3,
    url: portfolio,
    title: 'Portfolio',
    subtitle: 'Réalisation de mon portfolio',
    context: 'Projet personnel',
    link: 'https://www.buri.fr',
    tasks: [
      'Développement du côté client avec React',
      'Utilisation de la librairie framer-motion',
      'Utilisation de Material UI',
      "Accès à l'application via un reverse-proxy Nginx",
      'Utilisation de Typescript',
    ],
  },
  {
    id: 4,
    url: coachingCanopy,
    title: 'Coaching Canopy',
    subtitle: "Réalisation d'un site vitrine pour un coach professionnel spécialisé en Neurosciences",
    context: 'Projet professionnel',
    link: 'http://www.coachingcanopy.fr',
    tasks: [
      'Intégration HTML/CSS',
      'Animations en JS vanilla',
    ],
  },
];
