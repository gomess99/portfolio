import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../img/logo.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <img className="logo" src={logo} alt="Logo" />
      <div className={`navbar-text ${menuOpen ? "menu-text-open" : ""}`}>
        <a href="">PROJETOS</a>
        <a href="">FERRAMENTAS</a>
        <a href="">FORMAÇÃO</a>
        <a href="">CONTATOS</a>
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
