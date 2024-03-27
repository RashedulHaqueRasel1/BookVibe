// import {  toast } from "react-toastify"
// // import { getBooks } from "."

// export const getBooksWishlist = () => {
//     let books = []
//     const storedBooks = localStorage.getItem('wishlist')
//     if (storedBooks) {
//         books = JSON.parse(storedBooks)
//     }
//     return books
// }


// export const saveBlogWishlist = book => {

//     let bookss = getBooksWishlist()
//     const isExists = bookss.find((b) => b.id === book.id)
//     if (isExists) {
//         return toast.error("Book Already Read!")
//     }

//     let books = getBooksWishlist()
//     const isExist = books.find((b) => b.id === book.id)
//     if (isExist) {
//         return toast.error("Book Already Exit Wishlist!")
//     }
//     books.push(book)
//     localStorage.setItem('wishlist', JSON.stringify(books))
//     toast.success('book Successfully Added Wishlist !')
 
// }
