import React from "react";
import "./SectionContacts.css";

function SectionContacts() {
  return (
    <div className="sectionContacts">
      <div className="sectionContacts-copy">
        <p>gabrielggcpro@gmail.com</p>
        <i className="bi bi-clipboard copy"></i>
      </div>

      <div className="sectionContacts-contatos">
        <i className="bi bi-linkedin"></i>
        <i className="bi bi-github"></i>
        <i className="bi bi-discord"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-whatsapp"></i>
      </div>

      <h3>Na busca pela primeira <span>oportunidade</span> na área tech</h3>
    </div>
  );
}

export default SectionContacts;
