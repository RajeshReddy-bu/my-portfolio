import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import './index.css'

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/init');
        setData(res.data);
      } catch (err) {
        console.error('Error fetching site data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0f', color: '#6366f1' }}>
      <div className="pulse"></div>
      <p style={{ marginLeft: '10px' }}>Loading Portfolio...</p>
    </div>
  );

  return (
    <div className="app">
      <Background />
      <Navbar socialLinks={data?.profile?.socials} />
      <Hero profile={data?.profile} />
      <About profile={data?.profile} />
      <Skills skills={data?.skills || []} />
      <Projects projects={data?.projects || []} />
      <Experience experiences={data?.experience || []} />
      <Contact profile={data?.profile} />
      <footer style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
        <p>© {new Date().getFullYear()} {data?.profile?.name || 'Budala Rajesh'}. Built with MERN Stack.</p>
      </footer>
    </div>
  )
}

export default App
