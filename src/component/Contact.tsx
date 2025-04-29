import React, { useState } from 'react';
import './Contact.css';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Valid email required';
    if (!formData.message.trim()) newErrors.message = 'Message required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-left">
        <h1>Let's Talk</h1>
        <p>We’d love to hear from you. Send us a message!</p>
      </div>
      <form className="contact-form-unique" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        {submitted && <p className="success-msg">Thanks for your message!</p>}

        <div className="input-box">
          <FaUser className="icon" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Name</label>
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="input-box">
          <FaEnvelope className="icon" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="input-box">
          <FaCommentDots className="icon" />
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <label>Message</label>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit" className="submit-btn">Send</button>
      </form>
    </div>
  );
};

export default Contact;
