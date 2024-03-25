import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

export default function MainPages() {
  return (
    <div>

        <Nav></Nav>

        <Outlet></Outlet>
      
    </div>
  )
}
