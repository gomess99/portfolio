import React from "react";
import "./SectionContacts.css";

function SectionContacts() {

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="sectionContacts">
      <div className="sectionContacts-copy">
        <p>gabrielggcpro@gmail.com</p>
        <i className="bi bi-clipboard copy"></i>
      </div>

      <div className="sectionContacts-contatos">
      <i className="bi bi-linkedin" onClick={() => openLink("https://www.linkedin.com/in/gabriel-gomes-6935ba255/")}></i>
          <i className="bi bi-github" onClick={() => openLink("https://github.com/gomess99")}></i>
          <i className="bi bi-instagram" onClick={() => openLink("https://www.instagram.com/ggomes99/")}></i>
        <i className="bi bi-whatsapp" onClick={() => openLink("https://bit.ly/3vgsZbc")}></i>
      </div>

      <h3>Na busca pela primeira <span>oportunidade</span> na área tech</h3>
    </div>
  );
}

export default SectionContacts;