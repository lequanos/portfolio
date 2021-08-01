// == Import npm
import * as React from 'react';
import { useEffect } from 'react';
import { motion, useAnimation, AnimationControls } from 'framer-motion';

// == Import
import { text, picture, background } from 'src/lib/framerVariants';
import useWindowSize from 'src/lib/useWindowSize';
import './styles.scss';

// == Type
type AboutProps = {
  controls: AnimationControls | undefined;
  setControls: (arg: AnimationControls) => void;
  pageIndex: number;
  setPageIndex: (arg: number) => void;
}

// == Composant
const About = ({
  controls,
  setControls,
  pageIndex,
  setPageIndex,
}: AboutProps) => {
  const aboutControls = useAnimation();
  const { width } = useWindowSize();

  useEffect(() => {
    setControls(aboutControls);
    if (controls && Object.keys(controls).length > 0) {
      controls.start({
        zIndex: -10,
        transition: {
          delay: 0.3,
        },
      });
    }
  }, [controls]);

  useEffect(() => {
    if (pageIndex !== 1) {
      setPageIndex(1);
    }
  }, []);

  return (
    <motion.section className="aboutContainer">
      <motion.div
        className="about__background"
        initial={['initial']}
        animate={controls}
        variants={background}
      />
      <motion.aside
        initial="initial"
        animate="animate"
        exit={width > 768 ? 'exit' : 'exitMobile'}
        variants={picture}
        className="about__picture"
      />
      <motion.div
        initial="initial"
        animate="animate"
        exit={width > 768 ? 'exit' : 'exitMobile'}
        variants={text}
        className="about__text"
      >
        <div>
          <h2 className="text__large">
            À propos de moi
          </h2>
          <p className="text__small">
            Fier papa d’un petit garçon, ma carrière professionnelle n’a été ponctuée,
            jusqu'à présent, que par un domaine :
            la restauration qui, à l’instar du développement web, est un métier ô combien
            passionnant et chronophage.
            <br />
            <br />
            Ma carrière a débuté en 2006 en tant que plongeur et commis
            de cuisine. Les années passant, j’ai suivi un cursus BTS gestion de PME-PMI en
            alternance afin de pouvoir prétendre à plus de responsabilités au sein de l’entreprise.
            <br />
            <br />
            C’est ainsi qu’en 2011, nous avons commencé à travailler sur l’ouverture d’un nouveau
            point de vente de 700m², ouverture qui s’est effectuée en 2012 et dont j’ai été le
            directeur jusqu’en 2020.
            <br />
            <br />
            Grâce à ce poste, j’ai été amené à diriger une équipe de près
            de 30 collaborateurs, parfois hétéroclites. Cela m’a permis d’apprendre à gérer tous
            types de problématiques, aussi bien financières (objectifs à atteindre,
            relationnel fournisseur…), qu’administratives (dossier à constituer pour
            les demandes d’aménagement, dossiers de litige...)
            ou humaines (gestion de conflits entre collaborateurs ou avec un client…).
            <br />
            <br />
            Adepte d’un management bienveillant, être à l’écoute des autres et de leurs difficultés
            m’a également permis d’en apprendre plus sur moi-même.
            <br />
            <br />
            C’est pourquoi en novembre 2020, j’ai décidé d’opérer une reconversion professionnelle,
            grâce à <a href="https://oclock.io" className="text__link" target="_blank" rel="noreferrer">l'école O'Clock</a>, dans un domaine qui m'a toujours tenu à cœur,
            le développement web.
            <br />
            <br />
            Cette formation m'a notamment permis d'acquérir de solides compétences en Javascript,
            avec entre autres ReactJS en Front-End et NodeJS en Back-End avec le framework Express.
            Mais elle m'a surtout permis d'avoir les clés pour apprendre en
            autonomie de nouveaux outils, comme c'est le cas de Typescript, NextJS
            et de Python actuellement.
            <br />
            <br />
            Au-delà de tout ça, je suis également un passionné de café sous toutes ses formes,
            de boulangerie et toujours aussi de cuisine !
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

// == Export
export default About;
