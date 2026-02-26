import React from 'react';

const Experience = ({ experiences }) => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <div className="section-header center">
                    <span className="section-tag">// My Journey</span>
                    <h2 className="section-title">
                        Education & <span className="highlight">Learning</span>
                    </h2>
                    <p className="section-desc">My academic journey and continuous learning path</p>
                </div>

                <div className="timeline">
                    <div className="timeline-line"></div>
                    {experiences.map((exp) => (
                        <div className="timeline-item" key={exp._id}>
                            <div className="timeline-marker">
                                <span className="marker-icon">{exp.icon}</span>
                            </div>
                            <div className="timeline-card">
                                <div className="timeline-header">
                                    <span className="timeline-date">{exp.date}</span>
                                    {exp.recent && <span className="timeline-badge recent">Recent</span>}
                                </div>
                                <h3 className="timeline-title">{exp.title}</h3>
                                <p className="timeline-company">{exp.company}</p>
                                <p className="timeline-description">{exp.desc}</p>
                                <div className="timeline-tags">
                                    {exp.tags.map(tag => <span key={tag}>{tag}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
