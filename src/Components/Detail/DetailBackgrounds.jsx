import React from 'react'

const DetailBackgrounds = ({background_image, background_image_additional}) => {
    return (
        <>
            <div className='detail-background top' 
                style={{
                    backgroundImage:
                        `linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, #151515),
                        linear-gradient(to left, rgba(0, 0, 0, 0) 100%, #151515),
                        linear-gradient(to right, rgba(0, 0, 0, 0) 100%, #151515),
                        url(${background_image})`
            }}></div>
            <div className='detail-background bottom' 
                style={{
                    backgroundImage:
                        `linear-gradient(to top, rgba(0, 0, 0, 0) 60%, #151515),
                        linear-gradient(to left, rgba(0, 0, 0, 0) 100%, #151515),
                        linear-gradient(to right, rgba(0, 0, 0, 0) 100%, #151515),
                        url(${background_image_additional})`
            }}></div>   
        </>
    )
}

export default DetailBackgrounds
