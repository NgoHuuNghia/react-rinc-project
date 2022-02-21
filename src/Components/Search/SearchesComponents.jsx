import React, {useRef, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useGlobalContext } from '../../context'

import getWindowDimensions from '../getWindowDimensions'
import ReturnRatingIcon from '../ReturnRatingIcon'
import ConsoleIcons from '../../Components/ConsoleIcons'

import { HiOutlineEmojiSad } from 'react-icons/hi'
import { FaStopCircle } from 'react-icons/fa'

const SearchesComponents = ({id, name, released, background_image, ratings, rating, rating_top, metacritic, reviews_count, parent_platforms, genres}) => {
    const {ToTop} = useGlobalContext()

    const [expanded, setExpanded] = useState(false)
    const container = useRef(null)

    const { windowWidth } = getWindowDimensions()

    useEffect(() =>{
        const getChildHeight = (nth) => container.current.children[nth].getBoundingClientRect().height
        const fullHeight = getChildHeight(0) + getChildHeight(1) + getChildHeight(2)
        const shrinkedHeight = getChildHeight(0) + getChildHeight(1)
        if(expanded === true) {container.current.style.height = `${fullHeight}px`}
        if(expanded === false) {container.current.style.height = `${shrinkedHeight}px`}
    }, [expanded, []])

    return (
        <div 
            ref={container} 
            onClick={() => ToTop()} 
            onMouseOver={(windowWidth > 1000) ? () => setExpanded(true) : null}
            onMouseLeave={(windowWidth > 1000) ? () => setExpanded(false) : null}
            >
            <Link to={`/Detail/${id}`}>
                <img src={background_image} alt="" />
            </Link>
            <div className='basic'>
                <h4>{name}</h4>
                <div className='search-copomnent-main'>
                    <div className='price-container'>
                        <div className='discount-percent'>-91%</div>
                        <div className='price'>
                            <span>588.000d</span>
                            <p>134.000d</p>
                        </div>
                    </div>
                    <div className='rating'>
                        {ratings[0] //! mandatory
                            ? <>
                                <ReturnRatingIcon title={ratings[0].title} chart={false}/>
                                <h4>{Number.parseFloat(rating).toFixed(1)}/{rating_top} rating</h4>
                            </>
                            : <>
                                <HiOutlineEmojiSad />
                                <h4>No ratings yet</h4>
                            </>
                        }
                    </div>
                    <div className='subsidiary-rating'>
                        <ConsoleIcons parent_platforms={parent_platforms}/>
                        <div className='rating'>
                            {ratings[0] //! mandatory
                                ? <>
                                    <ReturnRatingIcon title={ratings[0].title} chart={false}/>
                                    <h4>{Number.parseFloat(rating).toFixed(1)}/{rating_top} rating</h4>
                                </>
                                : <>
                                    <HiOutlineEmojiSad />
                                    <h4>No ratings yet</h4>
                                </>
                            }
                        </div>
                        {metacritic
                            ? <p>{metacritic}</p>
                            : <p className='empty'><FaStopCircle /></p>
                        }
                    </div>
                </div>
                <div className='search-copomnent-expander'>
                    <p>Tap here for more detail</p>
                </div>
            </div>
            <ul className='expanded'>
                <li>
                    <p>Release date:</p>
                    <p>{released}</p>
                </li>
                <li>
                    <p>Genres:</p>
                    <p>{genres.slice(0,2).map(item => item.name + ', ')}</p>
                </li>
                <li>
                    <p>Reviews:</p>
                    <p>{reviews_count}</p>
                </li>
                <li>
                    <p>For more games like this</p>
                </li>
            </ul>
        </div>
    )
}

export default SearchesComponents
