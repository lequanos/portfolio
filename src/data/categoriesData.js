import Home from 'src/components/Home';
import About from 'src/components/About';
import Experiences from 'src/components/Experiences';
import Skills from 'src/components/Skills';
import Projects from 'src/components/Projects';
import Contact from 'src/components/Contact';

export default [
  {
    id: 1,
    url: '/',
    label: 'Accueil',
    Component: Home,
  },
  {
    id: 2,
    url: '/a-propos',
    label: 'A propos',
    Component: About,
  },
  {
    id: 3,
    url: '/experiences',
    label: 'Expériences',
    Component: Experiences,
  },
  {
    id: 4,
    url: '/competences',
    label: 'Mes compétences',
    Component: Skills,
  },
  {
    id: 5,
    url: '/mes-projets',
    label: 'Mes projets',
    Component: Projects,
  },
  {
    id: 6,
    url: '/me-contacter',
    label: 'Me contacter',
    Component: Contact,
  },
];
