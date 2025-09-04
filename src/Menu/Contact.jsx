import Lottie from 'lottie-react';
import myLottie from '../lottie/Call Center Support Lottie Animation.json'
import lottie from '../lottie/result page success motion design.json'
import './Contact.css'
import { useState } from 'react';

function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessLottie, setShowSuccessLottie] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const mailtoLink = `mailto:ataxonovsherzod77@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      setShowModal(false);
      setShowSuccessLottie(true);
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setShowSuccessLottie(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className='contact-body'>
      <section className="contact-hero">
        <div className="contact-card">
          <Lottie animationData={myLottie} loop={true} className="contact-animation" />
          <h2>Get in Touch</h2>
          <hr />
          <p>Feel free to reach out for collaborations or any inquiries.</p>
          <button className="contact-btn" onClick={() => setShowModal(true)}>
            Write to me
          </button>
          
          {/* Contact Modal */}
          {showModal && (
            <div className="modal" onClick={closeModal}>
              <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                  <h3>📧 Send me a message</h3>
                  <button className="modal-close-btn" onClick={closeModal}>
                    <span>×</span>
                  </button>
                </div>
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="form-actions">
                    <button type="button" className="cancel-btn" onClick={closeModal}>
                      Cancel
                    </button>
                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <span className="loading-spinner"></span>
                          Sending...
                        </>
                      ) : (
                        <>📤 Send Message</>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Success Modal */}
          {showSuccessLottie && (
            <div className="success-modal-overlay" onClick={() => setShowSuccessLottie(false)}>
              <div className="success-modal-content" onClick={e => e.stopPropagation()}>
                <Lottie animationData={lottie} loop={false} />
                <h3>Message Sent Successfully! 🎉</h3>
                <p>Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <section className="contact-info">
        <h2>Contact Me</h2>
        <p>If you'd like to work together or have any questions, feel free to reach out.</p>
        <ul>
          <li>📧 Email: <a href="mailto:ataxonovsherzod77@gmail.com">ataxonovsherzod77@gmail.com</a></li>
          <li>📱 Phone: <a href="tel:+998882110512">+998 88 211 05 12</a></li>
          <li>💼 LinkedIn: <a href="https://www.linkedin.com/in/sherzod-ataxonov" target="_blank" rel="noreferrer">linkedin.com/in/sherzod-ataxonov</a></li>
          <li>🐙 GitHub: <a href="https://github.com/SherzodAtaxonov" target="_blank" rel="noreferrer">github.com/SherzodAtaxonov</a></li>
          <li>📸 Instagram: <a href="https://www.instagram.com/baht1yarvich_" target="_blank" rel="noreferrer">@baht1yarvich_</a></li>
        </ul>
      </section>
      
      <footer className="contact-footer">
        <p>© 2025 Sherzod | Frontend Developer</p>
        <div>
          <a href="mailto:ataxonovsherzod77@gmail.com">Email</a> |
          <a href="tel:+998882110512">Phone</a> |
          <a href="https://github.com/SherzodAtaxonov" target="_blank" rel="noreferrer">GitHub</a> |
          <a href="https://www.linkedin.com/in/sherzod-ataxonov" target="_blank" rel="noreferrer">LinkedIn</a> |
          <a href="https://www.instagram.com/baht1yarvich_" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  )
}

export default Contact
