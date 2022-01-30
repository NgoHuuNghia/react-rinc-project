import React, {useRef, useEffect} from 'react'
import { FaSearch } from 'react-icons/fa'
import { TiCancel } from 'react-icons/ti'
import logo from '../assets/logo/rinc-white-v2.png'
import { useGlobalContext } from '../context'
import {useHistory, useLocation, Link} from 'react-router-dom'

//asss
const Header = () => {
    const {
        expandNavLink, submenu: {sublinks}, totalGamesCount,
        ToggleNavLink, ToTop, RunSearch, openSubmenu, closeSubmenu
    } = useGlobalContext()
    
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

        const displaySubmenu = (e) => {
            const page = e.target.textContent //textContent method give us the button value
            const tempBtn = e.target.getBoundingClientRect() //getBoundingClientRect method to get the location
            const center = (tempBtn.left + tempBtn.right) / 2 //getting the center with this equation
            const bottom = tempBtn.bottom //getting the bottom by minus 3 pixel

            openSubmenu(page, { center, bottom })
        }

        const handleSubmit = (e) => { //prevent the user from reloading the page when submiting
            e.preventDefault()
            history.push(`/Search`)
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
        <header className={`header ${detailHeader()}`} onMouseOver={closeSubmenu}>
            <nav>
                <div>
                    <Link to='/' onClick={() => ToTop()}><img src={logo} alt="" /></Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <FaSearch onClick={() => history.push(`/Search`)}/>
                    <input 
                        type="text" 
                        placeholder={`search over ${totalGamesCount} games...`}
                        ref={searchValue}
                        onChange={startSearch}/>
                    <TiCancel 
                        style={searchValue.current.value ? {opacity: .6, zIndex: 0} : null}
                        onClick={() => {
                            RunSearch('')
                            searchValue.current.value = ''
                        }}/>
                </form>
                <div>
                    <div 
                        className={expandNavLink ? 'open' : ''} 
                        id="bars" 
                        onClick={() => ToggleNavLink()}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul>
                        {sublinks.map((item) => {
                            return <li>
                                <Link 
                                    className='nav-links'
                                    to='/' 
                                    onClick={() => ToTop()}
                                    onMouseOver={displaySubmenu}
                                >
                                    {item.page}
                                </Link>
                            </li>
                        })}
                    </ul>
                    <img src="https://media.rawg.io/media/resize/80/-/avatars/654/6549f85d93a1b4653d6030fe6bd407bf.jpg" alt="avatar" />
                </div>
                <div ref={mobileNavContainerRef}>
                    <ul ref={mobileNavRef}>
                        {sublinks.map((item) => {
                            return <li><Link to='/' onClick={() => ToTop()}>{item.page}</Link></li>
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
