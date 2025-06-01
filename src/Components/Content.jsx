import { loadProjectImages } from "../utils/LoadImages";

const allImages = loadProjectImages();

export const education = [
    {
        title: "Bachelor of Engineering in Computer Engineering",
        date: "May, 2021 - 2025",
        description: "I have completed my Bachelor of Engineering in Computer Engineering from LDRP Institute of Technology and Research, Gandhinagar. During my studies, I gained a solid foundation in computer science principles and engineering practices.",
        sub: " - first class with distinction"
    },
    {
        title: "HSC (Higher Secondary Certificate) in Science",
        date: "June 30, 2020 - 2021",
        description: "I completed my HSC in Science from Jawahar Navodaya Vidyalaya, Rajkot. This program provided me with a strong background in science and mathematics, which are essential for my engineering studies.",
        sub: " - 87.2%"
    }
];

export const experience = [
    {
        title: "Tatvasoft",
        date: "January 1, 2024 - Present",
        description: "As a .NET Developer at Tatvasoft, I am involved in developing and maintaining web applications using ASP.NET Core and C#. My role includes working with Entity Framework, LINQ, and SQL Server for backend development, as well as enhancing user interactions with jQuery on the frontend.",
        sub: " - Intern",
    },
    {
        title: "MXI Coders",
        date: "August 1, 2024 - October 31, 2024",
        description: "MXI Coders is a blockchain-focused company where I gained hands-on experience with blockchain technologies, including ERC token standards and NFTs. I learned about smart contract development, token creation.",
        sub: " - Intern",
    }
];

export const service = [
    {
        title: "Web Development",
        description: "Building responsive and dynamic web applications using modern technologies.",
        icon: "bi bi-laptop"
    },
    {
        title: "Backend Integration",
        description: "Integrating robust backend systems with frontend applications for seamless data flow.",
        icon: "bi bi-hdd-network"
    },
    {
        title: "Database Management",
        description: "Designing and managing databases to ensure data integrity and performance.",
        icon: "bi bi-database-fill-gear"
    },
    {
        title: "Authentication Systems",
        description: "Implementing secure authentication systems to protect user data and privacy.",
        icon: "bi bi-shield-lock-fill"
    }
];

export const projects = [
    {
        title: "Portfolio - Website",
        date: "10, May - 2025",
        type: "WebPage",
        technologies: ["React", "Bootstrap CSS", "Node.js", "Express.js"],
        description: "A personal portfolio website showcasing my skills, projects, and experiences. Built with React and Tailwind CSS.",
        gitHubLink: "https://github.com/PrAtikDubariya/new-portfolio",
        images: allImages["PortfolioImages"] || [],
    },
    {
        title: "Pizzashop - Bussiness",
        date: "1, May - 2025",
        type: "ERP",
        technologies: [".NET Core", "Entity Framework", "PostgreSQL Server", "jQuery", "Bootstrap CSS"],
        description: "A pizza shop management system that allows a bussiness to manage orders, customers, and inventory. Developed using .NET Core and Entity Framework.",
        gitHubLink: "https://github.com/PrAtikDubariya/pizzashop",
        images: allImages["PortfolioImages"] || [],
    },
    {
        title: "Concert Booking System - Event management",
        date: "5, May - 2025",
        type: "Event Management",
        technologies: [".NET Core", "Entity Framework", "PostgreSQL Server", "jQuery", "Bootstrap CSS"],
        description: "An event management system for booking concerts, managing tickets, and handling customer interactions. Built with .NET Core and Entity Framework.",
        gitHubLink: "",
        images: allImages["ConcertBookingImages"] || [],
    },
    {
        title: "YelpCamp - Web Application",
        date: "1, Januaray - 2025",
        type: "Camp Management",
        technologies: [".NET Core", "Entity Framework", "PostgreSQL Server", "jQuery", "Bootstrap CSS"],
        description: "A web application for managing camping sites, allowing users to create, edit, and delete campgrounds. Developed using .NET Core and Entity Framework.",
        gitHubLink: "https://github.com/PrAtikDubariya/Yelp-Camp",
        images: allImages["YelpCampImages"] || [],
    }
];