import React from "react";
import './styles.css';
import { LgCarousselContainer } from "../LgCarousselContainer";
import { SmCarousselContainer } from "../SmCarousselContainer";

export const ProjetosContent = () => {
    return(
        <>
            <div id="projetos" className="conteudo" >
                <div className="container">
                    <div className="carrossel-lg">		
                        <div id="carouselProjetos" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <LgCarousselContainer />
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselProjetos" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Anterior</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselProjetos" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Próximo</span>
                            </button>
                        </div>
                    </div>
                    <div className="carrossel-sm">
                        <div id="carouselProjetos2" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <SmCarousselContainer />
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselProjetos2" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Anterior</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselProjetos2" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Próximo</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};