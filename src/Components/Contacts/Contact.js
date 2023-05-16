import React from "react";
// import SocialIcon from "../Socials/Social";
import Picman from '../assets/Linked.png'
import Picman2 from '../assets/GitHub-Mark.png'

import { ContactWrapper } from "./ContactCSS";
function Contact() {
  return (
    <ContactWrapper id="contact" style={{ backgroundColor: "beige"}}>
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard" style={{ textAlign:'center'}}>
        <span style={{ fontSize: '22px'}}> magpantayjohn20@gmail.com</span><br></br>
        <span style={{ fontSize: '22px'}}> 209-625-6385</span>
        
        <a href="https://www.linkedin.com/in/john-magpantay-0a2953271/"><img alt="MyPortfolio" src={Picman2} style={{height:'45px', textAlign:'center'}}></img></a>
        <br></br>
          <a href="https://github.com/jayStackk"><img alt="MyPortfolio" src={Picman} style={{height:'45px',}}></img></a>
            
          
        </div>
        
      </div>
    </ContactWrapper>
  );
}

export default Contact;
