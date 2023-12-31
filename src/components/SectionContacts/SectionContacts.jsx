import React, { useState } from "react";
import "./SectionContacts.css";

function SectionContacts() {
  const [isCopied, setIsCopied] = useState(false);

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  const handleCopyClick = () => {
    const emailText = "gabrielggcpro@gmail.com";
    navigator.clipboard.writeText(emailText).then(
      () => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      },
      (err) => {
        console.error("Falha ao copiar para a área de transferência: ", err);
      }
    );
  };

  return (
    <div id="contacts" className="sectionContacts">
      <div className="sectionContacts-copy">
        <p>{isCopied ? "Copiado!" : "gabrielggcpro@gmail.com"}</p>
        <i
          className={`bi bi-clipboard copy ${isCopied ? "copied" : ""}`}
          onClick={handleCopyClick}
        ></i>
      </div>

      <div className="sectionContacts-contatos">
        <i
          className="bi bi-linkedin"
          onClick={() => openLink("https://www.linkedin.com/in/gabriel-gomes-6935ba255/")}
        ></i>
        <i className="bi bi-github" onClick={() => openLink("https://github.com/gomess99")}></i>
        <i className="bi bi-instagram" onClick={() => openLink("https://www.instagram.com/ggomes99/")}></i>
        <i className="bi bi-whatsapp" onClick={() => openLink("https://bit.ly/3vgsZbc")}></i>
      </div>

      <h3>Na busca pela primeira <span>oportunidade</span> na área tech</h3>
    </div>
  );
}

export default SectionContacts;
