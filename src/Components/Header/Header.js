import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import newPic from '../assets/J2-logos.jpeg'
import './Header.css'

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img
            src={newPic}
            alt="logo"
            style={{ width :'238px', height: '115px', objectFit:'contain', marginBottom: '15pt', }}
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            Skills
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contact
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
           <a
           href=""

           >  Resume  </a> 
          </NavLink>
        </NavMenu>
    
        
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
