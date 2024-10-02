import React, { useState } from 'react';
import '../../assets/CSS/ContactUs/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use SMTP.js to send the email
    window.Email.send({
      Host: 'webhost.dynadot.com', // Your SMTP host
      Username: 'admin@enza.one', // Your SMTP username
      Password: '38199569', // Your SMTP password
      To: 'admin@enza.one', // Recipient email
      From: formData.email, // Sender's email
      Subject: formData.subject, // Subject from the form
      Body: `
        You have a new message from the contact form.<br><br>
        <strong>Name:</strong> ${formData.name}<br>
        <strong>Email:</strong> ${formData.email}<br>
        <strong>Phone:</strong> ${formData.phone}<br>
        <strong>Message:</strong> ${formData.message}
      `,
    })
      .then((message) => alert('Email sent successfully!'))
      .catch((error) => alert('Failed to send email.'));
  };

  return (
    <div className="contactUS-main-container">
      <div className="textSection">
        <h2 className="heading">Contact Us</h2>
        <h3 className="subheading">Request A Call Back!</h3>
      </div>

      <div className="form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              placeholder="Your Name"
              className="form-input"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="form-input"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              placeholder="Phone Number"
              className="form-input"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="form-input"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <textarea
              placeholder="Message..."
              className="form-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className='button'>
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
