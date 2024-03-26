import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <div className="navbar container mx-auto   mt-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-500 rounded-box w-52">
                         <NavLink to={'/'}>Home</NavLink > 
                        <NavLink to={'/listedBooks'} className={({isActive}) => isActive ? "font-semibold   bg-green-600" : "font-semibold  "}>Listed Books </NavLink > 
                         <NavLink to={'/pagesToRead'} className={({isActive}) => isActive ? "font-semibold   bg-green-600" : "font-semibold  "}>Pages to Read</NavLink > 
                    </ul>
                </div>
                <NavLink to={'/'} className="text-[#131313] font-bold text-2xl">Book Vibe</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="  px-1 text-center">
                     <NavLink to={'/'} className={({isActive}) => isActive ? "font-semibold border border-[#23BE0A] text-[#23BE0A]  rounded-md p-2 ml-4 hover:bg-[#23BE0A] hover:text-white" : "font-normal text[#131313]  ml-4" }>Home</NavLink > 
                     <NavLink to={'/listedBooks'} className={({isActive}) => isActive ? "font-semibold border border-[#23BE0A] text-[#23BE0A]  rounded-md p-2 ml-4" : "font-normal text[#131313]  ml-4"}>Listed Books </NavLink > 
                     <NavLink to={'/pagesToRead'} className={({isActive}) => isActive ? "font-semibold border border-[#23BE0A] text-[#23BE0A]  rounded-md p-2 ml-4" : "font-normal text[#131313]  ml-4"}>Pages to Read</NavLink > 
                </ul>
            </div>
            <div className="navbar-end ">
                <NavLink to={'/'} className="btn bg-[#23BE0A]   px-[25px] text-white rounded-lg  font-semibold   hover:text-black hover:bg-transparent hover:border-[#FF4240] text-[18px] ">Sign In</NavLink >
                <NavLink to={'/'} className="btn bg-[#59C6D2]   px-[25px] text-white rounded-lg  font-semibold    hover:text-black hover:bg-transparent hover:border-[#FF4240] text-[18px] ml-4">Sign Up</NavLink >
            </div>

        </div>
    )
}
