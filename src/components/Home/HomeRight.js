import React from 'react';
import {Link} from 'react-scroll';

// images
import html from './home_img/html.png';
import css from './home_img/css.png';
import js from './home_img/js.png';
import react from './home_img/react.png';
import sass from './home_img/sass.png';


const HomeRight = () => {
    return (
        <div className="GreenBG">  
            <div className="type-text-container">
                <h1 className="type-text"><span>Loïc Bogaert</span></h1>
                <h2 className="type-text2"><span>Développeur web</span></h2>
            </div>
            <div className="languages">
                <div className="languages__Container">
                    <img alt="html logo" className="languages__img" src={html}/>
                    <p className="languages__text">html</p>
                </div>

                <div className="languages__Container">
                    <img alt="css logo" className="languages__img" src={css}/>
                    <p className="languages__text">css</p>
                </div>

                <div className="languages__Container">
                    <img alt="javascript logo" className="languages__img" src={js}/>
                    <p className="languages__text">js</p>
                </div>

                <div className="languages__Container">
                    <img alt="react logo" className="languages__img" src={react}/>
                    <p className="languages__text">react</p>
                    
                </div>

                <div className="languages__Container">
                    <img alt="sass logo" className="languages__img" src={sass}/>
                    <p className="languages__text">sass</p>
                </div>
            </div>
            <div className="social_media">
                <div className="social_media__container">
                    <p className="social_media__github"><a target="_blank" rel="noreferrer" href="https://github.com/loicbogaert"><i className="fab fa-github"></i></a></p>
                    <p className="social_media__txt">github</p>
                </div>
                <div className="social_media__container">
                    <p className="social_media__linkedin"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lo%C3%AFc-bogaert-057919199/"><i className="fab fa-linkedin"></i></a></p>
                    <p className="social_media__txt">linkedin</p> 
                </div>
            </div>
            <div className="arrowContainer">
                <Link activeClass="active" to="portfolio" spy={true} smooth={true}><i className="fas fa-arrow-down arrow"></i></Link>
            </div>
        </div>
    );
};

export default HomeRight;