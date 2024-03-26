import { FaRegFileAlt } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function WishlistBook({readBook})  {

    console.log(readBook)

    const { bookName, image, author, tags, category, review, totalPages, publisher, yearOfPublishing, rating } = readBook;


    return (
        <div>


            <div className="grid grid-cols-12 gap-6 lg:p-5  mt-6 border   border-red-700">


                <div className="col-span-12   ">

                    <div className="lg:flex  ">
                        <div className="">
                            <img src={image} className="w-full h-full lg:w-[200px] lg:h-[190px]" alt="" />
                        </div>
                        <div className="ml-10">
                            <h1 className="text-3xl text-[#131313] font-bold">{bookName}</h1>
                            <p className="mt-2  text-[#131313] font-normal text-xl">By: <span className="text-[#131313] font-medium text-[20px] ">{author}</span></p>

                            <div className="flex items-center justify-center">
                                <div className='flex mt-2'>
                                    <span className="text-[#131313] font-medium text-[18px] ">Tag</span>
                                    {
                                        tags.map((tag, inx) => <h2 className='ml-3 text-[#23BE0A]' key={inx}># {tag} </h2>)
                                    }
                                </div>

                                <div className="flex items-center justify-center">
                                    <IoLocationOutline className="text-xl ml-4"></IoLocationOutline>
                                    <p className=" text-[18px] ml-2">Year Of Publishing: <span className="text-[#131313] font-medium text-[20px] ">{yearOfPublishing}</span></p>
                                </div>

                            </div>

                            <div className="flex items-center mt-2">
                                <IoMdContacts className="" />
                                <p className="ml-2">Publisher: <span className="text-[#131313] font-medium text-[16px] ">{publisher}</span></p>

                                <div className="flex items-center ml-6">
                                    <FaRegFileAlt ></FaRegFileAlt>
                                    <p className="ml-2">Page: <span className="text-[#131313] font-medium text-[16px] ">{totalPages}</span></p>
                                </div> 
                            </div>

                            <div className="flex mt-7">
                                <p className="text-[#328EFF] mt-3">Category: <span className="text-[#328EFF]  font-medium text-[16px] ">{category}</span></p>
                                <p className="ml-8 mt-3">Rating: <span className="text-[#131313] font-medium text-[16px] ">{rating}</span></p>
                                <Link to={''} className="btn bg-[#23BE0A]   px-[25px] text-white rounded-lg  font-semibold    hover:text-black hover:bg-transparent hover:border-[#FF4240] text-[18px] ml-4">View Details</Link>
                            </div>




                        </div>
                    </div>


                </div>
            </div>


        </div>
    )
}
