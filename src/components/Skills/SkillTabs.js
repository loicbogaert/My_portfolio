import React, {useState, useEffect} from 'react';


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
                        <img src="img/html.png" className="skills__img"/>
                        <h3>HTML5</h3>
                    </div>
                    <span className="bar"><span className="html"></span></span>
                </li>

                <li className="skills__li">
                    <div className="skills__no-li">
                        <img src="img/css.png" className="skills__img"/>
                        <h3>CSS3</h3>
                    </div>
                    <span className="bar"><span className="css"></span></span>
                </li>

                <li className="skills__li">
                    <div className="skills__no-li">
                        <img src="img/sass.png" className="skills__img"/>
                        <h3>SASS</h3>
                    </div>
                    <span className="bar"><span className="sass"></span></span>
                </li>

                <li className="skills__li">
                    <div className="skills__no-li">
                        <img src="img/js.png" className="skills__img"/>
                        <h3>Javascript</h3>
                    </div>
                    <span className="bar"><span className="javascript"></span></span>
                </li>

                <li className="skills__li">
                    <div className="skills__no-li">
                        <img src="img/react.png" className="skills__img"/>
                        <h3>React</h3>
                    </div>
                    <span className="bar"><span className="react"></span></span>
                </li>

                <li className="skills__li">
                    <div className="skills__no-li">
                        <img src="img/nodejs.png" className="skills__img"/>
                        <h3>NodeJS</h3>
                    </div>
                    <span className="bar"><span className="nodejs"></span></span>
                </li>
            </div>


            <div className="skills">
                <h2 className="skills__title">Base de données / frameworks / autre</h2>

                <li className="skills__li">
                    <div className="skills__no-li">
                        <img src="img/git.png" className="skills__img"/>
                        <h3>git</h3>
                    </div>
                    <span className="bar"><span className="git"></span></span>
                </li>

                <li className="skills__li">
                    <div className="skills__no-li">
                        <img src="img/sequelize.png" className="skills__img"/>
                        <h3>Sequelize</h3>
                    </div>
                    <span className="bar"><span className="express"></span></span>
                </li>

                <li className="skills__li">
                    <div className="skills__no-li">
                        <img src="img/mongodb.png" className="skills__img"/>
                        <h3>Mongodb</h3>
                    </div>
                    <span className="bar"><span className="mongodb"></span></span>
                </li>

                <li className="skills__li">
                    <div className="skills__no-li">
                        <img src="img/mongodb.png" className="skills__img"/>
                        <h3>Mongoose</h3>
                    </div>
                    <span className="bar"><span className="mongoose"></span></span>
                </li>
                
                <li className="skills__li">
                    <div className="skills__no-li">
                        <img src="img/bootstrap.png" className="skills__img"/>
                        <h3>BootsTrap</h3>
                    </div>
                    <span className="bar"><span className="bootstrap"></span></span>
                </li>

                <li className="skills__li">
                    <div className="skills__no-li">
                        <img src="img/mysql.png" className="skills__img"/>
                        <h3>MySQL</h3>
                    </div>
                    <span className="bar"><span className="mysql"></span></span>
                </li>
            </div>
        </div>
    );
};

export default SkillTabs;