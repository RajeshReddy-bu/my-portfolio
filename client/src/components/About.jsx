import React from 'react';

const About = ({ profile }) => {
    if (!profile) return null;

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">// About Me</span>
                    <h2 className="section-title">
                        Passionate about<br />
                        <span className="highlight">crafting solutions</span>
                    </h2>
                </div>
                <div className="about-content">
                    <div className="about-image-wrapper">
                        <div className="about-image">
                            <img src="/profile.jpg" alt={`${profile.name} - ${profile.role}`} />
                            <div className="image-frame"></div>
                            <div className="image-decoration"></div>
                        </div>
                        <div className="about-quick-info">
                            <div className="quick-info-item">
                                <span className="info-icon">🎓</span>
                                <span>{profile.degree}</span>
                            </div>
                            <div className="quick-info-item">
                                <span className="info-icon">📍</span>
                                <span>{profile.location}</span>
                            </div>
                            <div className="quick-info-item">
                                <span className="info-icon">💼</span>
                                <span>{profile.availability}</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-text">
                        <p className="about-intro">
                            I'm an enthusiastic developer with a strong foundation in the
                            <span className="highlight-text">MERN stack</span>, ready to transform ideas into
                            powerful web applications.
                        </p>
                        {profile.bio.slice(1).map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}
                        <div className="about-highlights">
                            <div className="highlight-item">
                                <span className="highlight-icon">✓</span>
                                <span>Clean Code Advocate</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">✓</span>
                                <span>Problem Solver</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">✓</span>
                                <span>Team Player</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">✓</span>
                                <span>Continuous Learner</span>
                            </div>
                        </div>
                        <div className="about-actions">
                            <a href="#contact" className="btn btn-primary">
                                <span>Get in Touch</span>
                                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                            <div className="experience-badge">
                                <span className="badge-number">{profile.stats.experience}</span>
                                <span className="badge-text">Year<br />Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
