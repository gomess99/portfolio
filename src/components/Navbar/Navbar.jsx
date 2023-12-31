import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../img/logo.svg";
import { Link as RouterLink } from "react-router-dom";
import { scroller } from "react-scroll";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToComponent = (component) => {
    const targetElement = document.getElementById(component);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    } else {
      console.error("Element not found:", component);
    }
  };
  

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <RouterLink to="/">
        <img className="logo" src={logo} alt="Logo" />
      </RouterLink>

      <div className={`navbar-text ${menuOpen ? "menu-text-open" : ""}`}>
        <a onClick={() => scrollToComponent("projects")}>PROJETOS</a>
        <a onClick={() => scrollToComponent("tools")}>FERRAMENTAS</a>
        <a onClick={() => scrollToComponent("formation")}>FORMAÇÃO</a>
        <a onClick={() => scrollToComponent("contacts")}>CONTATOS</a>
      </div>
      <div className="sandwich-menu" onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}


export default Navbar;
