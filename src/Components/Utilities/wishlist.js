import {  toast } from "react-toastify"

export const getBooksWishlist = () => {
    let books = []
    const storedBooks = localStorage.getItem('wishlist')
    if (storedBooks) {
        books = JSON.parse(storedBooks)
    }
    return books
}


export const saveBlogWishlist = book => {
    let books = getBooksWishlist()
    const isExist = books.find((b) => b.id === book.id)
    if (isExist) {
        return toast.error("Book Already Exit Wishlist!")
    }
    books.push(book)
    localStorage.setItem('wishlist', JSON.stringify(books))
    toast.success('book Successfully Added Wishlist !')
 
}
