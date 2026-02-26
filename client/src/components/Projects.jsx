import React, { useState } from 'react';

const Projects = ({ projects }) => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header">
                    <div>
                        <span className="section-tag">// Portfolio</span>
                        <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
                    </div>
                    <div className="project-filters">
                        <button
                            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                            onClick={() => setFilter('all')}
                        >All</button>
                        <button
                            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
                            onClick={() => setFilter('fullstack')}
                        >Full Stack</button>
                        <button
                            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
                            onClick={() => setFilter('frontend')}
                        >Frontend</button>
                        <button
                            className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}
                            onClick={() => setFilter('backend')}
                        >Backend</button>
                    </div>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <div className="project-card" key={project._id}>
                            <div className="project-image">
                                <div className="image-overlay">
                                    <div className="overlay-content">
                                        <div className="project-links">
                                            {project.liveUrl && (
                                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-circle" title="Live Demo">
                                                    <span className="icon">👁️</span>
                                                </a>
                                            )}
                                            {project.sourceCode && (
                                                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="link-circle" title="Source Code">
                                                    <span className="icon">🔗</span>
                                                </a>
                                            )}
                                        </div>
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-quick-view">Live Demo</a>
                                        )}
                                        {!project.liveUrl && project.sourceCode && (
                                            <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="btn-quick-view">View Code</a>
                                        )}
                                    </div>
                                </div>
                                <div className="project-placeholder">
                                    <div className="placeholder-icon">💻</div>
                                    <span>{project.title}</span>
                                </div>
                                <div className="project-date">{project.date}</div>
                            </div>
                            <div className="project-info">
                                <div className="project-tags">
                                    {project.tech.map(t => <span key={t}>{t}</span>)}
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-footer">
                                    <span className="project-category">{project.category}</span>
                                    {project.sourceCode && (
                                        <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="read-more">
                                            View Details
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

