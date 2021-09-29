import React from 'react'
import { FaBars, FaSearch } from 'react-icons/fa'
import logo from '../assets/logo/rinc-white-v2.png'

const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <img src={logo} alt="" />
                </div>
                <form action="">
                    <FaSearch />
                    <input type="text" placeholder='search'/>
                </form>
                <div>
                    <FaBars />
                    <ul>
                        <li><a href="/">Store</a></li>
                        <li><a href="/">Community</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Support</a></li>
                    </ul>
                    <img src="https://media.rawg.io/media/resize/80/-/avatars/654/6549f85d93a1b4653d6030fe6bd407bf.jpg" alt="avatar" />
                </div>
                
            </nav>
        </header>
    )
}

export default Header
