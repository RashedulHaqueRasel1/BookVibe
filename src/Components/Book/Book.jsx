import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";


export default function Book({ book }) {

    const { bookName, image, author, tags, category, rating, } = book;


    // console.log(book)

    return (

        <div className=" container mx-auto p-6 rounded-md gap-4   border border-red-500 card bg-cyan-100 shadow-xl">
            <img src={image} alt="" className="px-5 pt-5" />
            <div className="mt-6 mb-2">
                 <div className='flex'>
                     {
                        tags.map((tag, inx) => <h2 className='ml-3 text-[#23BE0A]' key={inx}>{tag} </h2>)
                     }
                 </div>
                <h2 className="text-2xl text-[#131313] font-bold mt-5">{bookName}</h2>
            </div>
            <p className="-mt-4 text-[#131313] font-medium text-xl">By: {author}</p>

            <div className='flex justify-between text-[#131313] font-medium text-xl'>
                <p>{category}</p>
                
                <div className='flex items-center justify-center'>
                    <p className='mr-2'>{rating}</p>
                    <FaRegStar />
                </div>
            </div>
        </div>

    )
}




Book.propTypes = {
    book: PropTypes.array
}



    //     < div className = "  justify-center  " >
    // <figure className="">
    //     <img src= alt="Book" className="rounded-xl" />
    // </figure>
//     < div className = "card-body items-center text-end " >
        
// //     <p className=''></p>
// //     <p> By: {author}</p>
// //     <div className="card-actions">
// //         <button className="btn btn-primary">Buy Now</button>
// //     </div>
// // </div>
// </div >