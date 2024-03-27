import { useEffect, useState } from "react";
import { getBooks } from "../Utilities";
import ReadBook from "./ReadBook/ReadBook";

export default function ReadBooks() {


    const [books, setBooks] = useState([])

    useEffect(() => {
        const stored = getBooks();
        setBooks(stored)
    }, [])


    // console.log(books)

 


    return (
        <div>
 
            {
                books.map((readBook) => <ReadBook key={readBook.id} readBook={readBook}></ReadBook>)
            }


        </div>
    )
}
