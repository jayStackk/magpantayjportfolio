import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import newPic from '../assets/newLogo.png'
import './Header.css'



const Header = ({ toggle }) => {

  


  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img
            src={newPic}
            alt="logo"
            style={{ width :'238px', height: '115px', objectFit:'contain', marginBottom: '15pt',}}
          />
        </Logo>
        <NavMenu style={{ color: 'White'}}>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            Skills
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://azure-lezlie-77.tiiny.site"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
    
        
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
