import React, { useState, useEffect } from 'react'
import parse from 'html-react-parser'

import MoreLikeGenres from '../Components/Detail/MoreLikeGenres'
import MoreLikeSeries from '../Components/Detail/MoreLikeSeries'

import ratingIcons from '../assets/logo/ratingIcons'
import storeIcons from '../assets/logo/storeIcons'

import { Link, useParams } from 'react-router-dom'
import { IoMdArrowDropdown } from 'react-icons/io'
import { SiGogdotcom, SiNintendoswitch, SiEpicgames, SiGogDotCom } from 'react-icons/si' //? stores icons
import { 
    FaChevronRight, FaWindows, FaFlag, FaShareAlt, FaThumbsUp, FaCircle, //? general icons
    FaPlaystation, FaXbox, FaStopCircle, //? console icons
    FaSteam, FaAppStore, FaGooglePlay, FaItchIo, //? store icons
} from 'react-icons/fa'
//! not using: FaThumbsDown, FaMeh

const detailUrl = 'https://api.rawg.io/api/games/'
const screenshotsUrl = '/screenshots'
const gameSeriesUrl = '/game-series'
const additionsUrl = '/additions'
const APIkey = '?key=8988510ce7664ac580a6c3b238a28e69'

const GameDetail = () => {
    const { id } = useParams()
    const [ loading, setLoading ] = useState(false)
    const [ detail, setDetail ] = useState()
    const [ screenshots, setScreenshots] = useState()
    const [ gameSeries, setGameSeries ] = useState()
    const [ curretRating, setCurretRating ] = useState()

    useEffect(() => {
        try {
            const getGameDetail = async () => {
                const detailResponse = await fetch(`${detailUrl}${id}${APIkey}`)
                const detailData = await detailResponse.json()
                setDetail(detailData)

                const screenshotsResponse = await fetch(`${detailUrl}${id}${screenshotsUrl}${APIkey}`)
                const screenshotsData = await screenshotsResponse.json()
                {const {results} = screenshotsData
                setScreenshots(results)}

                const gameSeriesResponse = await fetch(`${detailUrl}${id}${gameSeriesUrl}${APIkey}&page_size=3`)
                const gameSeriesData = await gameSeriesResponse.json()
                {const {results} = gameSeriesData
                setGameSeries(results)}

                //! additions things dlc, stuff
                // const screenshotsResponse = await fetch(`${detailUrl}${id}${screenshotsUrl}${APIkey}`)
                // const screenshotsData = await screenshotsResponse.json()
                // const {results} = screenshotsData
                // setScreenshots(results)
            }
            getGameDetail()
            setLoading(true)
        }
        catch (error){
            throw new Error(error)
        }
    }, [id])

    if(loading === false || !detail || !screenshots || !gameSeries){
        return <h2>Loading page</h2>
    }
    else {
        const {
            name, description, metacritic, released, updated, background_image, ratings,
            platforms, stores, developers, genres, tags, publishers, esrb_rating
        } = detail

        let playstationIcon = false, xboxIcon = false, windowIcon = false
        platforms.forEach((item) => {
            if(item.platform.slug === 'playstation5' || item.platform.slug === 'playstation4'){playstationIcon = true}
            if(item.platform.slug === 'xbox-series-x' || item.platform.slug === 'xbox-one'){xboxIcon = true}
            if(item.platform.slug === 'pc'){windowIcon = true}
        })

        const returnAgeRating = () => {
            if(esrb_rating == null) return 'There is no age rating yet'
            if(esrb_rating.slug === 'adults-only') return esrb_rating.name + ' 18+'
            if(esrb_rating.slug === 'mature') return esrb_rating.name + ' 17+'
            if(esrb_rating.slug === 'teen') return esrb_rating.name + ' 13+'
            if(esrb_rating.slug === 'everyone-10-plus') return esrb_rating.name
        }
        
        const returnRatingIcon = (index, chart, percent) => {
            let ratingIcon = ''
            ratingIcons.forEach((icon) => {
                if(ratings[index].title === icon.title && chart && percent > 15) {ratingIcon = icon.url}
                if(ratings[index].title === icon.title && !chart) {ratingIcon = icon.url}
            })
            return ratingIcon
        }

        return (
            <div className='detail-container'>
                <div className='detail-background' style={{
                    backgroundImage:
                        `linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, #151515),
                        linear-gradient(to left, rgba(0, 0, 0, 0) 100%, #151515),
                        linear-gradient(to right, rgba(0, 0, 0, 0) 100%, #151515),
                        url(${background_image})`
                }}></div>{/*  map out different background here with large thumbnail randomly */}
                <div className='breadcrumbs desktop'>
                    <div>
                        <a href='/'>{genres[0].name}</a>
                        {genres[1] ? (
                            <>
                                <span>/</span>
                                <a href='/'>{genres[1].name}</a>
                            </>
                        ) : (
                            null
                        )}
                    </div>
                    <FaChevronRight />
                    <div>
                        <a href="/">{developers[0].name}</a>
                    </div>
                    <FaChevronRight />
                    <div>
                        <p href="/">{name}</p>
                    </div>
                </div>
                <div className='detail'>
                    <div className='detail-desktop-primary'>
                        <section className='trailer-mobile'>
                            <div className='head'>
                                <div className='head-release'>{released}</div>
                                <div className='consoles'>
                                    {playstationIcon ? <FaPlaystation /> : null}
                                    {xboxIcon ? <FaXbox /> : null}
                                    {windowIcon ? <FaWindows /> : null}
                                </div>
                            </div>
                            <a href='/' className="trailer-main"><img src={background_image} alt="" /></a>
                            <div className='trailer-slider'>{/* map here 8 times */}
                                {screenshots
                                    .slice(0, 4)
                                    .map((item) => {
                                        return <a href="/" key={item.id}><img src={item.image} alt={name} /></a>
                                    })
                                }
                            </div>
                        </section>
                        <section className='glance'> {/* ADD AGE RATING AND WEBSITE */}
                            <div className='head'>
                                <div className='head-release'>{released}</div>
                                <div className='consoles'>
                                    {playstationIcon ? <FaPlaystation /> : null}
                                    {xboxIcon ? <FaXbox /> : null}
                                    {windowIcon ? <FaWindows /> : null}
                                </div>
                            </div>
                            <h1>{name}</h1>
                            <div className='glance-info'>
                                <p>Developer</p>
                                <a href="/">{developers[0].name}</a>
                                <p>Publisher</p>
                                <a href="/">{publishers.length >= 1 ? publishers[0].name : developers[0].name}</a>
                                <p>Released</p>
                                <p>{released}</p>
                            </div>
                            <div className='tag-container'>
                                <p>Tags</p>
                                <div>{/* limit map by 4 */}
                                    {tags
                                        .slice(0, 3)
                                        .map((item) => {
                                            return <a href="/"><p>{item.name}</p></a>
                                        })
                                    }
                                    <a href="/"><p>+</p></a>
                                </div>
                            </div>
                            <div className='ratings-container'>{/* flexbox 2-2 */}
                                <p>Ratings</p>
                                <div className='ratings'>
                                    {/* gonna make the final rating based on the metacritic, also add in the recommendations */}
                                    <div>
                                        <div>
                                            <h4>{ratings[0].title}</h4>
                                            <img src={returnRatingIcon(0, false)}/>
                                        </div>
                                        <div><a href="/">{ratings[0].count} Ratings</a></div>{/* //!  link to rating part of page */}
                                        <p># 10 <a href="/">RPG</a></p>
                                        <p># 1 <a href="/">Top 2020</a></p> 
                                    </div>
                                    <div>
                                        <p>#10</p><a href="/">RPG</a>
                                        <p>#1</p><a href="/">Top 2020</a> 
                                    </div>
                                    {metacritic
                                        ? <div>
                                            <h4>Metascore</h4>
                                            <p>{metacritic}</p>
                                        </div> 
                                        : <div>
                                            <h4>No metascore <FaStopCircle /></h4>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className='glance-about'>
                                <p>About</p>
                                {parse(description)}
                            </div>
                            <div className="glance-general">
                                <div className="glance-age">
                                    <p>Age rating</p>
                                    <p>{returnAgeRating()}</p>
                                </div>
                                <div className="glance-updated">
                                    <p>Last updated</p>
                                    <p>{updated.slice(0, 10)}</p>
                                </div>
                                <div className="glance-platforms linkables">
                                    <p>Last updated</p>
                                    <div>
                                        {platforms.map((item, index) => {
                                            return <><span>{item.platform.name}</span>
                                            {platforms.length - 1 > index 
                                                ? <strong>, </strong> 
                                                : null
                                            }
                                            </>
                                        })}
                                    </div>
                                </div>
                                <div className="glance-genres linkables">
                                    <p>Genres</p>
                                    <div>
                                        {genres.map((item, index) => {
                                            return <><span>{item.name}</span>
                                            {genres.length - 1 > index 
                                                ? <strong>, </strong> 
                                                : null
                                            }
                                            </>
                                        })}
                                    </div>
                                </div>
                                <div className="glance-tags linkables">
                                    <p>Tags</p>
                                    <div>
                                        {tags.map((item, index) => {
                                            return <><span>{item.name}</span>
                                            {tags.length - 1 > index 
                                                ? <strong>, </strong> 
                                                : null
                                            }
                                            </>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className='detail-desktop-secondary'>

                        <section className='trailer-desktop'>
                            <a href='/' className="trailer-main"><img src={background_image} alt="" /></a>
                            <div className='trailer-slider'>{/* map here 8 times */}
                                {screenshots
                                    .slice(0, 4)
                                    .map((item) => {
                                        return <a href="/" key={item.id}><img src={item.image} alt={name} /></a>
                                    })
                                }
                            </div>
                        </section>

                        <div className='interaction'>
                            <div className='stores-container'>
                                <p>Stores</p>
                                <div>
                                    {stores.map((item) => {
                                        let storeIcon = null
                                        storeIcons.forEach((icon) => {
                                            if(item.store.slug == icon.slug){
                                                storeIcon = icon.icon
                                            }
                                        })

                                        return (
                                            <a>
                                                <h4>{item.store.name}</h4>
                                                {storeIcon()}
                                            </a> 
                                        )
                                    })}
                                </div>
                            </div>

                            <div className='chart-container'>
                                <p>Click to rate</p>
                                <div className='chart'> {/* this is so gonna take some work might do last */}

                                    {ratings.map((item, index) => {
                                        return (
                                            <div
                                                onMouseEnter={() => setCurretRating(index)}
                                                key={item.id}
                                                className={index === curretRating
                                                    ? item.title + " active"
                                                    : item.title
                                                }
                                                style={{width: `${item.percent}%`}}>
                                                    <img src={returnRatingIcon(index, true, item.percent)}/>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='chart-label'>
                                    {ratings.map((item, index) => {
                                        return (
                                            <div 
                                                onMouseEnter={() => setCurretRating(index)}
                                                className={index === curretRating
                                                    ? item.title + " active"
                                                    : item.title
                                            }>
                                                <FaCircle />
                                                <p>{item.title}</p>
                                                <p>{item.count}</p>
                                            </div>)
                                    })}
                                </div>
                            </div>

                            <section className='action'>
                                <div className='action-action'>
                                    <a href="/"><FaShareAlt /></a>
                                    <a href="/"><FaFlag /></a>
                                </div>
                                <div className='action-play'>
                                    <div className="play-demo">
                                        <div>
                                            <h5>Download {name} Demo On Steam App</h5>
                                            <FaWindows />
                                        </div>
                                        <div>
                                            <a href='/'>Download</a>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h5>Buy {name}</h5>
                                            <FaWindows />
                                        </div>
                                        <div >
                                            <p>800.000₫</p>
                                            <a href="/">Add to cart</a>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h5>Buy {name}: Deluxe Edition</h5>
                                            <FaWindows />
                                        </div>
                                        <div >
                                            <p>1.080.000₫</p>
                                            <a href="/">Add to cart</a>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h5>Buy {name}: Ultimate Edition</h5>
                                            <FaWindows />
                                        </div>
                                        <div >
                                            <p>1.380.000₫</p>
                                            <a href="/">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="action-dlc">
                                    <div>
                                        <p className='label-md'>Content For This Game</p>
                                        <a href='/'>Browse all (24)</a>
                                    </div>
                                    <div>
                                    {/* map here 5 time? and make button to see all */}
                                        <a href='/' className='dlc-purchase'>
                                            <h6>{name} - Starter Pack</h6>
                                            <p>80.000₫</p>
                                        </a>
                                        <a href='/' className='dlc-purchase'>
                                            <h6>{name} - Starter Pack</h6>
                                            <p>80.000₫</p>
                                        </a>
                                        <a href='/' className='dlc-purchase'>
                                            <h6>{name} - Starter Pack</h6>
                                            <p>80.000₫</p>
                                        </a>
                                        <a href='/' className='dlc-purchase'>
                                            <h6>{name} - Starter Pack</h6>
                                            <p>80.000₫</p>
                                        </a>
                                    </div>
                                    <div>
                                        <p>showing 1 - 5 of 24</p>
                                        <a href="/">
                                            <p>See All</p>
                                            <IoMdArrowDropdown />
                                        </a>
                                    </div>
                                </div>
                            </section>

                            {platforms[platforms.length - 1].platform.slug === 'pc'
                                ? (
                                    <section className='system'>
                                        <h3 className='label-sm'>System Requirements for PC</h3>
                                        <div className="minimum">
                                            <strong>Minimum:</strong>
                                            <div>
                                                <p>{platforms[platforms.length - 1].requirements.minimum}</p>
                                            </div>
                                        </div>
                                        <div className="recommended">
                                            <strong>Recommended:</strong>
                                            <div>
                                                <p>{platforms[platforms.length - 1].requirements.recommended}</p>
                                            </div>
                                        </div>
                                    </section>
                                )
                                : null
                            }
                        </div>
                    </div>
                </div>
                <div className='recommendations'>
                    <section className="recommended">
                        {gameSeries.length >= 1
                            ? <MoreLikeSeries gameSeries={gameSeries}/>
                            : null}
                        <MoreLikeGenres genres={genres}/>
                    </section>
                </div>
            </div>
        )
    }

}

export default GameDetail