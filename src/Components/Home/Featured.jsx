import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'

const Featured = ({ name, id, background_image }) => {
    const { ToTop } = useGlobalContext()

    return (
        <div> 
            <Link to={`/Detail/${id}`} onClick={() => ToTop()}>
                <img src={background_image} alt="" />
            </Link>
            <h5>
                {name}
            </h5>
            <div>
                <div className='price-container price-2col'>
                    <div className='discount-percent'>-91%</div>
                    <div className='price'>
                        <span>588.000d</span>
                        <p>134.000d</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
