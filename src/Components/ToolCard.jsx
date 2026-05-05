// import React from 'react';

import { useState } from "react";

const ToolCard = ({tool, carts, setCarts}) => {

    const [isBuyNow, setIsBuyNow] = useState (false);

    const handleBuyNow = () => {
        setIsBuyNow (true);
        setCarts ([...carts, tool]);
    }

    return (
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
                            tool.features.map((features, index) => (

                                <li key={index} className="flex gap-1 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>

                                    <span className="text-lg text-gray-500">{features}</span>
                                </li>

                            ))
                        }

                    </ul>
                    <div className="mt-6">
                        <button onClick={handleBuyNow} className="btn btn-primary btn-block">
                            {isBuyNow ? "Added to cart" : "Buy Now"}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToolCard;