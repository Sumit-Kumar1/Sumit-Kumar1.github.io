import Head from 'next/head';
import Navbar from '../components/navbar';
import ContactMe from "../components/contactMe";
import SwitchTheme from "../components/switchTheme";

export default function Home() {
  return (
    <div className={"bg-[#282828] text-white h-screen"}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My Resume website created using Next JS and Tailwind CSS" />
      </Head>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
          <ContactMe/>
          <SwitchTheme className={""}/>
      </main>

      <footer>
      </footer>
    </div>
  )
}
