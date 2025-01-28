import React from "react";
import { GoogleMapsEmbed } from "../GoogleMapsEmbed";

export const Footer = () => {
    return(
        <footer className="p-3">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 d-flex justify-content-center pt-5">
						<div className="d-flex flex-row gap-4 naveg footer-menu text-nowrap">
							<a href="#inicio">Início</a>
							<a href="#quemsomos">Quem somos</a>
							<a href="#escritorio">Escritório</a>
							<a href="#projetos">Projetos</a>
						</div>
					</div>
					<div className="col-xl-6 pt-5 social-links">
						<div className="d-flex justify-content-center">
							<div className="d-flex flex-column flex-sm-row justify-content-center gap-4">
								<div className="d-flex flex-row gap-4 text-nowrap">	
									<a href="https://www.instagram.com/virtuprojetos" target="_blank" rel="noopener noreferrer">
										<i className="fab fa-instagram"></i>
										Instagram
									</a>
									<a href="http://wa.me/71984353243" target="_blank" rel="noopener noreferrer">
										<i className="fab fa-whatsapp"></i>
										WhatsApp
									</a>
									<a href="https://www.facebook.com/61560753443096" target="_blank" rel="noopener noreferrer">
										<i className="fab fa-facebook"></i>
										Facebook
									</a>
								</div>

								<div className="d-flex flex-row gap-4 text-nowrap justify-content-center">	
									<a href="https://www.youtube.com/@VirtuProjetosImobiliarios" target="_blank" rel="noopener noreferrer">
										<i className="fab fa-youtube"></i>
										YouTube
									</a>

									<a href="https://br.pinterest.com/virtuprojetos/" target="_blank" rel="noopener noreferrer">
										<i className="fab fa-pinterest"></i>
										Pinterest
									</a>
								</div>

							</div>
							
						</div>
					</div>

					<div className="d-flex flex-lg-row justify-content-center">
						<div className="row">
							
							<div className="col-lg-6 footer-info pt-5 d-flex justify-content-center align-items-center">
								<div>
									<p>Endereço: Av. Luís Viana Filho, 13223, Torre 1, Sala 608, Salvador - BA, 41500-300, Brasil</p>
			      					<p>Telefone: (71) 98435-3243</p>
			      					<p>Email: virtuprojetos@gmail.com</p>
								</div>
							</div>

							<div className="col-lg-6 pt-5 d-flex justify-content-center">
                                <GoogleMapsEmbed />
							</div>
						</div>
					</div>

					<div className="col-12 d-flex justify-content-center pt-4 footerCopy">
						<p>&copy; 2024 Virtù Projetos Imobiliários. Todos os direitos reservados.</p>
					</div>

				</div>
			</div>
		</footer>
    );
};