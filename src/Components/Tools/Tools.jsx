// import React from 'react';

import { use } from "react";

const Tools = ({ toolPromise }) => {
    const tools = use(toolPromise);
    console.log(tools);
    return (
        <div className="flex flex-col justify-center">
            <div className="pt-8 pb-6">
                <h2 className="font-extrabold text-4xl text-center pb-2">Premium Digital Tools</h2>
                <p className="font-semibold text-lg text-gray-400 text-center">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>
            <div>
                <button>Products</button>
                <button>Cart (2)</button>

            </div>

            <div className="w-11/12 mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 mt-7">

                    {
                        tools.map(tool =>

                            <div className="">
                                
                                <div className="card bg-base-100 shadow-lg border-2 border-gray-200">

                                    <div className="card-body relative space-y-3">
                                        <span className="badge badge-xs badge-warning absolute top-5 right-5 p-2 text-md font-semibold">{tool.tag}</span>

                                        <div className="w-23 h-23 p-1 bg-gray-100 rounded-full mt-4">

                                            <img className="object-cover rounded-full w-full h-full" src={tool.image} alt="" />

                                        </div>

                                        <h2 className="text-4xl pt-2 font-bold">{tool.name}</h2>

                                        <p className="text-lg text-gray-400">{tool.description}</p>

                                        <span className="text-xl font-semibold text-gray-400"><span className="font-extrabold text-3xl text-black">${tool.price}</span>/{tool.period}</span>

                                        <ul className="mt-6 flex flex-col gap-2 text-xs">

                                            {
                                                tool.features.map ((features, index) => (

                                            <li key={index} className="flex gap-1 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>

                                                <span className="text-lg text-gray-500">{features}</span>
                                            </li>

                                                ))
                                            }  
                                            
                                        </ul>
                                        <div className="mt-6">
                                            <button className="btn btn-primary btn-block">Buy Now</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    }



                </div>

            </div>

        </div>
    );
};

export default Tools;