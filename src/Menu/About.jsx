import './About.css'
function About() {
  
  return (
<div className="about-section">
  <div className="about-card">
    <h1>👋 Hello, I'm Sherzod</h1>
    <p className="about-desc">
      I love modern technology and strive to create user-friendly interfaces
      <strong>Frontend is a programmer.</strong> I am increasing my experience by creating projects based on HTML, CSS, JavaScript and React.
    </p>

    <p className="about-desc">
     Constant growth, creativity and problem solving — on my agenda. I like to work independently as well as act together in a team.
    </p>

    <ul className="about-info">
      <li>📍 <strong>Location:</strong> Urganch, Uzbekistan</li>
      <li>📧 <strong>Email:</strong> <a href="mailto:ataxonovsherzod77@gmail.com">ataxonovsherzod77@gmail.com</a></li>
      <li>📱 <strong>Phone:</strong> <a href="tel:+998882110512">+998 88 211 05 12</a></li>
      <li>🔗 <strong>GitHub:</strong> <a href="https://github.com/SherzodAtaxonov" target="_blank">SherzodAtaxonov</a></li>
      <li>📱 <strong>Telegram:</strong> <a href="https://t.me/sherzod_web" target="_blank">@sherzod_web</a></li>
    </ul>

    {/* Resume Section */}
    <div className="resume-section">
      <h2>📄 Resume</h2>
      
      {/* Download Resume Button */}
      <div className="resume-download">
        <a href="/resume.pdf" download className="download-btn">
          📥 Download Resume (PDF)
        </a>
      </div>

      {/* Skills Section */}
      <div className="resume-block">
        <h3>🛠️ Technical Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Frontend Development</h4>
            <ul>
              <li>HTML5 & CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Tools & Technologies</h4>
            <ul>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Vite</li>
              <li>npm/yarn</li>
              <li>Figma (Basic)</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Soft Skills</h4>
            <ul>
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
              <li>Time Management</li>
              <li>Continuous Learning</li>
              <li>Attention to Detail</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="resume-block">
        <h3>💼 Experience</h3>
        <div className="experience-item">
          <div className="experience-header">
            <h4>Frontend Developer (Freelance)</h4>
            <span className="experience-date">2024 - Present</span>
          </div>
          <p>• Developing responsive web applications using React.js and modern CSS</p>
          <p>• Collaborating with clients to understand requirements and deliver solutions</p>
          <p>• Maintaining and optimizing existing codebases</p>
        </div>
        
        <div className="experience-item">
          <div className="experience-header">
            <h4>Web Development Projects</h4>
            <span className="experience-date">2023 - Present</span>
          </div>
          <p>• Created multiple personal and client projects using React.js</p>
          <p>• Implemented modern UI/UX designs with responsive layouts</p>
          <p>• Used version control (Git) for project management</p>
        </div>
      </div>

      {/* Education Section */}
      <div className="resume-block">
        <h3>🎓 Education</h3>
        <div className="education-item">
          <div className="education-header">
            <h4>Self-Taught Frontend Development</h4>
            <span className="education-date">2023 - Present</span>
          </div>
          <p>• Online courses and tutorials in React.js, JavaScript, and CSS</p>
          <p>• Practical projects and real-world applications</p>
          <p>• Continuous learning through documentation and community resources</p>
        </div>
      </div>

      {/* Languages Section */}
      <div className="resume-block">
        <h3>🌍 Languages</h3>
        <div className="languages-grid">
          <div className="language-item">
            <span className="language-name">Uzbek</span>
            <span className="language-level">Native</span>
          </div>
          <div className="language-item">
            <span className="language-name">English</span>
            <span className="language-level">Intermediate</span>
          </div>
          <div className="language-item">
            <span className="language-name">Russian</span>
            <span className="language-level">Intermediate</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer className="footer-modern">
    <p>© 2025 Sherzod Ataxonov — Frontend Developer</p>
    <p>Website built with React, CSS and Vite.</p>
    <div className="footer-links">
      <a href="mailto:ataxonovsherzod77@gmail.com">Email</a>
      <a href="tel:+998882110512">Phone</a>
      <a href="https://github.com/SherzodAtaxonov" target="_blank">GitHub</a>
    </div>
  </footer>
</div>


  )
}

export default About
