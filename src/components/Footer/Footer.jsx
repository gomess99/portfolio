import React from "react";
import "./Footer.css";
import logo2 from "../../img/logo2.svg";

function Footer(){
    return(
        <footer className="footer">
            <img className="logo" src={logo2} alt="Logo" />

            <p>&copy; 2023 Gabriel Gomes</p>
        </footer>
    )
}

export default Footer;
