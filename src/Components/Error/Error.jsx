import { Link, useRouteError } from "react-router-dom";


export default function Error() {

  const error = useRouteError;
  console.log(error)

  return (
    <div>



      <div className="flex flex-col justify-center items-center mt-80">
        <h1 className="text-7xl  font-extrabold">404</h1>
        <h1 className=" text-gray-600 text-xl font-semibold mt-6 lg:text-3xl">Sorry, We Couldn't find this page </h1>
        <Link className="flex flex-col justify-center w-48 mt-6 items-center  btn bg-[#23BE0A]   px-[25px] text-white rounded-lg  font-semibold    hover:text-black hover:bg-transparent hover:border-[#FF4240] text-[18px] ">Go To Home</Link>
      </div>


    </div>
  )
}
