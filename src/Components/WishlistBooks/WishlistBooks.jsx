// import { useEffect, useState } from "react";
// import WishlistBook from "./WishlistBook/WishlistBook";
// import {  getBooksWishlist  } from "../Utilities";
// // import {   getBooksWishlist } from "../Utilities/wishlist";

// export default function WishlistBooks() {

//     const [books, setBooks] = useState([])

//     useEffect(() => {
//         const stored = getBooksWishlist();
//         setBooks(stored)
//     }, [])


//     return (
//         <div>

//             {
//                 books.map((readBook) => <WishlistBook key={readBook.id} readBook={readBook}></WishlistBook>)
//             }


//         </div>
//     )
// }
