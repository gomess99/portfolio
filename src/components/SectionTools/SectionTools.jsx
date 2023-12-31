import React from "react";
import "./SectionTools.css";
import imgMongoDb from "../../img/tools/mongodb.svg";
import imgExpress from "../../img/tools/express.svg";
import imgReact from "../../img/tools/react.svg";
import imgNode from "../../img/tools/node.svg";
import imgFigma from "../../img/tools/figma.svg";
import imgJavaScript from "../../img/tools/javascript.svg";
import imgHTML5 from "../../img/tools/html.svg";
import imgCSS3 from "../../img/tools/css.svg";

function SectionTools() {
  return (
    <div id="tools" className="sectionTools">
      <div className="selectionProject-titulo">
        <div>
          <h2>FERRAMENTAS</h2>
          <hr />
        </div>

        <h3>Algumas tecnologias usadas e que estão sendo estudadas por mim</h3>
      </div>

      <div className="sectionTools-grup">
        <div className="sectionTools-grup-ferramenta">
          <img src={imgMongoDb} alt="Icon MongoDB" />
          <p>MongoDB</p>
        </div>

        <div className="sectionTools-grup-ferramenta">
          <img src={imgExpress} alt="Icon MongoDB" />
          <p>Express</p>
        </div>

        <div className="sectionTools-grup-ferramenta">
          <img src={imgReact} alt="Icon MongoDB" />
          <p>React</p>
        </div>

        <div className="sectionTools-grup-ferramenta">
          <img src={imgNode} alt="Icon MongoDB" />
          <p>Node.js</p>
        </div>

        <div className="sectionTools-grup-ferramenta">
          <img src={imgFigma} alt="Icon MongoDB" />
          <p>Figma</p>
        </div>

        <div className="sectionTools-grup-ferramenta">
          <img src={imgJavaScript} alt="Icon MongoDB" />
          <p>JavaScript</p>
        </div>

        <div className="sectionTools-grup-ferramenta">
          <img src={imgHTML5} alt="Icon MongoDB" />
          <p>HTML5</p>
        </div>

        <div className="sectionTools-grup-ferramenta">
          <img src={imgCSS3} alt="Icon MongoDB" />
          <p>CSS3</p>
        </div>
      </div>
    </div>
  );
}

export default SectionTools;
