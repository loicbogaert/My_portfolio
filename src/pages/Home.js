import React from 'react';
import Pres from '../components/Home/Pres';
import HomeRight from '../components/Home/HomeRight';

const Home = () => {
    return (
        <div id="home" className="homeContainer">
            <Pres/>
            <HomeRight/>
        </div>
    );
};

export default Home;