import React from "react";
import './styles.css';

export const QuemSomosContent = () => {
    return(
    <div id="quemsomos" className="conteudo">
      <div className="container">
        <div className="row">
          <div className="text-center">
            <div className="d-flex flex-lg-row flex-column gap-2 mt-5">
              <div className="col-lg-6 col-12 lgrqsm">
                <div className="d-flex flex-column align-items-center">
                  <img
                    className="perfil img-fluid mb-2"
                    src="/images/alejandra.png"
                    alt="foto de Alejandra"
                  />
                  <span className="labelFt">Alejandra Kirkwood</span>
                </div>
                <p className="p-3">
                  <b>Alejandra</b> é objetiva, sempre em busca da perfeição
                  funcional e da eficiência. Durante sua estadia na Espanha,
                  especializou-se no Mestrado de Gestão Integral de Obras e
                  Restauração de Edifícios Históricos. Além disso, como
                  ilustradora, cria lindos desenhos de aquarela dos lugares por
                  onde passa. Alejandra possui um talento especial para discernir
                  a beleza no design e uma compreensão profunda dos princípios da
                  arquitetura. Sua abordagem é fundamentada na lógica, mas com
                  uma apreciação aguçada pela forma e estrutura.
                </p>
              </div>

              <div className="col-lg-6 col-12 lgrqsm">
                <div className="d-flex flex-column align-items-center">
                  <img
                    className="perfil img-fluid mb-2"
                    src="/images/leo.png"
                    alt="foto de Léo"
                  />
                  <span className="labelFt">Leandro Cruz</span>
                </div>

                <p className="p-3">
                  <b>Léo</b> é a essência da criação, movido por uma paixão
                  ardente pela arquitetura. Com uma imaginação fértil e um olhar
                  afiado para a estética, ele se dedica a criar ambientes que não
                  só exibem beleza, mas que também são o ápice da funcionalidade.
                  Para Léo, cada espaço é uma tela em branco, pronta para ser
                  preenchida com harmonia e funcionalidade. Seu legado é marcado
                  pelos seus projetos executados que são ao mesmo tempo harmoniosos
                  e práticos.
                </p>
              </div>
            </div>

            <div className="mt-5 quemsomos2">
              <p className="pbold">
                Cada projeto é uma nova oportunidade para Léo de infundir arte
                na vida cotidiana, e é nessa jornada que a parceria com Alejandra
                se torna sinérgica. Juntos, eles tecem uma dança de ideias e
                formas, onde a visão de Léo encontra o meticuloso cuidado de
                Alejandra com os detalhes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};