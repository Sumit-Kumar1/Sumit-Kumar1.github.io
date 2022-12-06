import { useState } from "react";
import Head from "next/head";
import ProfileSideBar from "../components/ProfileSideBar";
import ContactMe from "../components/contactMe";
import Skill from "../components/skills";
import HomeMain from "../components/home";
import Projects from "../components/Projects";

export default function Home() {
  const [click, setClick] = useState(0);
  return (
    <div
      className={
        "h-screen dark:bg-[#282828] bg-white dark:text-white justify-center align-middle justify-items-center"
      }
    >
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="My Resume website created using Next JS and Tailwind CSS"
        />
      </Head>
      <nav>
        <ul
          className={
            "flex gap-x-5 text-2xl font-light font-sans hover:cursor-pointer justify-center pt-10"
          }
        >
          <li>
            <button onClick={() => setClick(0)}>Home</button>
          </li>
          <li>
            <button onClick={() => setClick(1)}>Skills</button>
          </li>
          <li>
            <button onClick={() => setClick(2)}>Projects</button>
          </li>
          <li>
            <button onClick={() => setClick(3)}>Contact Me</button>
          </li>
        </ul>
      </nav>
      <main
        className={
          "box-content justify-items-center m-24 py-6 px-24 dark:text-[#e8e8e8]"
        }
      >
        <ProfileSideBar />
        <p
          className={
            "fixed bottom-[47.2%] -rotate-90 z-1 -right-20 justify-items-center"
          }
        >
          @Copyrights to Sumit Kumar (2022)
        </p>
        {/* Logically rendering component based on state of click count */}
        {click == 0 ? (
          <HomeMain></HomeMain>
        ) : click == 1 ? (
          <Skill></Skill>
        ) : click == 2 ? (
          <Projects></Projects>
        ) : click == 3 ? (
          <ContactMe></ContactMe>
        ) : (
          <HomeMain></HomeMain>
        )}
      </main>
    </div>
  );
}
