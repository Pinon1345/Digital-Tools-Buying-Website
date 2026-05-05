// import React from 'react';

import Ellipse from "../../assets/others/Ellipse 1.png"
import Profile from "../../assets/others/user.png"
import Package from "../../assets/others/package.png"
import Rocket from "../../assets/others/rocket.png"


const GetStarted = () => {
    return (
        <div className="w-11/12 mx-auto bg-[#F9FAFC] border-none rounded-md mb-8 space-y-3">
            <h2 className="font-extrabold text-4xl text-center pt-15">Get Started in 3 Steps</h2>
            <p className="font-semibold text-lg text-gray-400 text-center">Start using premium digital tools in minutes, not hours.</p>

            <div className="flex justify-center pt-7 pb-6">

            <div className="grid sm:grid-cols-1 lg:grid-cols-3 contain-content gap-6 pb-10">
                <div className="card bg-base-100 w-96 shadow-sm space-y-6">
                    <div className="relative w-full h-full pb-12">
                        <div className="text-white font-semibold text-sm rounded-full p-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-2 h-2 flex items-center justify-center absolute top-6 right-6">01</div>
                    </div>

                    <div>
                        <div className="flex flex-col items-center justify-center relative">
                            <img className="w-40 h-40 object-contain" src={Ellipse} alt="" />
                            <img className="w-23 h-23 object-cover -mt-32" src={Profile} alt="" />
                        </div>

                    </div>

                    <div className="card-body text-center">
                        <h2 className="font-bold text-3xl pt-3">Create Account</h2>
                        <p className="font-semibold text-gray-400 pb-7 pt-2">Sign up for free in seconds. No credit card <br /> required to get started.</p>
                    </div>
                </div>

                <div className="card bg-base-100 w-96 shadow-sm space-y-6">
                    <div className="relative w-full h-full pb-12">
                        <div className="text-white font-semibold text-sm rounded-full p-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-2 h-2 flex items-center justify-center absolute top-6 right-6">02</div>
                    </div>

                    <div>
                        <div className="flex flex-col items-center justify-center relative">
                            <img className="w-40 h-40 object-contain" src={Ellipse} alt="" />
                            <img className="w-23 h-23 object-cover -mt-32" src={Package} alt="" />
                        </div>

                    </div>

                    <div className="card-body text-center">
                        <h2 className="font-bold text-3xl pt-3">Choose Products</h2>
                        <p className="font-semibold text-gray-400 pb-7 pt-2">Browse our catalog and select the tools <br /> that fit your needs.</p>
                    </div>
                </div>

                <div className="card bg-base-100 w-96 shadow-sm space-y-6">
                    <div className="relative w-full h-full pb-12">
                        <div className="text-white font-semibold text-sm rounded-full p-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-2 h-2 flex items-center justify-center absolute top-6 right-6">03</div>
                    </div>

                    <div>
                        <div className="flex flex-col items-center justify-center relative">
                            <img className="w-40 h-40 object-contain" src={Ellipse} alt="" />
                            <img className="w-23 h-23 object-cover -mt-32" src={Rocket} alt="" />
                        </div>

                    </div>

                    <div className="card-body text-center">
                        <h2 className="font-bold text-3xl pt-3">Start Creating</h2>
                        <p className="font-semibold text-gray-400 pb-7 pt-2">Download and start using your premium <br /> tools immediately.</p>
                    </div>
                </div>

            </div>

            </div>


        </div>
    );
};

export default GetStarted;