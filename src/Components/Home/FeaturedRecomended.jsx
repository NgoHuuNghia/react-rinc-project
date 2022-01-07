import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import parse from 'html-react-parser'

const detailUrl = 'https://api.rawg.io/api/games/'
const APIkey = '?key=8988510ce7664ac580a6c3b238a28e69'

const FeaturedRecomended = ({id, background_image, index}) => {
    const { sliderIndexRecomended, featuredList } = useGlobalContext()
    const [ desc, setDesc ] = useState()

    useEffect(() => {
        const getDetails = async() => {
            const detailResponse = await fetch(`${detailUrl}${id}${APIkey}`)
            const detailData = await detailResponse.json()
            setDesc(detailData.description)
        }
        getDetails()
    }, [])

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
                <div>
                    {desc ? parse(desc) : "loading description"}
                </div>
                <div>
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
