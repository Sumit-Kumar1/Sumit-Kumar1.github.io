import Head from 'next/head';
import Navbar from '../components/navbar';
import ProfileSideBar from "../components/ProfileSideBar";
import ContactMe from "../components/contactMe";
import Skill from "../components/skills";
import HomeMain from '../components/home';
import Projects from "../components/Projects";
import { SiCodechef, SiKaggle, SiLeetcode } from "react-icons/si";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className={"h-screen dark:bg-[#282828] bg-white dark:text-white justify-center align-middle justify-items-center"}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My Resume website created using Next JS and Tailwind CSS" />
      </Head>
      <ProfileSideBar />
      <Navbar />
      <main className={"box-content justify-items-center m-24 py-6 px-24 dark:text-[#e8e8e8]"}>

        <p className={"fixed bottom-1/2 -rotate-90 font-thin z-1 -right-20"}>@Copyrights to Sumit Kumar</p>
        {/*<HomeMain/>*/}
        <Skill />
        {/* <ContactMe />*/}
        {/*  <Projects/>*/}
      </main>
    </div>
  )
}
