import React from 'react'
import { Link } from 'react-router-dom'
import { FaWindows } from 'react-icons/fa'
import { useGlobalContext } from '../../context'

const FeaturedSlider = ({id, name, background_image, short_screenshots, index}) => {
    const { sliderIndexMain, featuredList, ToTop } = useGlobalContext()

    let position = 'nextSlide'
    if (index === sliderIndexMain) {
        position = 'activeSlide'
    } 
    if (index === sliderIndexMain - 1 || (sliderIndexMain === 0 && index === featuredList.length - 1)) {
        position = 'lastSlide'
    }

    return (
        <Link to={`/Detail/${id}`} onClick={() => ToTop()} className={position}>
            <img src={background_image} alt="" />
            <div>
                <h4>{name}</h4>
                {short_screenshots.slice(1, 5).map((item) => {
                    return <img src={item.image} key={item.id} alt={item.id} />
                })}
                {/* <img src={screenshotsImage[1].img} alt={name} />
                <img src={screenshotsImage[2]} alt={name} />
                <img src={screenshotsImage[3]} alt={name} />
                <img src={screenshotsImage[4]} alt={name} /> */}
                <div>
                    <div>Now available</div>
                    <div>Top seller</div>
                </div>
                <div>
                    <div>
                        <div>-91%</div>
                        <div>
                            <span>588.000d</span>
                            <p>134.000d</p>
                        </div>
                    </div>
                    <FaWindows />
                </div>
            </div>
        </Link>
    )
}

export default FeaturedSlider
