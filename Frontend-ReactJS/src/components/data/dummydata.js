import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder,  AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Instagram } from "@mui/icons-material"
import { FaHome, FaUser, FaGraduationCap, FaBriefcase, FaFileAlt, FaComments, FaEnvelope } from 'react-icons/fa';

import React from 'react';


export const navlink = [
  {
    url: "/",
    icon: <FaHome />,
    description: "Accueil",
  },
  {
    url: "/about",
    icon: <FaUser />,
    description: "À propos",
  },
  {
    url: "/services",
    icon: <FaGraduationCap />,
    description: "Services",
  },
  {
    url: "/portfolio",
    icon: <FaBriefcase />,
    description: "Portfolio",

  },
  {
    url: "/blog",
    icon: <FaFileAlt />,
    description: "Autres activités",
  },
  {
    url: "/testimonials",
    icon: <FaComments />,
    description: "Témoignages",
  },
  {
    url: "/contact",
    icon: <FaEnvelope />,
    description: "Contact",
  },
];
export const home = [
  {
    text: "HELLO !!! JE SUIS :",
    name: "Emmanuella NGOUGUE DJEUFA",
    post: "Étudiante en dernière année d'ingénieur en informatique",
    design: "En spécialité de Cloud Computing, et suis spécialement Organisée, avec un esprit d'analyse et de synthèse, rigoureuse, avec une bonne écoute active.",
  },
]
export const about = [
  {
    desc: "Actuellement étudiante ingénieure en informatique (Niveau M2) à CY Tech, en spécialité Cloud Computing, je suis passionnée par la conception des systèmes résilients, utilisables à grande échelle, ainsi que leur sécurisation. Animée d’un vif désir d’approfondir mes connaissances, je suis à la recherche d’un stage de fin d’études qui me permettra de rejoindre une équipe dynamique pour contribuer efficacement à ses projets, tout en enrichissant mon expérience professionnelle dans ce secteur en pleine expansion.",
    desc1: "Organisée, avec un esprit d'analyse et de synthèse, rigoureuse, avec une bonne écoute active, je suis convaincue de pouvoir contribuer efficacement à concrétiser le succès des projets de votre entreprise",
    cover: "./images/man.png",
  },
]
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Diplôme d'ingénieure à CY TECH niveau M2, 2023 - 2024",
    desc: "(À Pau) Spécialisation en déploiement d'infrastructures Cloud computing sécurisées",
  },
  {
    id: 2,
    icon: <ViewInAr />,
    title: "MOOC de l'ANSSI, Août 2023",
    desc: "Attestation de suivie sur des modules de cybersécurité, visible sur mon profil LinkedIn. Vous pouvez copiez l'adresse suivante dans un navigateur : https://www.linkedin.com/in/emmanuella-ngougue-djeufa-36323b259/",
  },
  {
    id: 3,
    icon: <CropRotate />,
    title: "Diplôme d'ingénieure à CY TECH niveau M1, 2022 - 2023",
    desc: "(À Cergy) Génie des Systèmes d'Information ",
  },
  
  {
    id: 4,
    icon: <PieChart />,
    title: "MASTER 1 : Université de Ngaoundéré - Cameroun, 2021 - 2022	",
    desc: "Systèmes et logiciels en environnement distribués (SLED) - Mention : Assez-bien ",
  },
  {
    id: 5,
    icon: <Code />,
    title: "LICENCE INFORMATIQUE : Université de Ngaoundéré - Cameroun, 2020 – 2021",
    desc: "Université de Ngaoundéré – Cameroun",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "BACCALAURÉAT C,  2017 - 2018",
    desc: "Mathématiques-Physique-Chimie, Cameroun",
  },
]
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "1000",
    title: "HEURES ET PLUS, DE COURS SUIVIS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "10",
    title: "PROJETS RÉALISÉS ET PLUS",
  },
  
]
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/port1.jpg",
    name: "Expérience Professionnelle",
    category: "Cyber",
    title: "*Stage ingénieur cybersécurité au C.H. de l'Aigle*. Mise en place de la solution open source Apache Guacamole pour sécuriser l'accès par les prestataires extérieurs. Paramétrage de PC à destination du personnel.",
    githubLink: "https://github.com/EmmaDjeufa/Fiche_Notation_Stage_Emmanuella_Djeufa",
  },
  {
    id: 2,
    cover: "../images/port/port2.jpg",
    name: "Projet scolaire",
    category: "scrapping",
    title: "*Scrapping de données*. Il était question de récupérer des données sur le site du marché carbonne européen sous forme de fichier .csv et analyser ces données et établir des dashboard.",
  },
  {
    id: 3,
    cover: "../images/port/aws.jpeg",
    name: "Projet scolaire",
    category: "Cloud",
    title: "*Configuration d'une infrastructure AWS*, correspondante à notre site web de gestion des soirées étudiantes codé avec le framework Angular et firebase pour le stockage de données.",
  },
  {
    id: 4,
    cover: "../images/port/port4.jpg",
    name: "Projet scolaire",
    category: "Cloud",
    title: "*Déploiement d'une FastAPI avec Terraform.*",
  },
  {
    id: 5,
    cover: "../images/port/port5.jpg",
    name: "Projet scolaire",
    category: "Cloud",
    title: "*Déploiement avec Terraform et Ansible* sur Gitlab, deux machines virtuelles et sur la première,une base de données MySQL et l'autre, une Flask API. ",
  },
  {
    id: 6,
    cover: "../images/port/angular.png",
    name: "Projet scolaire",
    category: "Web",
    title: "*Création d'un site web* de gestion des soirées étudiantes avec le framework Angular et Firebase pour le stockage de données.",
  },
  {
    id: 7,
    cover: "../images/port/port7.jpg",
    name: "Projet scolaire",
    category: "Web",
    title: "*Création d'un site web* de e-commerce avec JEE (java) en utilisant le framework Hibernate et phpMyAdmin pour le stockage de données.",
  },
  {
    id: 8,
    cover: "../images/port/port8.jpg",
    name: "Projet personnel",
    category: "Cyber",
    title: "*Attestation de suivie sur des modules de cybersécurité*. Sur LinkedIn en copiant l'adresse suivante : https://www.linkedin.com/in/emmanuella-ngougue-djeufa-36323b259/ dans un navigateur",
  },
  {
    id: 9,
    cover: "../images/port/mongo.png",
    name: "Projet Scolaire",
    category: "Datas",
    title: "Gestion fichier csv de données avec MongoDB",
  },
]

export const blog = [
  {
    id: 1,
    title: "Chanter",
    date: "2017,2018,2024",
    author: "Emmanuella NGOUGUGUE DJEUFA à la chorale",
    desc: "Chanter en chorale est un très bon moyen de se distraire et développer sa personne tout en apprenant des autres.",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Stage d’enseignement,",
    date: "02/2023 - 03/2023",
    author: "Emmanuella NGOUGUGUE DJEUFA dans l’association IDENTITÉ REMARQUABLE",
    desc: "Entretien des collégiens pendant leurs révisions, orientation de ceux-ci, et correction ensemble d’exercices.",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "Refonte des logotypes des options de CY Tech,",
    date: "19 Janvier 2024",
    author: "Emmanuella NGOUGUE DJEUFA",
    desc: "Il était question d’analyser succinctement les besoins de l’école d’ingénieurs CY Tech, afin d’apporter des solutions de logotypes en adéquation avec ses valeurs pour chacune de ses options de spécialisation!",
    cover: "./images/blog/b3.png",
  },
]

export const testimonials = [
  {
    id: 1,
    text: "L'ensemble des collaborateurs auxquels je m'associe est en accord pour reconnaître à Emmanuella des qualités tant relationnelles que professionnelles...Nous avons par ailleurs eu l'opportunité de découvrir une personne très souriante et très agréable au quotidien.",
    image: "./images/testimonials/team-1.png",
    name: "Laurent DESJARDINS",
    post: "Correspondant Cybersécurité",
  },
  {
    id: 2,
    text: "Au lycée, j’étais assez intrigué par le web sans pour autant être un « geek ».  Je me suis renseigné sur CY Tech à l’occasion d’un Salon étudiant à Toulouse. L’état d’esprit de l’Ecole m’a plu et puis la très bonne insertion professionnelle de ses diplômés m’a décidé à l’intégrer.",
    image: "./images/testimonials/team-2.png",
    name: "Thomas Le Page",
    post: "Ancien élève ingénieur",
  },
]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "56 Avenue du Loup",
    text2: "64000, Pau",
  },
  {
    icon: <PhoneIphone />,
    text1: "07 49 39 04 62"
  },
  {
    icon: <EmailOutlined />,
    text1: "emmandjeufa@gmail.com",
    text2: "ngouguedje@gmail.com",
  },
]
export const social = [
  {
    icon: <Facebook />,
    url: 'https://www.facebook.com/emmanuella.djeufa/',
  },
  {
    icon: <Instagram />,
    url: 'https://www.instagram.com/3884deux/', 
  },
  
];

const SocialLinks = () => {
  return (
    <div>
      {social.map((item, index) => (
        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer"> {/* Ouvre le lien dans un nouvel onglet */}
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;