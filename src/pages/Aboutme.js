import React from 'react';

import manette from './about_img/manette.png';
import guitar from './about_img/guitar.png';
import code from './about_img/code.png';

const Aboutme = () => {
    return (
        <div className="aboutmePage">
            <div id="aboutme" className="aboutmeContainer">
                <section className="aboutmeContainer__section">
                    <h4 className="aboutmeContainer__title" id="qui">Qui suis-je ?</h4>
                    <p className="aboutmeContainer__txt">Je m'appelle Loïc Bogaert, j'ai 23 ans, je me passionne pour le développement web depuis plus d'un an et j'habite actuellement dans le nord de la France.
                    Je suis à la recherche d'un emploi dans le développement web, et je serai ravis de rejoindre une équipe où la bonne ambiance et le travail d'équipe sont de mise. </p>
                </section>

                <span className="greenTrail"></span>

                <section className="aboutmeContainer__section">
                    <h4 className="aboutmeContainer__title">Mon parcours</h4>
                    <p className="aboutmeContainer__txt">J'ai découvert le développement web pendant ma dernière année en licence d'info-com, où on apprenait à utiliser le CMS wordpress.
                        Cette première expérience avec la création de sites m'ayant beaucoup plu, j'ai commencé à apprendre à coder en autodidacte. Comme cela me plaisait de plus en
                        plus, j'ai suivi une formation de 6 mois sur OpenClassrooms qui m'a appris énormément sur le développement web. Aujourd'hui, je continue à me former en autodidacte 
                        et à apprendre avec des projets persos.
                        <br/>
                        <br/>
                        2021 : OpenClassrooms - Développeur web - RNCP - niveau 5 
                        <br/>
                        2017 - 2020 : Licence d'information et communication, culture et médias - Université du littoral côt d'opal - Dunkerque
                        </p>
                </section>

                    <span className="greenTrail2"></span>

                <section className="aboutmeContainer__section">
                    <h4 className="aboutmeContainer__title">Mes passions</h4>
                        <div className="aboutmeContainer__passionsContainer">
                            <div className="aboutmeContainer__passionsDiv">
                                <div className="imgContainer"> 
                                    <img alt="icone de guitare" className="guitar" src={guitar}/>
                                </div>
                                <h5 className="aboutmeContainer__passionsTitle">La guitare</h5>
                                <p className="aboutmeContainer__passionsTxt">J'apprends la guitare électrique en autodidacte depuis maintenant 4 ans. 
                                    J'aime bien sûr aussi écouter de la musique, le guitariste qui m'inspire le plus est Buckethead.
                                </p>
                            </div>

                            <div className="aboutmeContainer__passionsDiv">
                            <div className="imgContainer"> 
                                    <img alt="icone de manette" className="guitar" src={manette}/>
                                </div>
                                <h5 className="aboutmeContainer__passionsTitle">Les jeux vidéo</h5>
                                <p className="aboutmeContainer__passionsTxt">Un de mes passe-temps favoris est de jouer sur pc avec mes amis.</p>
                            </div>  

                            <div className="aboutmeContainer__passionsDiv">
                                <div className="imgContainer"> 
                                    <img alt="icone de code" className="guitar codeImg" src={code}/>
                                </div>
                                <h5 className="aboutmeContainer__passionsTitle">Et bien sûr coder !</h5>
                                <p className="aboutmeContainer__passionsTxt">J'aime coder dans mon temps libre, que ce soit des petites choses sans trop d'intérêt, ou des projets persos plus conséquents.</p>
                            </div>   
                        </div>
                </section>
            </div>
        </div>
    );
};

export default Aboutme;