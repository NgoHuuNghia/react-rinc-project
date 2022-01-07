import React from 'react'
import {FaPlaystation, FaWindows, FaXbox} from 'react-icons/fa'

const DetailIConsoleIcons = ({platforms}) => {
    let playstationIcon = false, xboxIcon = false, windowIcon = false
    platforms.forEach((item) => {
        if(item.platform.slug === 'playstation5' || item.platform.slug === 'playstation4'){playstationIcon = true}
        if(item.platform.slug === 'xbox-series-x' || item.platform.slug === 'xbox-one'){xboxIcon = true}
        if(item.platform.slug === 'pc'){windowIcon = true}
    })

    return (
        <div className='consoles'>
            {playstationIcon ? <FaPlaystation /> : null}
            {xboxIcon ? <FaXbox /> : null}
            {windowIcon ? <FaWindows /> : null}
        </div>
    )
}

export default DetailIConsoleIcons
