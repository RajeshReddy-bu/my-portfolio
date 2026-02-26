import React from 'react';

const Skills = ({ skills }) => {
    const mernSkills = skills.filter(s => s.category === 'mern');
    const frontendSkills = skills.filter(s => s.category === 'frontend');

    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-header center">
                    <span className="section-tag">// My Skills</span>
                    <h2 className="section-title">
                        Technologies I <span className="highlight">work with</span>
                    </h2>
                    <p className="section-desc">A comprehensive toolkit for building modern web applications</p>
                </div>

                <div className="skills-grid">
                    <div className="skill-category mern-stack">
                        <div className="category-header">
                            <span className="category-icon">⚡</span>
                            <h3>MERN Stack</h3>
                            <span className="category-badge">Core</span>
                        </div>
                        <div className="mern-cards">
                            {mernSkills.map((skill) => (
                                <div className={`mern-card ${skill.name.toLowerCase().replace('.', '')}`} key={skill._id}>
                                    <div className="mern-card-icon">
                                        <img src={skill.icon} alt={skill.name} className={skill.invert ? 'invert' : ''} />
                                    </div>
                                    <h4>{skill.name}</h4>
                                    <p>{skill.desc}</p>
                                    <div className="skill-meter">
                                        <div className="meter-fill" style={{ '--percent': skill.level }}></div>
                                        <span className="meter-value">{skill.level}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skill-category">
                        <div className="category-header">
                            <span className="category-icon">🎨</span>
                            <h3>Frontend</h3>
                        </div>
                        <div className="skill-tags">
                            {frontendSkills.map((skill) => (
                                <span className="skill-tag" key={skill._id}>
                                    <img src={skill.icon} alt={skill.name} className={skill.invert ? 'invert' : ''} />
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
