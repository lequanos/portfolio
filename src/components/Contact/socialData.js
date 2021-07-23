import React from 'react';
import { SiGithub, SiLinkedin, SiMailDotRu } from 'react-icons/si';

export default [
  {
    id: 1,
    url: 'https://github.com/lequanos',
    name: 'GitHub',
    Component() {
      return (<SiGithub className="text__icon" size={90} />);
    },
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/quan-tranvanba/',
    name: 'LinkedIn',
    Component() {
      return (<SiLinkedin className="text__icon" size={90} />);
    },
  },
  {
    id: 3,
    url: 'mailto:tranvanba.quan@gmail.com',
    name: 'Email',
    Component() {
      return (<SiMailDotRu className="text__icon" size={90} />);
    },
  },
];
