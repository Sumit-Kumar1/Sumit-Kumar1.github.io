import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-10 text-accent text-center justify-center">
      <Link href="/" className="btn btn-ghost text-2xl link link-hover">Home</Link>
      <Link href="/skills" className="btn btn-ghost text-2xl link link-hover">Skills</Link>
      <Link href="/projects" className="btn btn-ghost text-2xl link link-hover">Projects</Link>
      <Link href="/contact" className="btn btn-ghost text-2xl link link-hover">Contact Me</Link>
    </nav>
  );
}
