import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {SiKaggle, SiLeetcode, SiCodechef} from "react-icons/si";
import {AiFillApple} from "react-icons/ai";

function Navbar(){
    return(
        <nav className={"pt-5 flex justify-around"}>
            <AiFillApple size={50}/>
            <ul className={"flex gap-x-5 pt-2 text-xl font-light font-sans"}>
                <li >Home</li>
                <li >Skills</li>
                <li >Projects</li>
                <li >Contact Me</li>
            </ul>
            <ul className={"flex gap-4 pt-2"}>
                <li>
                    <SiKaggle size={32}></SiKaggle>
                    <Link href="https://www.kaggle.com/sumit1kumar"><a></a></Link>
                </li>
                <li>
                    <FaGithub size={25}/>
                    <Link href="https://github.com/Sumit-Kumar1"><a></a></Link>
                </li>
                <li >
                    <FaLinkedin size={25}></FaLinkedin>
                    <Link href="https://www.linkedin.com/in/sumit1kumar/"><a></a></Link>
                </li>
                <li>
                    <SiLeetcode size={25}></SiLeetcode>
                    <Link href={"https://leetcode.com/Dark_Blood/"}><a></a></Link>
                </li>
                <li>
                    <SiCodechef size={25}></SiCodechef>
                    <Link href={"https://www.codechef.com/users/dark_blood"}><a></a></Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;

