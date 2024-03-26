import {  toast } from "react-toastify"

export const getBooks = () => {
    let books = []
    const storedBooks = localStorage.getItem('books')
    if (storedBooks) {
        books = JSON.parse(storedBooks)
    }
    return books
}


export const saveBlog = book => {
    let books = getBooks()
    const isExist = books.find((b) => b.id === book.id)
    if (isExist) {
        return toast("Book Already Exit !")
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast('book Bookmarked Successfully!')
 
}





