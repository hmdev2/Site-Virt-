import React from 'react';
import './styles.css';

export const Header = () => {
    return (
        <header className="d-none d-sm-flex justify-content-center pb-1 pt-2 col-12">
            <ul className="nav nav-pills gap-2">
                <li className="nav-item">
                    <a id="linkhover" href="#inicio" className="nav-link" aria-current="page">
                        Início
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#quemsomos" className="nav-link" aria-current="page">
                        Quem somos
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#escritorio" className="nav-link" aria-current="page">
                        Escritório
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#projetos" className="nav-link" aria-current="page">
                        Projetos
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        aria-current="page"
                        href="http://wa.me/71984353243"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </li>
            </ul>
        </header>
    );
};

