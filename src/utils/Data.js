import {FaReact, FaCss3Alt, FaHtml5} from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.jpg";

export const Skills = [
    {
        id: 0,
        tech: 'React JS',
        icon: <FaReact />
    },

    {
        id: 1,
        tech: 'HTML',
        icon: <FaHtml5 />
    },

    {
        id: 2,
        tech: 'CSS',
        icon: <FaCss3Alt />
    },

    {
        id: 3,
        tech: 'Javascript',
        icon: <SiJavascript />
    },
];

export const projectDetails = [
    {
        id: 0,
        project_name: "Authentication Page",
        project_desc: "The objective of this project is to create a user-friendly frontend interface for login and registration, implementing robust form validation techniques to ensure data accuracy and security. The project will enhance the user experience by providing real-time feedback and error handling, making it easy for users to log in or register.",
        tech_stack: ['HTML','CSS','Javascript'],
        project_img: Project1,
        project_url: "https://www.youtube.com",
        reverse: false,
    },
    {
        id: 1,
        project_name: "Image Gallery",
        project_desc: "The objective of this project is to create a user-friendly and visually appealing frontend interface for an image gallery application. This frontend will provide users with the ability to browse, search, and view images in a gallery format.",
        tech_stack: ['HTML','CSS','Javascript'],
        project_img: Project2,
        project_url: "https://www.google.com",
        reverse: true,
    }
]

export const navLinks = [
    {
        id: 0,
        name: 'Home',
        href: 'Home'
    },
    {
        id: 1,
        name: 'My Skills',
        href: 'Skills'
    },
    {
        id: 3,
        name: ' My Projects',
        href: 'projects'
    },
    {
        id: 4,
        name: 'My Contact',
        href: 'Contact'
    },
]