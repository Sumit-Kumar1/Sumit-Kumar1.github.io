import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-10 text-accent text-center justify-center shadow-md">
      <Link href="/" className="btn btn-ghost text-2xl link link-hover">Home</Link>
      <Link href="/skills" className="btn btn-ghost text-2xl link link-hover">Skills & Projects</Link>
      <Link href="/experience" className="btn btn-ghost text-2xl link link-hover">Experience</Link>
      <Link href="/contact" className="btn btn-ghost text-2xl link link-hover">Contact Me</Link>
    </nav>
  );
}
