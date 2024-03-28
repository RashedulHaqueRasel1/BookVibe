
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import { getBooks, getBooksWishlist } from '../Utilities';
import { LiaSortDownSolid } from 'react-icons/lia';
import ReadBook from "../ReadBooks/ReadBook/ReadBook";
import WishlistBook from '../WishlistBooks/WishlistBook/WishlistBook';



export default function ListedBooks() {


  const [booksRead, setBooksRead] = useState([])

  const [bookSort, setBookSort] = useState([])


  // ReadPage Load data
  useEffect(() => {
    const stored = getBooks();
    setBooksRead(stored)
    setBookSort(stored)
  }, [])



  // Wishlist Load data
  const [books, setBooks] = useState([])

  useEffect(() => {
    const stored = getBooksWishlist();
    setBooks(stored)
  }, [])


  // console.log(books)


  const handleSortBtn = (filter) => {
  
      if (filter === 'rating') {
          booksRead.sort((a,b) => b.rating - a.rating);
          setBookSort([...booksRead])
      }
      else if (filter === 'totalPages') {
        booksRead.sort((a,b) => b.totalPages - a.totalPages);
          setBookSort([...booksRead])
      }
      else if (filter === 'yearOfPublishing') {
        booksRead.sort((a,b) => b.yearOfPublishing - a.yearOfPublishing);
          setBookSort([...booksRead])
      }
      return booksRead
    

  }



  return (
    <div className="container mx-auto">


      <h1 className="text-4xl font-bold text-[#131313] text-center mt-14">Books</h1>

      <div className="text-center mt-8">

        <div className="dropdown dropdown-bottom ">
          <div tabIndex={0} role="button" className="btn m-1  bg-[#23BE0A] px-[25px] text-white rounded-lg  font-semibold   hover:text-black hover:bg-transparent hover:border-[#FF4240] text-[18px] ">Sort By  <LiaSortDownSolid className="text-2xl" /></div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li onClick={() => handleSortBtn('rating')}><a>Rating</a></li>
            <li onClick={() => handleSortBtn('totalPages')}><a>Number of pages</a></li>
            <li onClick={() => handleSortBtn('yearOfPublishing')}><a>Publisher year</a></li>
          </ul>
        </div>

      </div>

      <Tabs>
        <TabList className={`font-medium text-xl`}>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {/* ReadBook Tab*/}
          {
            bookSort.map((readBook) => <ReadBook key={readBook.id} readBook={readBook} ></ReadBook>)
          }
        </TabPanel>
        <TabPanel>

          {/* WishList Books Tab*/}
          {
            books.map((readBook) => <WishlistBook key={readBook.id} readBook={readBook}></WishlistBook>)
          }

        </TabPanel>
      </Tabs>


    </div>
  )
}
