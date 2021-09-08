import React, {useState, useEffect} from 'react';
import {Link} from 'react-scroll';

const Navigation = () => {
    const [visible, setVisible] = useState(false);

    const listenToScroll = () => {
        let heightToSetVisible = 99;
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
        <nav>
            {
                visible &&
                <ul className="menu">
                    <Link className="menu__item" activeClass="active" to="home" spy={true} smooth={true}>
                        <i class="fas fa-home"></i>
                        <p class="menu__txt">Accueil</p>
                    </Link>

                    <Link className="menu__item" activeClass="active" to="portfolio" spy={true} smooth={true}>
                        <i class="fas fa-book"></i>
                        <p class="menu__txt">Portfolio</p>
                    </Link>

                    <Link className="menu__item" activeClass="active" to="skills" spy={true} smooth={true}>
                        <i class="fas fa-cogs"></i>
                        <p class="menu__txt">Skills</p>
                    </Link>

                    <Link className="menu__item" activeClass="active" to="aboutme" spy={true} smooth={true}>
                        <i class="fas fa-address-book"></i>
                        <p class="menu__txt">A propos</p>
                    </Link>
                </ul>
            }
        </nav>
    );
};

export default Navigation;