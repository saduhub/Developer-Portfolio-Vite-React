import { useState } from 'react';
import '../assets/css/contact.css'
import { validateEmail } from '../utils/helpers';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
          setName(value);
          break;
      case 'email':
          setEmail(value);
          break;
      case 'subject':
          setSubject(value);
          break;
      case 'message':
          setMessage(value);
          break;
      default:
          break;
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === 'email' && !validateEmail(value)) {
      setErrorMessage('Invalid Email');
      setVisible(true);
    } else if (!value.trim()) {
      setErrorMessage(`${name.charAt(0).toUpperCase() + name.slice(1)} Is Required`);
      setVisible(true);
    } else {
      setErrorMessage('');
      setVisible(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!email || !name || !subject || !message) {
      setErrorMessage('All Fields Required');
      setVisible(true);
      return;
    }

    // if (!validateEmail(email)) {
    //   setErrorMessage('Invalid Email');
    //   setVisible(true);
    //   return;
    // }

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setErrorMessage('');
    setVisible(false);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <section className="contact-section"> 
        <h3 className="work-header">Get in touch!</h3>
        <form action="submit" className="contact-form" onSubmit={handleFormSubmit} onBlur={handleBlur}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" value={name} onChange={handleInputChange} onBlur={handleBlur} />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={email} onChange={handleInputChange} onBlur={handleBlur} />
            <label htmlFor="subject">Subject:</label>
            <input type="text" name="subject" id="subject" value={subject} onChange={handleInputChange} onBlur={handleBlur} />
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" value={message} onChange={handleInputChange} onBlur={handleBlur} /> 
            <button type="submit">Send Message</button>
        </form>
        {visible && (
            <div className="modal">
                <div className="modal-content">
                    <p>{errorMessage}</p>
                    <span className="close-button" onClick={closeModal}>x</span>
                </div>
            </div>
        )}
    </section>
  );
}

export default Contact;