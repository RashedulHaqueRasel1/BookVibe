import { NavLink } from "react-router-dom";
import { BsChevronBarDown } from "react-icons/bs";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from "../ReadBooks/ReadBooks";
import WishlistBooks from "../WishlistBooks/WishlistBooks";


export default function ListedBooks() {
  return (
    <div className="container mx-auto">


      <h1 className="text-4xl font-bold text-[#131313] text-center mt-20">Books</h1>
      <div className="text-center mt-8">
        <NavLink to={'/'} className="btn bg-[#23BE0A] px-[25px] text-white rounded-lg  font-semibold   hover:text-black hover:bg-transparent hover:border-[#FF4240] text-[18px] ">Sort By <BsChevronBarDown className="text-2xl" /></NavLink >
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1">Sort By  </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>

      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ReadBooks></ReadBooks>
        </TabPanel>
        <TabPanel>
          <WishlistBooks></WishlistBooks>
        </TabPanel>
      </Tabs>


    </div>
  )
}
