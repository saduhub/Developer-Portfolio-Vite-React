import '../assets/css/resume.css';
import resume from  '../assets/resume.pdf'

function Resume() {
    return (
      <section className="resume-section">
        <iframe className="resume-pdf" src={resume} title="Resume" style={{ border: 'none' }}></iframe>
        <a href={resume} download>Download PDF</a>
      </section>
    );
}
  
export default Resume;