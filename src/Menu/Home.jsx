import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <main className="home-container">
      <section className="intro-section">
        <h2>👋 I'm Sherzod — Frontend Developer</h2>
        <p>
          I'm passionate about creating modern, efficient, and user-friendly web applications using React.js.
          Code quality, interface design, and UX are my main focus.
        </p>
        <p>
          In my free time, I learn new technologies, improve my experience, and participate in open-source projects.
        </p>
        <Link to="/contact" className="btn-primary">📬 Contact me</Link>
      </section>

      <section className="feature-section">
        <div className="feature-card">
          <h3>🧠 Technical Skills</h3>
          <p>React, JavaScript, HTML, CSS, Tailwind, Git, Figma</p>
        </div>
        <div className="feature-card">
          <h3>🚀 My Goals</h3>
          <p>To become a leading specialist in frontend development and create programs that solve real problems.</p>
        </div>
        <div className="feature-card">
          <h3>📂 My Projects</h3>
          <p>Portfolio, To-Do App, Weather App and other interactive web applications.</p>
          <a
            href="https://github.com/SherzodAtaxonov"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View on GitHub →
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
