import React, {useRef, useEffect} from 'react'
import { FaBars, FaSearch } from 'react-icons/fa'
import logo from '../assets/logo/rinc-white-v2.png'
import { useGlobalContext } from '../context'

const Header = () => {
    const {expandNavLink, ToggleNavLink} = useGlobalContext()

    const mobileNavContainerRef = useRef(null)
    const mobileNavRef = useRef(null)

    useEffect(() => {
    const mobileNavsHeight = mobileNavRef.current.getBoundingClientRect().height //method to get elements attributes like width, height, cordinates
    if (expandNavLink) { //if showLinks state is true then change container height to equal of the links height
        mobileNavContainerRef.current.style.height = `${mobileNavsHeight}px`
    }
    else { //else default to 0px
        mobileNavContainerRef.current.style.height = '0px'
    }
    }, [expandNavLink]) //run every time showLinks state changed

    return (
        <header className={expandNavLink ? 'overlay' : ''}>
            <nav>
                <div>
                    <img src={logo} alt="" />
                </div>
                <form action="">
                    <FaSearch />
                    <input type="text" placeholder='search'/>
                </form>
                <div>
                    <div 
                        className={expandNavLink ? 'open' : ''} 
                        id="bars" 
                        onClick={() => {ToggleNavLink()}}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul>
                        <li><a href="/">Store</a></li>
                        <li><a href="/">Community</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Support</a></li>
                    </ul>
                    <img src="https://media.rawg.io/media/resize/80/-/avatars/654/6549f85d93a1b4653d6030fe6bd407bf.jpg" alt="avatar" />
                </div>
                <div ref={mobileNavContainerRef}>
                    <ul ref={mobileNavRef}>
                        <li><a href="/">Login / Signup</a></li>
                        <li><a href="/">Store</a></li>
                        <li><a href="/">Community</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Support</a></li>

                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
