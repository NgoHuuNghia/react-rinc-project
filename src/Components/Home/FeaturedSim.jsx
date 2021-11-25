import React from 'react'

const FeaturedSim = ({name, background_image}) => {
    return (
        <a href='/' className='speical-card-btn'>
            <img src={background_image} alt={name} />
            <div>
                <p>220.000d</p>
            </div>
        </a>
    )
}

export default FeaturedSim
