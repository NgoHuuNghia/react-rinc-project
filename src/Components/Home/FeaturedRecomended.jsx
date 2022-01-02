import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'

const FeaturedRecomended = ({id, background_image, index}) => {
    const { sliderIndexRecomended, featuredList } = useGlobalContext()

    let position = 'nextSlide'
    if (index === sliderIndexRecomended) {
        position = 'activeSlide'
    } 
    if (index === sliderIndexRecomended - 1 || (sliderIndexRecomended === 0 && index === featuredList.length - 1)) {
        position = 'lastSlide'
    }
    
    return (
        <Link to={`/Detail/${id}`} className={position}> {/* map here 3 times */}
            <div>
                <p>"Lorem ipsum dolor sit  amet consectetur adipisicing elit. Deleniti corrupti officiis, dolorum a totam quibusdam in adipisci voluptate aspernatur architecto magni, cum sint fuga laboriosam vitae quas vel assumenda doloribus."</p>
                <div className='movie-card-comment'>
                    <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/2e/2ea08980f32ec568536bf791b0f3986e8b279ccb.jpg" alt="" />
                    <div>
                        <h6>Zuluf</h6>
                        <p>
                            Played 10.1 hrs at review time<br />
                            127 people found this review helpful
                        </p>
                    </div>
                </div>  
            </div>
            <img src={background_image} alt="" />
        </Link>
    )
}

export default FeaturedRecomended
