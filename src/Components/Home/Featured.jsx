import React from 'react'
import { Link } from 'react-router-dom'

const Featured = ({ name, id, background_image }) => {
    return (
        <div> 
            <Link to={`/Detail/${id}`}>
                <img src={background_image} alt="" />
            </Link>
            <h5>
                {name}
            </h5>
            <div>
                <div>
                    <div>-33%</div>
                    <div>
                        <span>1.000.000d</span>
                        <p>670.000d</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
