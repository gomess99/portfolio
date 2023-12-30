import React from "react";
import "./SelectionProject.css";
import imgLocalInfo from "../../img/group-2.png"

function SelectionProject(){
    return(
        <div className="selectionProject">
            <div className="selectionProject-titulo">
                <div>
                    <h2>PROJETOS</h2>
                    <hr />
                </div>

                <h3>Alguns projetos particulares e acadêmicos</h3>
            </div>

            <div className="selectionProject-projeto">
                <img src={imgLocalInfo} alt="Imagem do projeto LocalInfo" />
                <div className="selectionProject-projeto-descricao">
                    <h2>LocalInfo</h2>
                    <p>LocalInfo é site de negócios locais feito por mim e Warlen Barreiros. Foi aplicado as tecnologias do MERN Stack e apresentado no trabalho final de conclusão de curso.</p>
                    <button>SAIBA MAIS</button>
                </div>

                
            </div>
        </div>
    )
}

export default SelectionProject;