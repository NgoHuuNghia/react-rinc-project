import React, {useState, useEffect, useRef} from 'react'
import { useGlobalContext } from '../../context'

const Submenu = () => {
    const { 
        submenu: {submenuOpen, location, subpage: {page, links}},
    } = useGlobalContext()
    //const [columns, setColumns] = useState('col-2') // in case u wana have col 
    const subContainer = useRef(null)

    useEffect(() => {
        //setColumns('col-2') //reset to avoid bug
        const submenu = subContainer.current
        const { center, bottom } = location
        submenu.style.left = `${center}px` //positioning with relative in css
        submenu.style.top = `${bottom}px`
    
        // if(links.length === 3){ //change to different col already defined in the css
        //     setColumns('col-3')
        // }
        // if(links.length > 3){
        //     setColumns('col-4')
        // }
    
    }, [location, links])

    return (
        <div 
            className={`submenu ${(submenuOpen) ? 'open' : ''}`}
            ref={subContainer}
        >
            <ul>
                {links.map((item) => {return <li><a href="/">{item.label}</a></li>})}
            </ul>
        </div>
    )
}

export default Submenu
