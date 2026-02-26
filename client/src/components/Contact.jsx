import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [profile, setProfile] = useState(null);
    const [status, setStatus] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/profile');
                setProfile(res.data);
            } catch (err) {
                console.error('Error fetching profile:', err);
            }
        };
        fetchProfile();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/contact', formData);
            setStatus(res.data.message);
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            setStatus('Error sending message. Please try again.');
        }
    };

    if (!profile) return null;

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <span className="section-tag">// Get in Touch</span>
                        <h2 className="section-title">
                            Let's work<br />
                            <span className="highlight">together</span>
                        </h2>
                        <p className="contact-intro">
                            Have a project in mind or want to discuss opportunities? I'm always open
                            to new challenges and collaborations. Let's build something amazing!
                        </p>

                        <div className="contact-methods">
                            {profile.socials.email && (
                                <a href={`mailto:${profile.socials.email}`} className="contact-method">
                                    <div className="method-icon">📧</div>
                                    <div className="method-info">
                                        <span className="method-label">Email</span>
                                        <span className="method-value">{profile.socials.email}</span>
                                    </div>
                                    <span className="method-arrow">→</span>
                                </a>
                            )}
                            {profile.socials.phone && (
                                <a href={`tel:${profile.socials.phone.replace(/\s+/g, '')}`} className="contact-method">
                                    <div className="method-icon">📱</div>
                                    <div className="method-info">
                                        <span className="method-label">Phone</span>
                                        <span className="method-value">{profile.socials.phone}</span>
                                    </div>
                                    <span className="method-arrow">→</span>
                                </a>
                            )}
                            <div className="contact-method">
                                <div className="method-icon">📍</div>
                                <div className="method-info">
                                    <span className="method-label">Location</span>
                                    <span className="method-value">{profile.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    placeholder="Your Message"
                                    rows="5"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                <span>Send Message</span>
                            </button>
                            {status && <p className="status-message">{status}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
