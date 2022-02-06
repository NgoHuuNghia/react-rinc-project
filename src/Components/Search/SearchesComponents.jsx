import React, {useRef} from 'react'
import {Link} from 'react-router-dom'
import { useGlobalContext } from '../../context'
import ReturnRatingIcon from '../ReturnRatingIcon'
import ConsoleIcons from '../../Components/ConsoleIcons'
import { HiOutlineEmojiSad } from 'react-icons/hi'
import { FaStopCircle } from 'react-icons/fa'

const SearchesComponents = ({id, name, background_image, ratings, rating, rating_top, metacritic, platforms}) => {
    const {ToTop} = useGlobalContext()

    const container = useRef(null)

    if(container.current !== null){
        //console.log(container.current.getBoundingClientRect().height)
    }

    return (
        <Link to={`/Detail/${id}`} ref={container} onClick={() => ToTop()} >
            <img src={background_image} alt="" />
            <div className='basic'>
                <h4>{name}</h4>
                <div>
                    <div className='price'>
                        <div>-91%</div>
                        <div>
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
                        <ConsoleIcons platforms={platforms}/>
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
            </div>
            <div className='expanded'>
                
            </div>
        </Link>
    )
}

export default SearchesComponents
