import React from "react";
import "./Footer.css";
import logo2 from "../../img/logo2.svg";
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate("/");
      };
  return (
    <footer className="footer">
        <img onClick={handleButtonClick} className="logo" src={logo2} alt="Logo" />

      <p>&copy; 2023 Gabriel Gomes</p>
    </footer>
  );
}

export default Footer;
