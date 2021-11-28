import React from 'react'
import { useGlobalContext } from '../../context'

const TabViewer = ({name, short_screenshots, genres, id}) => {
    const { tabActives } = useGlobalContext()
    const { tabCurrent } = tabActives

    return (
        <div className={ tabCurrent === id ? 'active' : ''}>
            <div>{name}</div>
            <div>
                <p>Overall user reviews</p>
                <p><span>Positive </span>(13)</p>
            </div>
            <div>
                {genres
                    .slice(0, 3)
                    .map((item) => {
                        return <a key={item.id} href='/'>{item.name}</a>
                })}
            </div>
                {short_screenshots
                    .slice(0, 4)
                    .map((item) => {
                        return <img key={item.id} src={item.image} alt={name}/>
                })}
        </div>
    )
}

export default TabViewer
