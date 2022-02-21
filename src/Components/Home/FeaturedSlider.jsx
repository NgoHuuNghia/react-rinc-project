import React from 'react'
import { Link } from 'react-router-dom'
import ConsoleIcons from '../../Components/ConsoleIcons'
import { useGlobalContext } from '../../context'

const FeaturedSlider = ({id, name, background_image, short_screenshots, index, parent_platforms}) => {
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
                <div className='home-copoment-extra'>
                    <div>Now available</div>
                    <div>Top seller</div>
                </div>
                <div className='home-copomnent-main'>
                    <div className='price-container'>
                        <div className='discount-percent'>-91%</div>
                        <div className='price'>
                            <span>588.000d</span>
                            <p>134.000d</p>
                        </div>
                    </div>
                    <ConsoleIcons parent_platforms={parent_platforms}/>
                </div>
            </div>
        </Link>
    )
}

export default FeaturedSlider
