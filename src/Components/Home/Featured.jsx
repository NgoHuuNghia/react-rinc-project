import React from 'react'

const Featured = ({ name, background_image }) => {
    return (
        <div> 
            <a href="/">
                <img src={background_image} alt="" />
            </a>
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
