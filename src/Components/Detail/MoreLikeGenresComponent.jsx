import React from 'react'
import { Link } from 'react-router-dom'

const MoreLikeGenresComponent = ({ name, id, background_image }) => {
    return (
        <Link to={`/Detail/${id}`}>
            <div>
                <div>
                    <img src={background_image} alt={name} />
                </div>
                <h4>{name}</h4>
            </div>
            <div>
                <p>-70%</p>
                <p>149.500₫</p>
            </div>
        </Link>
    )
}

export default MoreLikeGenresComponent
