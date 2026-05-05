// import React from 'react';

import { use } from "react";
import ToolCard from "../ToolCard";

const Tools = ({ toolPromise, carts, setCarts }) => {
    const tools = use(toolPromise);
    console.log(tools);


    return (
        <div className="flex flex-col justify-center">
            <div className="pt-8 pb-6">
                <h2 className="font-extrabold text-4xl text-center pb-2">Premium Digital Tools</h2>
                <p className="font-semibold text-lg text-gray-400 text-center">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>

            <div className="w-11/12 mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 mt-7">

                    {
                        tools.map(tool =>

                            <ToolCard
                                key={tool.id}
                                tool={tool}
                                carts={carts}
                                setCarts={setCarts}>
                            </ToolCard>


                        )
                    }



                </div>

            </div>

        </div>
    );
};

export default Tools;