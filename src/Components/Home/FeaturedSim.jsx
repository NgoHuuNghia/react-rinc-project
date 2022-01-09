import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'

const FeaturedSim = ({name, id, background_image}) => {
    const { ToTop } = useGlobalContext()

    return (
        <Link to={`/Detail/${id}`} onClick={() => ToTop()} className='speical-card-btn'>
            <img src={background_image} alt={name} />
            <div>
                <p>220.000d</p>
            </div>
        </Link>
    )
}

export default FeaturedSim
