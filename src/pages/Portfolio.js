import React from 'react';

//images

import chouette from './portfolio_img/chouette.png';
import ohmyfood from './portfolio_img/ohmyfood.png';
import orinocco from './portfolio_img/orinocco.png';
import piquante from './portfolio_img/piquante.png';


const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolioContainer">

            <a className="portfolioContainer__link" href="https://loicbogaert.github.io/Creer_site_e-commerce" target="_blank" rel="noreferrer">
                <div className="portfolioContainer__item">
                <img src={orinocco} alt="aperçu du site"/>
                <p className="portfolioContainer__txt" id="txt">Orinoco : Le but de ce projet était de créer le front-end d'un site d'e-commerce et de communiquer avec une API qui avait été fournie à l'avance.</p>
                </div>
            </a>

            <a className="portfolioContainer__link" href="https://loicbogaert.github.io/Dynamiser_avec_animations_css/" target="_blank" rel="noreferrer">
                <div className="portfolioContainer__item">
                    <img src={ohmyfood} alt="aperçu du site"/>
                    <p className="portfolioContainer__txt" id="txt">OhMyFood : mise en forme d'une maquette pour un site de restauration avec html et sass</p>
                </div>
            </a>

            <a className="portfolioContainer__link" href="https://github.com/loicbogaert/Construire_une_API_securisee-Back-" target="_blank" rel="noreferrer">
                <div className="portfolioContainer__item">
                <img src={piquante} alt="aperçu du site"/>
                <p className="portfolioContainer__txt" id="txt">Piquante : Le but du projet était de créer une API sécurisée pour une application d'avis gastronomique avec un front-end déjà existant.</p>
                </div>
            </a>

            <a className="portfolioContainer__link" href="https://loicbogaert.github.io/Optimiser_un_site_web/" target="_blank" rel="noreferrer">
                <div className="portfolioContainer__item">
                    <img src={chouette} alt="aperçu du site"/>
                    <p className="portfolioContainer__txt" id="txt">La Chouette Agence : Le projet consistait à améliorer les performances d'un site déjà existant (
                    SEO, accessibilité, performance)
                    </p>
                </div>
            </a>


            <a className="portfolioContainer__link">
                <div className="portfolioContainer__item">
                    <img src="img/ohmyfood.png" alt="aperçu du site"/>
                    <p className="portfolioContainer__txt" id="txt">Réalisation d'un réseau social d'entreprise : Backend (API, BDD) + front-end. Comprends la création de compte, 
                        envoi de messages, création d'articles, modération...
                    </p>
                </div>
            </a>

            <a className="portfolioContainer__link">
                <div className="portfolioContainer__item">
                    <img src="" alt="aperçu du site"/>
                    <p className="portfolioContainer__txt" id="txt">Projet en cours ...</p>
                </div>
            </a>
        </div>
    );
};

export default Portfolio;