import Head from "next/head";
import Image from "next/image";

import myImg from "../public/animated.png"

export default function Home() {
  return (
    <div className="ml-20 p-5">
      <Head>
        <title>My Resume Website</title>
        <meta
          name="description"
          content="My Resume website created using Next JS and Tailwind CSS"
        />
      </Head>
      <div className="flex mobile:flex-col-reverse md:flex-row mobile:gap-0 justify-center text-center">
            <div className="flex-1 m-auto justify-center items-center flex flex-col">
                <p className="text-accent text-2xl">HELLO!</p>
                <p className="py-5 text-4xl font-bold">I AM SUMIT KUMAR</p>
                <p className="font-thin text-sm">I&apos;m an experienced software engineer who constantly seeks out innovative solutions to everyday problems. In my seven years in this industry, I&apos;ve honed my analytical thinking and collaboration skills, and I love working with a team.</p>
                <button className="btn btn-accent btn-outline mt-5">Download Resume</button>
            </div>
            <div className="m-auto">
                <Image src={myImg} width={550} height={550} alt={"My Pic"}></Image>
            </div>
        </div>
    </div>
  );
}
