import { Link, useRouteError } from "react-router-dom";
 

export default function Error() {

    const error = useRouteError;
    console.log(error)

  return (
    <div>


        <h1 className="flex flex-col justify-center items-center mt-96 text-gray-600 text-xl lg:text-3xl">Error! Pages Not Found </h1>
        <Link className="flex flex-col justify-center w-48 items-center mt-7 btn bg-[#23BE0A]   px-[25px] text-white rounded-lg  font-semibold ml-[850px]  hover:text-black hover:bg-transparent hover:border-[#FF4240] text-[18px] ">Go To Home</Link>
      
    </div>
  )
}
