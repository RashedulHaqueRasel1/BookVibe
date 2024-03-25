import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="hero container mx-auto mt-14">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://i.ibb.co/mCHKxM5/434218943-1055034955587932-7385012363321176664-n.jpg" className="  rounded-lg shadow-2xl" />
        <div className="mr-96">
          <h1 className="text-6xl font-semibold  mb-12">Books to freshen up your bookshelf</h1>
          <Link to={'/listedBooks'} className="btn bg-[#23BE0A]   px-[25px] text-white rounded-lg  font-semibold  text-xl hover:text-black hover:bg-transparent hover:border-[#FF4240] text-[18px] ">View The List</Link >
        </div>
      </div>

    </div>
  )
}
