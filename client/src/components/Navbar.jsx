import React, { useState, useEffect } from 'react';

const Navbar = ({ socialLinks }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#home" className="logo">
                    <span className="logo-icon">{'<'}</span>
                    <span className="logo-text">Rajesh<span className="dot">.</span>dev</span>
                    <span className="logo-icon">{'>'}</span>
                </a>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                        >{link.name}</a>
                    ))}
                    <a
                        href={socialLinks?.linkedin || '#'}
                        target="_blank"
                        rel="noreferrer"
                        className="nav-cta"
                    >Let's Talk</a>
                </div>

                <button
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
