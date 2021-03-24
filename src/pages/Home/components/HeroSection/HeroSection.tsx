import React from 'react';

import SearchBox from './SearchBox';

const HeroSection = () => {
    return (
        <> 
            <div className="hero-section bg-cover bg-center md:mx-auto md:h-96 flex-col flex flex-wrap content-center justify-evenly" style={{ backgroundImage: "url(/img/ticket.jpg)" }}>
                <div className="hero-section__slogan text-center">
                    <h1 className="text-4xl lg:text-4xl leading-none font-extrabold tracking-tight text-white">Your favourite movies. Just around the corner.</h1>
                    <h2 className="text-3xl lg:text-3xl leading-none font-normal tracking-tight text-gray-300 mt-4 mb-8">Know what you want to watch. Then find out why</h2>
                </div>
                <div className="hero-section__search flex justify-center">
                    <SearchBox />
                </div>
            </div>
        </>
    )
};

export default HeroSection;