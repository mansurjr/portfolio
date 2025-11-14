import { JobType, PostType, ProfileType, ProjectType, SkillProps } from "@/types";
import {
    BiLogoPostgresql,
    BiLogoGit,
    BiLogoGithub,
    BiLogoInstagram,
    BiLogoTelegram, BiLogoJavascript, BiLogoNodejs, BiLogoMongodb
} from "react-icons/bi";

import logo from "../../public/logo1.png"
import movielogo from "@/public/logo-DcNH4XmD.svg"
import eCommercelogo from "@/public/images/apps/e-commerce/footer_logo-BCHqkLIE.svg"
import ikafilLogo from "@/public/images/apps/ikafil/image.png"

import ArchLinuxIcon from '../components/shared/ArchLinuxIcon';

export const userProfile: ProfileType = {
    id: "p1",
    fullName: "Mansurbek Atayev",
    headline: "Fullstack Developer",
    profileImage: {
        image: "/images/avatar.jpg",
        alt: "Mansurbek Atayev"
    },
    shortBio: "I'm Mansurbek Atayev, I build passionate about NestJS, Prisma, and full-stack development",
    email: "mansurbekatayev76@gmail.com",
    location: "Tashkent, Uzbekistan",
    resumeURL: "/MansurbekAtayevResume.pdf",
};

export const jobs: JobType[] = [
    {
        id: "j2",
        name: "CRM System Development",
        jobTitle: "Full-Stack Developer",
        logo: logo.src,
        url: "https://teens.uz/",
        description: "Built a CRM system using Django and Django REST Framework, implementing modules for students, teachers, groups, lessons, attendance, and payments with PostgreSQL. Later migrated the platform to NestJS with Prisma, designing scalable REST and GraphQL APIs, implementing role-based access control, and expanding features such as leads management and a student reward system. Collaborated with the team via GitHub, participated in code reviews, and optimized the database design for performance.",
        startDate: "2025-03",
        endDate: "2025-08"
    }

];

export const projects: ProjectType[] = [
    {
        id: "1",
        name: "Movie",
        slug: "movie",
        tagline: "View movie ratings, details, and character information.",
        projectUrl: "",
        logo: movielogo,
        description: `A movie discovery application where users can browse films, view ratings, and explore character information. Built with a clean UI and smooth navigation.`,
        googlePlay: "",
        appStore: "",
        webApp: "",
        github: "https://github.com/mansurjr/movie",
        screenshots: [
            "/images/apps/movie/movie.png",
            "/images/apps/movie/movie1.png",
        ],
    },
    {
        id: "2",
        name: "E-commerce",
        slug: "e-commerce",
        tagline: "Browse products, search items, and explore categories.",
        projectUrl: "",
        logo: eCommercelogo,
        description: `A simple e-commerce interface with product listings, search functionality, and user-friendly navigation. Designed for fast browsing and clean UI.`,
        googlePlay: "",
        appStore: "",
        webApp: "",
        github: "https://github.com/mansurjr/e-commerce",
        screenshots: [
            "/images/apps/e-commerce/image1.png",
            "/images/apps/e-commerce/image.png",
        ],
    },
    {
        id: "3",
        name: "IKafil",
        slug: "ikafil",
        tagline: "A platform for installment-based sales of iPhones and MacBooks.",
        projectUrl: "",
        logo: ikafilLogo,
        description: `IKafil is a modern platform built for managing installment-based sales of iPhones and MacBooks. It includes customer management, product catalog, installment plans, payment tracking, and a clean user-friendly interface designed for both clients and administrators.`,
        googlePlay: "",
        appStore: "",
        webApp: "",
        github: "https://github.com/mansurjr/ikafil",
        screenshots: [
            "/images/apps/ikafil/image1.png"
        ]
    }
];


export const posts: PostType[] = [
    // {
    //         id: "po1",
    //         createdAt: "2022-01-01T00:00:00Z",
    //         title: "My Journey in Tech",
    //         slug: "my-journey-in-tech",
    //         description: "A summary of my journey in the tech industry.",
    //         date: "2022-01-01",
    //         coverImage: {
    //             image: "",
    //             alt: "A scenic road representing a journey"
    //         },
    //         tags: ["tech", "journey", "career"],
    //         author: {
    //             name: "John Doe",
    //             photo: {
    //                 image: "",
    //                 alt: "Portrait of John Doe"
    //             },
    //             twitterUrl: "https://twitter.com/xattab"
    //         },
    //         body: "",
    //         featured: true,
    //         isPublished: true
    //     }
];

export const images = 3;

export const skills: SkillProps[] = [
    { name: 'JavaScript', icon: BiLogoJavascript, color: '#46D1FD' },
    { name: 'Node.js', icon: BiLogoNodejs, color: '#3B77A8' },
    { name: 'Postgresql', icon: BiLogoPostgresql, color: '#336791' },
    { name: 'Mongodb', icon: BiLogoMongodb, color: '#336791' },
    { name: 'Linux', icon: ArchLinuxIcon, color: '#FFD133' },
    { name: 'Git', icon: BiLogoGit, color: '#F03C2E' },
];

export const socialLinks = [
    {
        id: 1,
        name: "GitHub",
        url: "https://github.com/mansurjr",
        icon: BiLogoGithub,
    },
    {
        id: 4,
        name: "Instagram",
        url: "https://instagram.com/its_bakhtiyarovic",
        icon: BiLogoInstagram,
    },
    {
        id: 6,
        name: "Telegram",
        url: "https://t.me/its_bakhtiyarovic",
        icon: BiLogoTelegram,
    }
];
