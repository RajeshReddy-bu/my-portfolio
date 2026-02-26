import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Hero = ({ profile }) => {
    const [counts, setCounts] = useState({ projects: 0, hours: 0, certs: 0 });

    useEffect(() => {
        if (!profile) return;

        const animateStats = (target) => {
            const duration = 2000;
            const start = Date.now();

            const timer = setInterval(() => {
                const timePassed = Date.now() - start;
                if (timePassed >= duration) {
                    setCounts(target);
                    clearInterval(timer);
                } else {
                    const progress = timePassed / duration;
                    setCounts({
                        projects: Math.floor(target.projects * progress),
                        hours: Math.floor(target.hours * progress),
                        certs: Math.floor(target.certs * progress),
                    });
                }
            }, 50);

            return () => clearInterval(timer);
        };

        animateStats(profile.stats);
    }, [profile]);

    if (!profile) return null;

    return (
        <section id="home" className="hero">
            <div className="hero-particles" id="particles"></div>
            <div className="hero-content">
                <div className="status-badge">
                    <span className="pulse"></span>
                    <span>{profile.availability}</span>
                </div>
                <h1 className="hero-title">
                    <span className="greeting">{profile.greeting}</span>
                    <span className="name-text">{profile.name}</span>
                    <span className="role-text">
                        <span className="highlight">{profile.role.split(' ')[0]} {profile.role.split(' ')[1]}</span> {profile.role.split(' ').slice(2).join(' ')}
                    </span>
                </h1>
                <p className="hero-description">
                    {profile.bio[0]}
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">
                        <span>View My Work</span>
                        <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href={`mailto:${profile.socials.email}`} className="btn btn-secondary">
                        <span>Let's Talk</span>
                        <span className="btn-emoji">💬</span>
                    </a>
                    <a href="#" className="btn btn-outline" id="downloadCV">
                        <span>Download CV</span>
                        <span className="btn-emoji">📄</span>
                    </a>
                </div>
                <div className="hero-stats">
                    <div className="stat-card">
                        <span className="stat-number">{counts.projects}</span>
                        <span className="stat-plus">+</span>
                        <span className="stat-label">Projects</span>
                        <div className="stat-glow"></div>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">{counts.hours}</span>
                        <span className="stat-plus">+</span>
                        <span className="stat-label">Hours Coding</span>
                        <div className="stat-glow"></div>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">{counts.certs}</span>
                        <span className="stat-plus">+</span>
                        <span className="stat-label">Certifications</span>
                        <div className="stat-glow"></div>
                    </div>
                </div>
            </div>
            <div className="hero-visual">
                <div className="code-window">
                    <div className="window-header">
                        <div className="window-dots">
                            <span className="dot dot-red"></span>
                            <span className="dot dot-yellow"></span>
                            <span className="dot dot-green"></span>
                        </div>
                        <span className="window-title">developer.js</span>
                    </div>
                    <pre className="code-content"><code>
                        {`<span class="code-keyword">const</span> <span class="code-variable">developer</span> = {
  <span class="code-property">name</span>: <span class="code-string">"${profile.name}"</span>,
  <span class="code-property">role</span>: <span class="code-string">"${profile.role}"</span>,
  <span class="code-property">stack</span>: [
    <span class="code-string">"MongoDB"</span>,
    <span class="code-string">"Express.js"</span>,
    <span class="code-string">"React"</span>,
    <span class="code-string">"Node.js"</span>
  ],
  <span class="code-property">passion</span>: <span class="code-string">"Building amazing apps"</span>
};`}
                    </code></pre>
                </div>
                <div className="floating-tech-icons">
                    <div className="tech-icon-float" style={{ '--delay': '0s', '--x': '-50px', '--y': '-120px' }}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                    </div>
                    <div className="tech-icon-float" style={{ '--delay': '0.5s', '--x': '100px', '--y': '-80px' }}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="invert" />
                    </div>
                    <div className="tech-icon-float" style={{ '--delay': '1s', '--x': '120px', '--y': '40px' }}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                    </div>
                    <div className="tech-icon-float" style={{ '--delay': '1.5s', '--x': '10px', '--y': '100px' }}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
