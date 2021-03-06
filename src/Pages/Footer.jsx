import React from 'react'
import { useGlobalContext } from '../context'
import { useLocation } from 'react-router-dom'

import logo from '../assets/logo/rinc-white-v2.png'

const Footer = ({}) => {
    const {closeSubmenu} = useGlobalContext()

    const location = useLocation().pathname

    return (
        <footer className={(location.toLowerCase().includes('admin')) ? 'display-none' : ''} onMouseOver={closeSubmenu}>
            <div>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <img src="https://store.akamai.steamstatic.com/public/images/v6/logo_steam_footer.png" alt="" />
                </div>
                <p>
                    © 2021 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
                    VAT included in all prices where applicable. 
                </p>
                <ul>
                    <li><a href="/">Privacy Policy</a></li> 
                    <li><a href="/">Legal</a></li>
                    <li><a href="/">Subscriber Agreement</a></li>
                    <li><a href="/">Subscriber Agreement</a></li>
                    <li><a href="/">Cookies</a></li>
                </ul>
                <ul>
                    <li><a href="/">About Valve</a></li>
                    <li><a href="/">Jobs</a></li>
                    <li><a href="/">Steamworks</a></li>
                    <li><a href="/">Steam Distribution</a></li>
                    <li><a href="/">Support</a></li>
                    <li><a href="/">Gift Cards</a></li>
                    <li><a href="/">@Rinc</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
