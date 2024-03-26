
export default function ReadBooks() {
    return (
        <div>

            <div className="grid grid-cols-12 gap-6 lg:p-5 mt-6 lg:mt-16 ">

 
                <div className="col-span-12 lg:col-span-6 ">

                    <div className="lg:flex p-6 border rounded-lg ">
                        <div className="">
                            <img src="https://i.ibb.co/mCHKxM5/434218943-1055034955587932-7385012363321176664-n.jpg" className="w-full h-full lg:w-[200px] lg:h-[190px]" alt="" />
                            {/* <img className="w-full h-full lg:w-[180px] lg:h-[172px]" src="Images/5.png" alt=""> */}
                        </div>
                        <div className="ml-6 mt-6 lg:mt-0 lg:ml-5">
                            <div className="flex text-center">
                                <div><i className="fa-solid fa-star mr-2 text-yellow-500"></i></div>
                                <div>
                                    <p className="text-[#131318] mr-4 opacity-75 font-medium">5.0</p>
                                </div>
                                <div><i className="fa-regular mr-2 fa-eye"></i></div>
                                <div>
                                    <p className="text-[#131318] mr-4  opacity-75 font-medium">20</p>
                                </div>
                                <div><i className="fa-regular mr-2  fa-heart"></i></div>
                                <div>
                                    <p className="text-[#131318]  opacity-75 font-medium">200</p>
                                </div>

                            </div>
                            <div>
                                <h2 className="text-[#131318] font-extrabold text-xl mt-3">World Cup Hockey Jacket</h2>
                            </div>
                            <div>
                                <p className="text-[#131318] text-base font-medium w-10/12 mt-3 opacity-80">Virtual simulations allowing
                                    players to experience hockey.</p>
                            </div>
                            <div className=" lg:flex mt-6">
                                <h2 className="font-extrabold text-[#FF4240] text-lg">Price - $22.00</h2>
                                <div className="flex mt-4 lg:mt-0">
                                    <div> <i className="fa-solid fa-cart-shopping lg:ml-7  flex-col"></i></div>
                                    <div>
                                        <p className="text-[#131318] font-medium ml-2 opacity-70">Delivery Fee : Free</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

            </div>
            )
}
