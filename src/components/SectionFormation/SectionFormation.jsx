import React from "react";
import "./SectionFormation.css";
import logoSenai from "../../img/Formation/logosenai.png"
import logoBoticario from "../../img/Formation/logoboticario.png"

function SectionFormation(){
    return(
        <div id="formation" className="sectionFormation">
            <div className="selectionProject-titulo">
                <div>
                    <h2>FORMAÇÃO</h2>
                    <hr />
                </div>

                <h3>Currículos acadêmicos e experiencias</h3>
            </div>

            <div className="sectionFormation-grid">
                <div className="sectionFormation-formacao">
                    <div className="hr"></div>
                    <div className="group">
                        <img src={logoSenai} alt="Logo SENAI" />
                        <p>Formado em Técnico em Desenvolvimento de Sistemas pelo SENAI de Feira de Santana ,Bahia. Concluído em 2023</p>
                    </div>
                </div>

                <div className="sectionFormation-formacao">
                    <div className="hr"></div>
                    <div className="group">
                        <img src={logoBoticario} alt="Logo SENAI" />
                        <p>Bolsa no curso de Full Stack pelo programa Desenvolve, uma iniciativa do Grupo Boticário na plataforma Alura.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFormation;