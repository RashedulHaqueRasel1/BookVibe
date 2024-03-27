import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPages from './Components/MainPages/MainPages';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import BookDetails from './Components/BookDetails/BookDetails';
import Error from './Components/Error/Error';





const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPages></MainPages>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('data.json')

      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pagesToRead',
        element: <PagesToRead></PagesToRead>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
