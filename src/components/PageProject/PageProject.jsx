import React from "react";
import "./PageProject.css";
import imgLocalInfo from "../../img/group-2.png";
import imgMongoDb from "../../img/tools/mongodb.svg";
import imgExpress from "../../img/tools/express.svg";
import imgReact from "../../img/tools/react.svg";
import imgNode from "../../img/tools/node.svg";
import imgFigma from "../../img/tools/figma.svg";

function PageProject() {
  return (
    <div>
      <div className="selectionProject-titulo">
        <div>
          <h2>LOCALINFO</h2>
          <hr />
        </div>

        <h3>
          Uma solução prática e rápida para busca de estabelecimentos, serviços
          e vendas locais.
        </h3>
      </div>

      <div className="pageProject-grid">
        <img
          className="imgProject"
          src={imgLocalInfo}
          alt="Imagem do projeto LocalInfo"
        />

        <div className="selectionProject-descricao">
          <h4>Visão geral</h4>
          <p>
            O software LocalInfo é uma plataforma online que reúne informações
            sobre estabelecimentos, negócios, vendas e serviços locais. A
            concepção desse projeto nasceu da necessidade de proporcionar uma
            forma adequada de obter informações sobre os novos empreendimentos
            que uma cidade de pequeno porte pode oferecer. Isso inclui detalhes
            como inauguração, horário de funcionamento, localização, promoções e
            uma visão geral do espaço ou serviços disponibilizados pelos
            proprietários.
          </p>
          <p>
            A ideia ganhou forma durante a elaboração do projeto final de TCC
            (Trabalho de Conclusão de Curso) para o curso Técnico em
            Desenvolvimento de Sistemas no campus do SENAI em Feira de Santana,
            Bahia. A equipe responsável pelo desenvolvimento do front-end e
            back-end foi composta por quatro membros, incluindo eu e Warlen
            Bareiros.
          </p>

          <p>
            No LocalInfo, os usuários podem buscar uma variedade de
            estabelecimentos comerciais em sua localidade. Para aqueles que
            desejam promover seus negócios em nossa plataforma, oferecemos a
            oportunidade de cadastro e divulgação gratuita, permitindo anunciar
            informações como contatos, localização com mapa, promoções e
            imagens. Além disso, os usuários têm a flexibilidade de atualizar
            essas informações conforme necessário. Os benefícios dessa abordagem
            incluem uma maior disseminação de informações sobre os negócios e o
            estímulo a iniciativas de novos pequenos empreendedores.
          </p>

          <p>
            No desenvolvimento do LocalInfo, optamos por adotar uma tecnologia
            inovadora para a nossa equipe, o MERN Stack, que combina MongoDB,
            Express, React e Node.js. Após extensa pesquisa das ferramentas,
            construímos o escopo, requisitos, design visual, API e outros
            componentes da aplicação. O projeto foi concluído e apresentado à
            banca avaliadora do TCC em um prazo de dois meses.
          </p>
        </div>

        <div className="selectionProject-ferramentas">
          <h4>Ferramentas utilizadas</h4>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageProject;
