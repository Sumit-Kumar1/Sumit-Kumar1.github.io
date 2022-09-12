import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {SiKaggle, SiLeetcode, SiCodechef} from "react-icons/si";
import {AiFillApple} from "react-icons/ai";
import HomeMain from "./home";
function Navbar(){
    return(
        <nav className={"pt-5 flex justify-around"}>
            <AiFillApple size={50} className={"hover:cursor-pointer"}/>
            <ul className={"flex gap-x-5 pt-2 text-md font-bold font-sans hover:cursor-pointer"}>
                <li><Link href={""}><a>Home</a></Link></li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact Me</li>
            </ul>

        </nav>
    )
}
export default Navbar;

