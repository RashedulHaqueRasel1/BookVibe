import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Book({ book }) {

    const {id, bookName, image, author, tags, category, rating, } = book;


    // console.log(bookId)

    return (

        <Link to={`/book/${id}`} className=" container mx-auto p-6 rounded-lg  gap-4   border hover:border-[#23BE0A]  card   bg-cyan-100 shadow-xl">
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
        </Link>

    )
}




Book.propTypes = {
    book: PropTypes.array
}



 