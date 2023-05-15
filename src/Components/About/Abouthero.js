import React from "react";
import { stackList } from "../Datas/ProjectData";
import {
  
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutMe";
function About() {
  return (
    <ContactWrapper id="about" style={{backgroundColor : 'rgb(157, 191, 158)'}}>
      <div className="Container" style={{backgroundColor : 'rgb(157, 191, 158)', top: '25px'}}>
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        
          <div className="AboutBio">
          Hi i'm John Magpantay,I am passionate about software development, I find great joy in creating innovative and user-friendly applications that solve real-world problems. The process of turning ideas into fully functional software excites me, and I thrive on the challenges and complexities that come with it. 
          </div>
          <div className="AboutBio tagline2">
           Skills
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
