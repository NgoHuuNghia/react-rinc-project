import React from 'react'
import {Link} from 'react-router-dom'
import ConsoleIcons from '../../Components/ConsoleIcons'
import { useGlobalContext } from '../../context'

const SearchesComponents = ({name, id, background_image, platforms}) => {
    const {ToTop} = useGlobalContext()

    return (
        <Link to={`/Detail/${id}`} onClick={() => ToTop()} >
            <img src={background_image} alt="" />
            <div>
                <h4>{name}</h4>
                <div>
                    <div>
                        <div>-91%</div>
                        <div>
                            <span>588.000d</span>
                            <p>134.000d</p>
                        </div>
                    </div>
                    <ConsoleIcons platforms={platforms}/>
                </div>
            </div>
        </Link>
    )
}

export default SearchesComponents
