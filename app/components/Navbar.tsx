

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">    
        <ul className="nav-links">
            <li>
                <Link href="/" className="hover:text-gray-400">Home</Link>
            </li>

            <li>
                <Link href="/about">About</Link>
            </li>       
            <li>
                <Link href="/contact">Contact</Link>
            </li> 
            <li>
                <Link href="/login">login</Link>
            </li>     
            <li>
                <Link href="/register" >regisiste</Link>
            </li>   
        </ul>
    </nav>
  );
}