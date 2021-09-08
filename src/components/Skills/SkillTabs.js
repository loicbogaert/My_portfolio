import React, {useState, useEffect} from 'react';

// images
import html from './skills_img/html.png';
import css from './skills_img/css.png';
import js from './skills_img/js.png';
import react from './skills_img/react.png';
import sass from './skills_img/sass.png';

import nodejs from './skills_img/nodejs.png';
import git from './skills_img/git.png';
import mongodb from './skills_img/mongodb.png';
import sequelize from './skills_img/sequelize.png';
import mysql from './skills_img/mysql.png';
import bootstrap from './skills_img/bootstrap.png';



const SkillTabs = () => {

    const [visible, setVisible] = useState(false);

    const listenToScroll = () => {
        let heightToSetVisible = 950;
        const winScroll = document.body.scrollTop || 
            document.documentElement.scrollTop;
           
        if (winScroll > heightToSetVisible) {     
             setVisible(true);
        } else {
             setVisible(false);
        }  
      };
    
    useEffect(() => {   
        window.addEventListener("scroll", listenToScroll);
        return () => 
           window.removeEventListener("scroll", listenToScroll); 
      }, [])

    return (
            visible&&
        <div className="skillsContainer">
            <div className="skills">
                <h2 className="skills__title">Langages informatique</h2>
                <li className="skills__li">
                    <div className="skills__no-li">
                        <img alt="html icon" src={html} className="skills__img"/>
                        <h3>HTML5</h3>
                    </div>
                    <span className="bar"><span className="html"></span></span>
                </li>

                <li className="skills__li">
                    <div className="skills__no-li">
                        <img alt="css icon" src={css} className="skills__img"/>
                        <h3>CSS3</h3>
                    </div>
                    <span className="bar"><span className="css"></span></span>
                </li>

                <li className="skills__li">
                    <div className="skills__no-li">
                        <img alt="sass icon" src={sass} className="skills__img"/>
                        <h3>SASS</h3>
                    </div>
                    <span className="bar"><span className="sass"></span></span>
                </li>

                <li className="skills__li">
                    <div className="skills__no-li">
                        <img alt="javascript icon" src={js} className="skills__img"/>
                        <h3>Javascript</h3>
                    </div>
                    <span className="bar"><span className="javascript"></span></span>
                </li>

                <li className="skills__li">
                    <div className="skills__no-li">
                        <img alt="react icon" src={react} className="skills__img"/>
                        <h3>React</h3>
                    </div>
                    <span className="bar"><span className="react"></span></span>
                </li>

                <li className="skills__li">
                    <div className="skills__no-li">
                        <img alt="nodejs icon" src={nodejs} className="skills__img"/>
                        <h3>NodeJS</h3>
                    </div>
                    <span className="bar"><span className="nodejs"></span></span>
                </li>
            </div>


            <div className="skills">
                <h2 className="skills__title">Base de données / frameworks / autre</h2>

                <li className="skills__li">
                    <div className="skills__no-li">
                        <img alt="git icon" src={git} className="skills__img"/>
                        <h3>git</h3>
                    </div>
                    <span className="bar"><span className="git"></span></span>
                </li>

                <li className="skills__li">
                    <div className="skills__no-li">
                        <img alt="sequelize icon" src={sequelize}  className="skills__img"/>
                        <h3>Sequelize</h3>
                    </div>
                    <span className="bar"><span className="express"></span></span>
                </li>

                <li className="skills__li">
                    <div className="skills__no-li">
                        <img alt="mongodb icon" src={mongodb} className="skills__img"/>
                        <h3>Mongodb</h3>
                    </div>
                    <span className="bar"><span className="mongodb"></span></span>
                </li>

                <li className="skills__li">
                    <div className="skills__no-li">
                        <img alt="mongoose icon" src={mongodb} className="skills__img"/>
                        <h3>Mongoose</h3>
                    </div>
                    <span className="bar"><span className="mongoose"></span></span>
                </li>
                
                <li className="skills__li">
                    <div className="skills__no-li">
                        <img alt="bootstrap icon" src={bootstrap} className="skills__img"/>
                        <h3>BootsTrap</h3>
                    </div>
                    <span className="bar"><span className="bootstrap"></span></span>
                </li>

                <li className="skills__li">
                    <div className="skills__no-li">
                        <img alt="mysql icon" src={mysql} className="skills__img"/>
                        <h3>MySQL</h3>
                    </div>
                    <span className="bar"><span className="mysql"></span></span>
                </li>
            </div>
        </div>
    );
};

export default SkillTabs;