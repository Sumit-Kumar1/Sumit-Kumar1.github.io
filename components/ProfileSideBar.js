import Link from "next/link";
import { SiCodechef, SiKaggle, SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ProfileSideBar() {
    return (
        <ul className={"fixed z-10 flex flex-col hover:cursor-pointer left-[1%] gap-7 h-full justify-items-center -bottom-[37%]"}>
            <li>
                <Link href="https://www.kaggle.com/sumit1kumar"><SiKaggle size={32}></SiKaggle></Link>
            </li>
            <li>
                <Link href="https://github.com/Sumit-Kumar1" ><FaGithub size={25}></FaGithub></Link>
            </li>
            <li >
                <Link href="https://www.linkedin.com/in/sumit1kumar/"><FaLinkedin size={25}></FaLinkedin></Link>
            </li>
            <li>
                <Link href={"https://leetcode.com/Dark_Blood/"}><SiLeetcode size={25}></SiLeetcode></Link>
            </li>
            <li>
                <Link href={"https://www.codechef.com/users/dark_blood"}><SiCodechef size={25}></SiCodechef></Link>
            </li>
        </ul>

    );
}