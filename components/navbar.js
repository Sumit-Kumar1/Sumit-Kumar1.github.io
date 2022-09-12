import React from "react";
import Link from "next/link";
import {AiFillApple} from "react-icons/ai";

function Navbar(){
    return(
        <nav className={"flex p-5 justify-center gap-20"}>
            <AiFillApple size={50} className={"hover:cursor-pointer "}/>
            <ul className={"flex gap-x-5 pt-2 text-md font-bold font-sans hover:cursor-pointer"}>
                <li><Link href={"./"}><a>Home</a></Link></li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact Me</li>
            </ul>
        </nav>
    )
}
export default Navbar;

