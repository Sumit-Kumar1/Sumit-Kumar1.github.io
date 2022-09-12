import {SiCodechef, SiKaggle, SiLeetcode} from "react-icons/si";
import Link from "next/link";
import {FaGithub, FaLinkedin} from "react-icons/fa";

export default function ProfileSideBar(){
    return (
        <ul className={"fixed z-10 flex flex-col hover:cursor-pointer left-[1%] gap-7 h-full justify-items-center -bottom-[37%]"}>
            <li>
                <Link href="https://www.kaggle.com/sumit1kumar"><a target={"_blank"}><SiKaggle size={32}></SiKaggle></a></Link>
            </li>
            <li>
                <Link href="https://github.com/Sumit-Kumar1"><a target={"_blank"}><FaGithub size={25}></FaGithub></a></Link>
            </li>
            <li >
                <Link href="https://www.linkedin.com/in/sumit1kumar/"><a target={"_blank"}><FaLinkedin size={25}></FaLinkedin></a></Link>
            </li>
            <li>
                <Link href={"https://leetcode.com/Dark_Blood/"}><a target={"_blank"}><SiLeetcode size={25}></SiLeetcode></a></Link>
            </li>
            <li>
                <Link href={"https://www.codechef.com/users/dark_blood"}><a target={"_blank"}><SiCodechef size={25}></SiCodechef></a></Link>
            </li>
        </ul>
        
    );
}