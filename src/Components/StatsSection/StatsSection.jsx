// import React from 'react';

const StatsSection = () => {
    return (
        <div className="mx-auto mb-8 mt-4">
            <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-8">
                <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-7 place-items-center">

                    <div className="flex flex-col items-center text-white ">
                        <h2 className="font-bold text-4xl">50K+</h2>
                        <p className="text-lg">Active Users</p>
                    </div>
                    <div className="flex flex-col items-center text-white border-l border-r px-35 border-white/20">
                        <h2 className="font-bold text-4xl">200+</h2>
                        <p className="text-lg">Premium Tools</p>
                    </div>
                    <div className="flex flex-col items-center text-white">
                        <h2 className="font-bold text-4xl">4.9</h2>
                        <p className="text-lg">Rating</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default StatsSection;