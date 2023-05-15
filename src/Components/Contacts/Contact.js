import React from "react";
// import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactCSS";
function Contact() {
  return (
    <ContactWrapper id="contact" style={{ backgroundColor: "beige"}}>
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard" style={{ textAlign:'center'}}>
        <span> magpantayjohn20@gmail.com</span><br></br>
        <span> 209-625-6385</span>
        </div>
        {/* <SocialIcon /> */}
      </div>
    </ContactWrapper>
  );
}

export default Contact;
