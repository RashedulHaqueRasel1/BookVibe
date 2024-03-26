import { NavLink, useLoaderData, useParams } from "react-router-dom"

export default function BookDetails() {

    const books = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)

    const book = books.find((book) => book.id === idInt)

    console.log(book)


    const { bookName, image, author, tags, category, review, totalPages, publisher, yearOfPublishing, rating } = book;

    return (
        <section className="container mx-auto mt-8">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={image} alt="" className="object-contain w-full h-96 sm:h-80 lg:h-[550px] xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h2 className="text-5xl text-[#131313] font-bold mt-0">{bookName}</h2>
                    <p className="mt-4 text-[#131313] font-medium text-xl">By: {author}</p>
                    <p className=" text-[#131313] font-medium text-xl mt-2">{category}</p>

                    <p className="mt-6 mb-8 text-lg sm:mb-4"><span className="text-[#131313] font-medium text-[18px] mt-2">Review:</span> {review}</p>
                    <div className='flex mt-2'>
                        <span className="text-[#131313] font-medium text-[18px] ">Tag</span>
                        {
                            tags.map((tag, inx) => <h2 className='ml-3 text-[#23BE0A]' key={inx}># {tag} </h2>)
                        }
                    </div>
                    <p className="mt-3 text-[18px]">Number Of Pages: <span className="text-[#131313] font-medium text-[20px] ">{totalPages}</span></p>
                    <p className=" text-[18px] mt-2">Publisher: <span className="text-[#131313] font-medium text-[20px] ">{publisher}</span></p>
                    <p className=" text-[18px] mt-2">Year Of Publishing: <span className="text-[#131313] font-medium text-[20px] ">{yearOfPublishing}</span></p>
                    <p className=" text-[18px] mt-2">Rating: <span className="text-[#131313] font-medium text-[20px] ">{rating}</span></p>

                    <div className="flex flex-col mt-4 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">

                            <NavLink to={'/'} className="btn bg-[#23BE0A]   px-[25px] text-white rounded-lg  font-semibold   hover:text-black hover:bg-transparent hover:border-[#FF4240] text-[18px] ">Read</NavLink >
                            <NavLink to={'/'} className="btn bg-[#59C6D2]   px-[25px] text-white rounded-lg  font-semibold    hover:text-black hover:bg-transparent hover:border-[#FF4240] text-[18px] ml-4">Wishlist</NavLink >
 
                    </div>
                </div>
            </div>
        </section>
    )
}
