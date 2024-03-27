import { Link } from "react-router-dom";
import { LiaSortDownSolid } from "react-icons/lia";


export default function Sort() {
    return (
        <div>
 
            <Link className="dropdown dropdown-bottom ">
                <div tabIndex={0} role="button" className="btn m-1  bg-[#23BE0A] px-[25px] text-white rounded-lg  font-semibold   hover:text-black hover:bg-transparent hover:border-[#FF4240] text-[18px] ">Sort By  <LiaSortDownSolid className="text-2xl"/></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Rating</a></li>
                    <li><a>Number of pages</a></li>
                    <li><a>Publisher year</a></li>
                </ul>
            </Link>

        </div>
    )
}
