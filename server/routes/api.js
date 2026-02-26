const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Skill = require('../models/Skill');
const Experience = require('../models/Experience');
const Profile = require('../models/Profile');

// Get all data for initial load
router.get('/init', async (req, res) => {
    try {
        const [profile, projects, skills, experience] = await Promise.all([
            Profile.findOne(),
            Project.find().sort({ featured: -1, createdAt: -1 }),
            Skill.find(),
            Experience.find().sort({ createdAt: -1 })
        ]);
        res.json({ profile, projects, skills, experience });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all projects
router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find().sort({ featured: -1, createdAt: -1 });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get profile
router.get('/profile', async (req, res) => {
    try {
        const profile = await Profile.findOne();
        res.json(profile);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all skills
router.get('/skills', async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all experience
router.get('/experience', async (req, res) => {
    try {
        const experience = await Experience.find().sort({ createdAt: -1 });
        res.json(experience);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Seed Initial Data
router.post('/seed', async (req, res) => {
    try {
        // Clear existing data
        await Project.deleteMany({});
        await Skill.deleteMany({});
        await Experience.deleteMany({});
        await Profile.deleteMany({});

        const seedProfile = {
            name: "Budala Rajesh",
            greeting: "Hi, I'm",
            role: "MERN Stack Developer",
            bio: [
                "I'm an enthusiastic developer with a strong foundation in the MERN stack, ready to transform ideas into powerful web applications.",
                "Recently completed my studies in Computer Science, I've spent countless hours building projects, learning from online courses, and contributing to open-source. I'm eager to apply my knowledge in a professional environment.",
                "My journey in tech started with a curiosity for how things work on the web, which evolved into a deep passion for full-stack development. I believe in writing clean, maintainable code and I'm committed to continuous learning."
            ],
            location: "Available Worldwide (Remote)",
            availability: "Open to Opportunities",
            degree: "Bachelors of Computer Applications",
            stats: {
                projects: 10,
                hours: 100,
                certs: 5,
                experience: '1+'
            },
            socials: {
                github: "https://github.com/veda6073",
                linkedin: "https://www.linkedin.com/in/budala-rajesh-346a332a5",
                twitter: "https://x.com/RajeshRedd11018",
                instagram: "https://www.instagram.com/_mr_rajesh_reddy",
                email: "mrreddy7972@gmail.com",
                phone: "+91 79933 51001"
            }
        };

        const seedProjects = [
            {
                title: "ShopHub - E-Commerce Platform",
                description: "A full-featured e-commerce platform with product management, cart functionality, Stripe payment integration, user authentication, and a comprehensive admin dashboard for inventory control.",
                tech: ["React", "Node.js", "MongoDB", "Stripe", "Express.js"],
                category: "fullstack",
                featured: true,
                liveUrl: "",
                sourceCode: "https://github.com/RajeshReddy-bu/E-Commerce-Website",
                date: "2024"
            },
            {
                title: "SecureVote - Online Voting System",
                description: "A secure online voting platform with JWT-based authentication, real-time vote tallying using Socket.io, bcrypt password hashing, and an interactive analytics dashboard for live result analysis.",
                tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT", "bcrypt"],
                category: "fullstack",
                featured: true,
                liveUrl: "",
                sourceCode: "https://github.com/veda6073",
                date: "2025"
            },
            {
                title: "TaskFlow - Project Management App",
                description: "A Trello-inspired project management tool with drag-and-drop Kanban boards, team collaboration, real-time task updates, deadline tracking, and role-based access control.",
                tech: ["React", "Node.js", "MongoDB", "Express.js", "Socket.io"],
                category: "fullstack",
                featured: false,
                liveUrl: "",
                sourceCode: "https://github.com/veda6073",
                date: "2025"
            },
            {
                title: "DevConnect - Social Platform for Developers",
                description: "A LinkedIn-like social platform tailored for developers featuring user profiles with skill endorsements, post feeds, real-time chat, GitHub integration, and job board functionality.",
                tech: ["React", "Node.js", "MongoDB", "Express.js", "JWT"],
                category: "fullstack",
                featured: false,
                liveUrl: "",
                sourceCode: "https://github.com/veda6073",
                date: "2025"
            },
            {
                title: "WeatherNow - Weather Dashboard",
                description: "An elegant, real-time weather dashboard consuming the OpenWeatherMap API. Features a 7-day forecast, interactive charts for temperature trends, location-based detection, and animated weather icons.",
                tech: ["React", "JavaScript", "CSS3", "OpenWeatherMap API"],
                category: "frontend",
                featured: false,
                liveUrl: "",
                sourceCode: "https://github.com/veda6073",
                date: "2024"
            },
            {
                title: "BlogSphere - Full-Stack Blogging Platform",
                description: "A modern blogging platform with a rich Markdown editor, user authentication, comment threads, like/bookmark system, tag-based filtering, and an SEO-optimized post detail page.",
                tech: ["React", "Node.js", "MongoDB", "Express.js", "Markdown"],
                category: "fullstack",
                featured: false,
                liveUrl: "",
                sourceCode: "https://github.com/veda6073",
                date: "2024"
            }
        ];

        const seedSkills = [
            { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: '90%', desc: 'NoSQL Database', category: 'mern' },
            { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: '88%', desc: 'Backend Framework', invert: true, category: 'mern' },
            { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: '95%', desc: 'Frontend Library', category: 'mern' },
            { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: '92%', desc: 'Runtime Environment', category: 'mern' },
            { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'frontend' },
            { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'frontend' },
            { name: 'JavaScript ES6+', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'frontend' },
            { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invert: true, category: 'frontend' },
            { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', category: 'frontend' }
        ];

        const seedExperience = [
            {
                date: "2026",
                title: "Bachelors of Computer Applications",
                company: "Sea College of Science commerce and Arts",
                desc: "Completed BCA with focus on web technologies. Built multiple academic projects using MERN stack. Participated in hackathons and coding competitions.",
                tags: ["Data Structures", "Algorithms", "DBMS", "Web Dev", "OS"],
                recent: true,
                icon: "🎓"
            },
            {
                date: "2025 - 2026",
                title: "MERN Stack Certification",
                company: "Online Learning Platform",
                desc: "Completed comprehensive full-stack web development bootcamp. Built 3+ real-world projects including e-commerce, social media, and task management applications.",
                tags: ["MongoDB", "Express", "React", "Node.js"],
                icon: "📜"
            }
        ];

        await Profile.create(seedProfile);
        await Project.insertMany(seedProjects);
        await Skill.insertMany(seedSkills);
        await Experience.insertMany(seedExperience);

        res.json({ message: "Database seeded successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Contact Form (Placeholder)
router.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contact Form Submission:', { name, email, message });
    res.json({ message: "Thank you for your message! I will get back to you soon." });
});

module.exports = router;
