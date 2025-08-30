
import { useState } from 'react'
import { motion } from 'framer-motion'
import goalsImg from '../assets/undraw_metrics_5v8d.svg' // Rasm yo'lini moslang
import './Goals.css' // CSS fayl alohida

function Goals() {
  // Maqsadlar ro'yxati
  const goals = [
 {
    id: 1,
    title: '✅ Master HTML, CSS, and JavaScript',
    details: 'Mastering the core web technologies—HTML, CSS, and JavaScript—is my top priority. With these skills, I can build well-structured, visually appealing, and interactive websites from scratch.'
  },
  {
    id: 2,
    title: '⚛️ Learn React and build real-world applications',
    details: 'React is one of the most popular frontend libraries today. By mastering React, I aim to create efficient, fast, and scalable web applications that meet modern standards.'
  },
  {
    id: 3,
    title: '🤝 Develop professional teamwork skills',
    details: 'Collaboration is key in software development. I strive to become proficient with tools like Git and GitHub, participate in code reviews, and work effectively in team environments.'
  },
  {
    id: 4,
    title: '🚀 Build useful and impactful products',
    details: 'Combining my technical knowledge with creativity, my goal is to develop practical products that provide real value to users. This will help me grow as a developer and contribute meaningfully to the community.'
  }
  ]

  const [selectedGoal, setSelectedGoal] = useState(null)

  return (
    <div className="goals-section">
      {/* Chap tomonda rasm */}
      <motion.img
        src={goalsImg}
        alt="Developer"
        className="goals-img"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      />

      {/* O'ng tomonda matn */}
      <div className="goals-content">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Goals
        </motion.h2>

        <motion.ul
          className="goals-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {goals.map((goal) => (
            <li key={goal.id} onClick={() => setSelectedGoal(goal)}>
              {goal.title}
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Modal oynasi */}
      {selectedGoal && (
        <div className="goal-modal-overlay" onClick={() => setSelectedGoal(null)}>
          <div className="goal-modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedGoal.title}</h3>
            <p>{selectedGoal.details}</p>
            <button onClick={() => setSelectedGoal(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Goals
