import React from 'react';

const Pres = () => {
    return (
        <div className="GreyBG">
            <div className="text-container">
                <h2 id="pres-1" className="pres-text">Bonjour, je m'appelle Loïc</h2>
                <h2 id="pres-2" className="pres-text">Je suis développeur web junior</h2>
                <h2 id="pres-3" className="pres-text">Merci de visiter mon portfolio !</h2>
                <h2 id="pres-4" className="pres-text">J'espère qu'il vous plaira :)</h2>
                <button id="pres-5" className="contact"><a id="contact1" href="mailto:loicbogaertvauban@gmail.com"><i class="fas fa-envelope"></i></a><a id="contact2" href="mailto:loicbogaertvauban@gmail.com">Contactez moi</a></button>
            </div>
        </div>
    );
};

export default Pres;