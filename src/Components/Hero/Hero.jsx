// import React from 'react';

import { IoPlayOutline } from "react-icons/io5";
import bannerImg from "../../assets/others/banner.png"
import heroBadge from "../../assets/others/hero-badge.png"

const Hero = () => {
    return (
        <div className="h-auto rounded-2xl w-11/12 mt-6 mx-auto pb-5">
            <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center justify-around gap-8">
                <div className="space-y-4">
                    <img className="sm:w-auto lg: w- [500] h-[500]" src={heroBadge} alt="Hero Badge" />
                    <h2 className="font-extrabold text-7xl">Supercharge Your <br /> Digital Workflow</h2>
                    <p className="font-semibold text-gray-500 text-lg">Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products
                    </p>
                    <div className="flex gap-3 pt-3">
                        <button className="btn btn-primary rounded-xl">Explore Products</button>
                        <button className="btn btn-outline rounded-xl"><IoPlayOutline></IoPlayOutline> Watch Demo</button>
                    </div>
                </div>
                
                <img className="shadow-xl" src={bannerImg} alt="Hero image" />

            </div>


        </div>
    );
};

export default Hero;