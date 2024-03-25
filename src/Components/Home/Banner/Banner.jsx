import { Link } from "react-router-dom";

export default function Banner() {
    return (

        <section className="mt-12">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center   text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-3xl lg:text-6xl font-semibold  mb-12">Books to freshen up your bookshelf</h1>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        
                    <Link to={'/listedBooks'} className="btn bg-[#23BE0A]   px-[25px] text-white rounded-lg  font-semibold  text-xl hover:text-black hover:bg-transparent hover:border-[#FF4240] text-[18px] ">View The List</Link >
 
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://i.ibb.co/mCHKxM5/434218943-1055034955587932-7385012363321176664-n.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>

    )
}
 