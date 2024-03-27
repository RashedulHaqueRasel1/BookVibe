import {  toast } from "react-toastify"

export const getBooks = () => {
    let books = []
    const storedBooks = localStorage.getItem('books')
    if (storedBooks) {
        books = JSON.parse(storedBooks)
    }
    return books
}



export const getBooksWishlist = () => {
    let books = []
    const storedBooks = localStorage.getItem('wishlist')
    if (storedBooks) {
        books = JSON.parse(storedBooks)
    }
    return books
}





export const saveBlog = book => {
    let books = getBooks()
    const isExist = books.find((b) => b.id === book.id)
    if (isExist) {
        return toast.error("Book Already Read!")
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('book Read  Successfully !')
 
}





export const saveBlogWishlist = book => {

 
    let bookss = getBooks()
    const isExists = bookss.find((b) => b.id === book.id)
    if (isExists) {
        return toast.error("Book Already Read!")
    }

    let books = getBooksWishlist()
    const isExist = books.find((b) => b.id === book.id)
    if (isExist) {
        return toast.error("Book Already Exit Wishlist!")
    }
    books.push(book)
    localStorage.setItem('wishlist', JSON.stringify(books))
    toast.success('book Successfully Added Wishlist !')
 
}
