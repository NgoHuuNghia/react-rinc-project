import React from 'react'
import { FaWindows } from 'react-icons/fa'
import { useGlobalContext } from '../../context'

const Tabs = ({toggle, name, background_image, genres, id}) => {
    const { hoverTabItem, tabActives } = useGlobalContext()
    const { tabCurrent } = tabActives

    return (
        <a 
            href='/' 
            className={ tabCurrent === id ? 'tab-item active' : 'tab-item'}
            onMouseEnter={() => hoverTabItem(id, toggle)}
        >
            <img src={background_image} alt="" />
            <div>
                <div>
                    <h4>{name}</h4>
                    <i><FaWindows /></i>
                    <small>
                        {genres
                            .slice(0, 3)
                            .map((item, index, array) => {
                                if( index === array.length - 1){
                                    return item.name
                                } else return item.name + ', ' 
                        })}
                    </small>
                </div>
                <div>
                    <div>-10%</div>
                    <div>
                        <p>495.000d</p>
                        <p>445.500d</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Tabs
