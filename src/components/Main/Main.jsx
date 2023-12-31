import React from "react";
import "./Main.css";

function Main() {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="main">
      <h2>
        OI, SOU <span>GABRIEL GOMES</span>
      </h2>
      <div className="main-text-icon">
        <h1 className="titulo1">REACT</h1>
        <div className="main-icon">
          <i
            className="bi bi-linkedin"
            onClick={() =>
              openLink("https://www.linkedin.com/in/gabriel-gomes-6935ba255/")
            }
          ></i>
          <i
            className="bi bi-github"
            onClick={() => openLink("https://github.com/gomess99")}
          ></i>
          <i
            className="bi bi-instagram"
            onClick={() => openLink("https://www.instagram.com/ggomes99/")}
          ></i>
        </div>
      </div>
      <h1 className="titulo2">DEVELOPER</h1>
      <h3>
        Um jovem estudante empenhado em aprender e desenvolver{" "}
        <span>aplicações</span> e <span>designes web</span>
      </h3>
    </div>
  );
}

export default Main;
