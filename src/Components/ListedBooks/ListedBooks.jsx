
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from "../ReadBooks/ReadBooks";
import WishlistBooks from "../WishlistBooks/WishlistBooks";
import Sort from '../Sort/Sort';


export default function ListedBooks() {
  return (
    <div className="container mx-auto">


      <h1 className="text-4xl font-bold text-[#131313] text-center mt-20">Books</h1>
      
      <div className="text-center mt-8">
        <Sort></Sort>
      </div>

      <Tabs>
        <TabList className={`font-medium text-xl`}>
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
