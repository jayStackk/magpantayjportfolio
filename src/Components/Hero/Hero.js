import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import newPic from '../assets/johnny.jpg'
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main style={{ backgroundColor : " #FFFFF "}}>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1 style={{ textAlign:'center'}}> Hi, I'm John Magpantay</h1>
            <h5>Jr Web Developer</h5>
            <p>
              I design and Live,Breathe and Code.
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
            src={newPic}
              alt="man-svgrepo"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            {/* <img
              src=""
              alt="scroll-down"
            /> */}
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
