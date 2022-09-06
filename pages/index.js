import Head from 'next/head';
import Navbar from '../components/navbar';
import ContactMe from "../components/contactMe";
import Skill from "../components/skills";

export default function Home() {
  return (
    <div className={"h-screen dark:bg-[#282828] bg-white dark:text-white justify-center align-middle justify-items-center"}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My Resume website created using Next JS and Tailwind CSS" />
      </Head>

        <Navbar/>
        <main className={"box-content border-2 justify-items-center m-24 py-6 px-24 justify-items-center"}>
            <p className={"fixed bottom-1/2 -rotate-90 font-thin right-0 z-10"}>@Copyrights to Sumit Kumar</p>
          <ContactMe/>
          {/*<Skill/>*/}
      </main>
    </div>
  )
}
