import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://linkedin.com/in/rachit2406"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn - rachit2406
              </a>
            </p>
            <p>
              <a href="mailto:2406rachit2406@gmail.com" data-cursor="disable">
                2406rachit2406@gmail.com
              </a>
            </p>
            <p>Uttar Pradesh, India</p>
            <h4>Education</h4>
            <p>
              Dr. A.P.J. Abdul Kalam Technical University - B.Tech CSE
              (2022-2026)
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="mailto:2406rachit2406@gmail.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/rachit2406"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a href="/resume.pdf" download data-cursor="disable" className="contact-social">
              Download Resume <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Rachit Srivastava</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
