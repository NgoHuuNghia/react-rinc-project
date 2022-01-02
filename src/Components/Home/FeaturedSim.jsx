import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedSim = ({name, id, background_image}) => {
    return (
        <Link to={`/Detail/${id}`} className='speical-card-btn'>
            <img src={background_image} alt={name} />
            <div>
                <p>220.000d</p>
            </div>
        </Link>
    )
}

export default FeaturedSim
