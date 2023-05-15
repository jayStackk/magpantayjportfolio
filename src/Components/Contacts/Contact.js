import React from "react";
// import SocialIcon from "../Socials/Social";
import { ContactWrapper } from "./ContactCSS";
function Contact() {
  return (
    <ContactWrapper id="contact" style={{ backgroundColor: "beige"}}>
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard" style={{ textAlign:'center'}}>
        <span> magpantayjohn20@gmail.com</span><br></br>
        <span> 209-625-6385</span>
        <a
            className="btn PrimaryBtn"
            href="https://www.linkedin.com/in/john-magpantay-0a2953271/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn PrimaryBtn"
            href="https://github.com/jayStackk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        
      </div>
    </ContactWrapper>
  );
}

export default Contact;
