import React from "react";
import { stackList } from "../Datas/ProjectData";
import {
  Image,
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
            Hello! My name is <strong>Your Name</strong> Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
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
