import Head from 'next/head';
import Navbar from '../components/navbar';
import ProfileSideBar from "../components/ProfileSideBar";
import ContactMe from "../components/contactMe";
import Skill from "../components/skills";
import HomeMain from '../components/home';
import Projects from "../components/Projects";
import Link from "next/link";

export default function Home() {
  let clicks = 0;
  // const [click, setclick] = useState(0)
  return (
    <div className={"h-screen dark:bg-[#282828] bg-white dark:text-white justify-center align-middle justify-items-center"}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My Resume website created using Next JS and Tailwind CSS" />
      </Head>      
      <nav>
        <ul className={"flex gap-x-5 text-2xl font-light font-sans hover:cursor-pointer justify-center pt-10"}>
          <li className="hover:underline-offset-8 hover:underline hover:decoration-wavy hover:decoration-green-400 hover:font-semibold hover:decoration-1"><Link href={"./"}><a>Home</a></Link></li>
          <li className="hover:underline-offset-8 hover:underline hover:decoration-wavy hover:decoration-green-400 hover:font-semibold hover:decoration-1">Skills</li>
          <li className="hover:underline-offset-8 hover:underline hover:decoration-wavy hover:decoration-green-400 hover:font-semibold hover:decoration-1">Projects</li>
          <li className="hover:underline-offset-8 hover:underline hover:decoration-wavy hover:decoration-green-400 hover:font-semibold hover:decoration-1">Contact Me</li>
        </ul>
      </nav>
      <main className={"box-content justify-items-center m-24 py-6 px-24 dark:text-[#e8e8e8]"}>
        <ProfileSideBar />
        <p className={"fixed bottom-[47.2%] -rotate-90 z-1 -right-20 justify-items-center"}>@Copyrights to Sumit Kumar</p>
        <HomeMain />
        {/* <Skill /> */}
        {/* <ContactMe /> */}
        {/* <Projects/> */}
      </main>
    </div>
  )
}
