import React from 'react'
import { Link } from 'gatsby'
import './header.scss'

const Header = () => {
    return (
        <header>
            <h1>Swagman James</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contacts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
