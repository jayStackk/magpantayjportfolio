import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import newPic from '../assets/johnny.jpg'
import {CgScrollV} from 'react-icons/cg'


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
          <div className="newPosition"> 
            <h5> Jr Web Developer </h5>
            <p>
              Aspiring Software engineer. Live, breathe , code and repeat!
            </p>

          </div>
          </HeroLeft>
          <HeroRight>
            <Image
            src={newPic}
              alt="man-svgrepo"
              style={{ borderRadius: '50%'}}
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            <h1> Scroll down <CgScrollV/> </h1>
            {/* <img
              src={CgScrollV}
              alt="scroll-down"
            /> */}
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
