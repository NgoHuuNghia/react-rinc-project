import React, {useRef, useEffect} from 'react'
import { FaSearch } from 'react-icons/fa'
import logo from '../assets/logo/rinc-white-v2.png'
import { useGlobalContext } from '../context'
import {useHistory, useLocation, Link, Redirect} from 'react-router-dom'


const Header = () => {

    const {expandNavLink, ToggleNavLink, ToTop, RunSearch} = useGlobalContext()
    const mobileNavContainerRef = useRef(null)
    const mobileNavRef = useRef(null)
    const searchValue = useRef('')
    let history = useHistory()
    const location = useLocation().pathname

        useEffect(() => {
            const mobileNavsHeight = mobileNavRef.current.getBoundingClientRect().height
            //height 0 and opacity 0
            if (expandNavLink && !location.includes('Detail')) {
                mobileNavContainerRef.current.style.height = `${mobileNavsHeight}px`
                mobileNavContainerRef.current.style.zIndex = `2`
            }
            if (expandNavLink && location.includes('Detail')) {
                mobileNavContainerRef.current.style.opacity = `1`
                mobileNavContainerRef.current.style.zIndex = `2`
            }
            else if (!expandNavLink && location.includes('Detail')){
                mobileNavContainerRef.current.style.height = `${mobileNavsHeight}px`
                mobileNavContainerRef.current.style.opacity = `0`
                mobileNavContainerRef.current.style.zIndex = `-2`
            }
            else if (!expandNavLink && !location.includes('Detail')) {
                mobileNavContainerRef.current.style.height = '0px'
            }
        }, [expandNavLink]) //run every time showLinks state changed

        const handleSubmit = (e) => { //prevent the user from reloading the page when submiting
            e.preventDefault()
            history.push('/ass')
        }
        let searchTimeout = null
        const startSearch = () => {
            clearTimeout(searchTimeout)
            searchTimeout = setTimeout(() => RunSearch(searchValue.current.value), 1000)
        }

        const detailHeader = () => {
            if (location.includes('Detail')) {
                if(expandNavLink){
                    return 'overlay'
                }
                if (!expandNavLink){
                    return 'transparent'
                }
            } else {
                if(expandNavLink){
                    return 'overlay'
                }
                if (!expandNavLink){
                    return ''
                }
            }
        }

    return (
        <header className={detailHeader()}>
            <nav>
                <div>
                    <Link to='/' onClick={() => ToTop()}><img src={logo} alt="" /></Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <FaSearch />
                    <input 
                        type="text" 
                        placeholder='search'
                        ref={searchValue}
                        onChange={startSearch}/>
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
                        <li><Link to='/' onClick={() => ToTop()}>Store</Link></li>
                        <li><Link to='/' onClick={() => ToTop()}>Community</Link></li>
                        <li><Link to='/' onClick={() => ToTop()}>About</Link></li>
                        <li><Link to='/' onClick={() => ToTop()}>Support</Link></li>
                    </ul>
                    <img src="https://media.rawg.io/media/resize/80/-/avatars/654/6549f85d93a1b4653d6030fe6bd407bf.jpg" alt="avatar" />
                </div>
                <div ref={mobileNavContainerRef}>
                    <ul ref={mobileNavRef}>
                        <li><Link to='/' onClick={() => ToTop()}>Login / Signup</Link></li>
                        <li><Link to='/' onClick={() => ToTop()}>Store</Link></li>
                        <li><Link to='/' onClick={() => ToTop()}>Community</Link></li>
                        <li><Link to='/' onClick={() => ToTop()}>About</Link></li>
                        <li><Link to='/' onClick={() => ToTop()}>Support</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
