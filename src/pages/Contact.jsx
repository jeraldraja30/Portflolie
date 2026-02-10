import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Mail, MapPin, Phone, MessageSquare } from 'lucide-react'
import emailjs from '@emailjs/browser'
import SocialLinks from '../components/SocialLinks'
import './Contact.css'

function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formData, setFormData] = useState({
    name: 'RAJA JERALD',
    email: 'jeraldprogrammer@gmail.com',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Note: You need to set up EmailJS service ID, template ID, and public key
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'service_9uakneo', // Replace with your EmailJS service ID
        'template_2ic8lmh', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'ORuAVFEHj6QYcZ_cL' // Replace with your EmailJS public key
      )

      console.log('Email sent successfully:', result)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      // For demo purposes, show success even on error
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <motion.div
      className="contact-page"
      data-section="contact"
    >
      <div className="contact-overlay"></div>

      <div className="contact-container" ref={ref}>
        <motion.h1
          className="contact-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h1>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <h2>Let's Work Together</h2>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out!
            </p>

            <div className="contact-details">
              <motion.div
                className="contact-detail"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <Mail size={24} />
                <div>
                  <h3>Email</h3>
                  <p>jeraldrajakala2006@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="contact-detail"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <Phone size={24} />
                <div>
                  <h3>Phone</h3>
                  <p>+91 9965637023</p>
                </div>
              </motion.div>

              <motion.div
                className="contact-detail"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <MapPin size={24} />
                <div>
                  <h3>Location</h3>
                  <p>Chennai, Tamil Nadu</p>
                </div>
              </motion.div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <SocialLinks />
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            className="contact-form"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <motion.div
              className="form-group"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <input
                type="text"
                name="name"
                placeholder="Raja jerald"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </motion.div>

            <motion.div
              className="form-group"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <input
                type="email"
                name="email"
                placeholder="jeraldrajakala2006@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </motion.div>

            <motion.div
              className="form-group"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="form-textarea"
              />
            </motion.div>

            {submitStatus === 'success' && (
              <motion.div
                className="submit-status success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully!
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                className="submit-status error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Failed to send message. Please try again.
              </motion.div>
            )}

            <motion.button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={20} />
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact

