import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
      <nav>
        <ul
          className={
            "flex gap-x-5 text-2xl font-light font-sans hover:cursor-pointer justify-center pt-10"
          }
        >
          <li>
            <Link href="/home.js">Home</Link>
          </li>
          <li>
            <Link href="/skills.js">Skills</Link>
          </li>
          <li>
            <Link href="/projects.js">Projects</Link>
          </li>
          <li>
            <Link href="/contact.js">Contact Me</Link>
          </li>
        </ul>
      </nav>
  );
}
