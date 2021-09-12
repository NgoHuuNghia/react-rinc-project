import { FaBars } from 'react-icons/fa'
import React from 'react'

const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <i><FaBars /></i>
                    <img src="" alt="" />
                    <ul>
                        <li>Store</li>
                        <li>Community</li>
                        <li>About</li>
                        <li>Support</li>
                    </ul>
                </div>
                <form action="">
                    <input type="text" />
                </form>
            </nav>
        </header>
    )
}

export default Header
