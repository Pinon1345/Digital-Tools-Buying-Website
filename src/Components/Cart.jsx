// import React from 'react';

const Cart = ({ carts }) => {
    console.log(carts)

    const totalPrice = carts.reduce ((sum, item) => sum + item.price, 0);


    return (
        <div className="flex flex-col justify-center">
            <div className="pt-8 pb-6">
                <h2 className="font-extrabold text-4xl text-center pb-2">Premium Digital Tools</h2>
                <p className="font-semibold text-lg text-gray-400 text-center">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>

            <div className="border border-gray-200 rounded-xl w-11/12 mx-auto mt-3 mb-10 p-4 shadow-xl">
                <h2 className="text-2xl font-black">Your Cart</h2>
                <div>

                </div>

                {
                    carts.map(item =>
                        <div key={item.id}>
                            <div className="bg-[#F9FAFC] rounded-xl p-4 flex justify-between items-center mt-4 mb-6 shadow">

                                <div className="flex gap-3 items-center">
                                    <div className="w-16 h-16 p-1 bg-linear-to-r from-[#4f39f673] to-[#9614fa52] rounded-full mt-4">

                                        <img className="object-cover rounded-full w-full h-full" src={item.image} alt="" />

                                    </div>

                                    <div>
                                        <h2 className="text-2xl pt-2 font-bold">{item.name}</h2>
                                        <p className="text-lg text-gray-600">${item.price}</p>
                                    </div>
                                </div>
                                <button className="btn btn-soft btn-error">Remove</button>

                            </div>


                        </div>)
                }

                <div>
                    <div className="flex justify-between items-center gap-4 pt-6 pb-5">
                        <h2 className="font-bold text-xl text-gray-500 pl-6">Total</h2>
                        <h2 className="font-extrabold text-2xl pr-6">${totalPrice}</h2>
                    </div>
                    <button className="btn btn-primary btn-block mb-4">Proceed to Checkout</button>
                </div>

            </div>


        </div>
    );
};

export default Cart;