import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function MainPages() {
  return (
    <div>

        <Nav></Nav>

        <Outlet></Outlet>
        <ToastContainer/> 
      
    </div>
  )
}
