import '../assets/css/contact.css'

function Contact() {
  return (
    <section className="contact-section"> 
        <h3 className="work-header">Get in touch!</h3>
        <form action="submit" className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="subject">Subject:</label>
            <input type="text" name="subject" id="subject" />
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" /> 
            <button type="submit">Send Message</button>
        </form>
    </section>
  );
}

export default Contact;