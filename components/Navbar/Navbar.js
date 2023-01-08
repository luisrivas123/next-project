import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <menu>
                <Link href='/'>Home</Link>
                <Link href='/about'>About Us</Link>
            </menu>
            {/* <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About Us</Link></li>
            </ul> */}
        </nav>
    )
}

export default Navbar