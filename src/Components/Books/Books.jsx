import { useEffect, useState } from "react"
import Book from "../Book/Book";

export default function Books() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(books => setBooks(books))
    }, [])



    // console.log(books)



    return (
        <div>

            <h1 className="text-4xl font-bold text-[#131313] text-center mt-28">Books</h1>

            <div className="grid justify-center items-center mt-10 grid-cols-1 gap-24 sm:grid-cols-2 lg:grid-cols-3">
                {
                    books.map((book) => <Book key={book.id} book={book}></Book>)
                }
            </div>

        </div>
    )
}
