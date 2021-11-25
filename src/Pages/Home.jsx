import React from 'react'
import Featured from '../Components/Home/Featured'
import FeaturedSlider from '../Components/Home/FeaturedSlider'
import FeaturedRecomended from '../Components/Home/FeaturedRecomended'
import FeaturedSim from '../Components/Home/FeaturedSim'
import Tabs from '../Components/Home/Tabs'
import { FaChevronLeft, FaChevronRight, FaWindows } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import { useEffect, useCallback } from 'react/cjs/react.development'

const Home = () => {
    const { 
        featuredList, 
        featuredListRecent, 
        featuredListRecommended, 
        featuredListSim,
        toggleIndex,
        tabActives,
        toggleTab,
    } = useGlobalContext()
    const { tabToggle, tabCurrent } = tabActives

    //? Types
    const sliderMain = 'sliderMain'
    const sliderRecomended = 'sliderRecomended'

    return (
        <>
            <div className='hero'>
                {/* bg_mobile_english or bg_english to switch */}
                <a href="/" className='hero-bg-mobile'>
                    <video loop="yes" muted="yes" autoPlay="yes" playsInline="" poster="https://cdn.cloudflare.steamstatic.com/steam/clusters/frontpage/f53c67a4c72cf00ced7afa3d/page_bg_mobile_english.jpg?t=1631553001">
                        <source src="https://cdn.cloudflare.steamstatic.com/steam/clusters/frontpage/f53c67a4c72cf00ced7afa3d/webm_page_bg_mobile_english.webm?t=1631553001" type="video/webm" />
                        <source src="https://cdn.cloudflare.steamstatic.com/steam/clusters/frontpage/f53c67a4c72cf00ced7afa3d/mp4_page_bg_mobile_english.mp4?t=1631553001" type="video/mp4" />
                    </video>
                </a>
                <a href="/"className='hero-bg'>
                    <video loop="yes" muted="yes" autoPlay="yes" playsInline="" poster="https://cdn.cloudflare.steamstatic.com/steam/clusters/frontpage/f53c67a4c72cf00ced7afa3d/page_bg_english.jpg?t=1631553001">
                        <source src="https://cdn.cloudflare.steamstatic.com/steam/clusters/frontpage/f53c67a4c72cf00ced7afa3d/webm_page_bg_english.webm?t=1631553001" type="video/webm" />
                        <source src="https://cdn.cloudflare.steamstatic.com/steam/clusters/frontpage/f53c67a4c72cf00ced7afa3d/mp4_page_bg_english.mp4?t=1631553001" type="video/mp4" />
                    </video> 
                </a>            
            </div>
            <div className='main-section'>
                <section className='main-card-container'>
                    <div>
                        <h5>Featured &#38; Recommended</h5>
                    </div>
                    <button className='previous' onClick={() => toggleIndex('decrease', sliderMain)}>
                        <FaChevronLeft />
                    </button>
                    <button className="next" onClick={() => toggleIndex('increase', sliderMain)}>
                        <FaChevronRight />
                    </button>
                    <div className='slider'>
                        {/* map here 4 times */}
                        {featuredListRecent.map((item, index) => {
                            return <FeaturedSlider key={item.id} index={index} {...item} />
                        })}
                    </div>
                </section>  

                <section className='secondary-card-container'>
                    <div>
                        <h5>Special offer</h5>
                        <a href="/"><p>More</p> <FaChevronRight /></a>
                    </div>
                    <div className='slider'>
                        {/* map here  8 times */}
                        {featuredList.slice(3).map((item) => {
                            return <Featured key={item.id} {...item} />
                        })}
                    </div>
                </section>

                <section className="movie-card-container">
                    <div>
                        <h5>Community recommended</h5>
                        <a href="/">more <FaChevronRight /></a>
                    </div>
                    <button className='previous' onClick={() => toggleIndex('decrease', sliderRecomended)}>
                        <FaChevronLeft />
                    </button>
                    <button className="next" onClick={() => toggleIndex('increase', sliderRecomended)}>
                        <FaChevronRight />
                    </button>
                    <div className='slider'> 
                        {featuredListRecommended.map((item, index) => {
                            return <FeaturedRecomended key={item.id} index={index} {...item}/>
                        })}
                    </div>
                </section>

                <section className='page-browse'>
                    <div>
                        <h5>Browse Steam</h5>
                    </div>  
                    <div>
                        <a href="/"><p>New releases</p></a>
                        <a href="/"><p>Special</p></a>
                        <a href="/"><p>Free games</p></a>
                        <a href="/"><p>By user tags</p></a>
                    </div>
                </section>

                <section className='special-card-container'>
                    <div>
                        <h5>Popular Sim Game</h5>
                        <a href="/">more <FaChevronRight /></a>
                    </div>
                    <div className='special-card-slider'> {/* map here 6 times */}
                        {/* map like i mean 6 here? */}
                        {featuredListSim.slice(3).map((item) => {
                            return <FeaturedSim key={item.id} {...item}/>
                        })}
                    </div>
                </section>
            </div>
            <div className='subsidiary-section'>
                <div className='subsidiary-container'>
                    <div className='tab-selector'>
                        <button 
                            className={tabToggle === 'featured' ? 'active' : ''} 
                            onClick={
                                () => toggleTab('featured', 'tabToggle')
                                //, toggleTab(featuredList[0].id, 'tabCurrent')
                            }>
                        <p>Trending</p></button>
                        <button 
                            className={tabToggle === 'special' ? 'active' : ''} 
                            onClick={
                                () => toggleTab('special', 'tabToggle')
                                //, toggleTab(featuredListRecent[0].id, 'tabCurrent')
                            }>
                        <p>Top news</p></button>
                        <button 
                            className={tabToggle === 'recommended' ? 'active' : ''} 
                            onClick={
                                () => toggleTab('recommended', 'tabToggle')
                                //, toggleTab(featuredListRecommended[0].id, 'tabCurrent')
                            }>
                                <p>Popular upcoming</p></button>
                        <button 
                            className={tabToggle === 'sim' ? 'active' : ''} 
                            onClick={
                                () => toggleTab('sim', 'tabToggle')
                                //, toggleTab(featuredListSim[0].id, 'tabCurrent')
                            }><p>Special</p></button>
                    </div>
                    <section className='tab-container'>
                        <div className='tab-list'>
                            <div>
                                <p>See more:  &nbsp;</p> <a href="/"> New releases</a>
                            </div>
                            {/* map here 10 times*/}
                            <div className={tabToggle === 'featured' ? 'active' : ''}>
                                {featuredList.map((item) => {
                                    return <Tabs key={item.id} {...item}/>
                                })}
                            </div>
                            <div className={tabToggle === 'special' ? 'active' : ''}>
                                {featuredListRecent.map((item) => {
                                    return <Tabs key={item.id} {...item}/>
                                })}
                            </div>
                            <div className={tabToggle === 'recommended' ? 'active' : ''}>
                                {featuredListRecommended.map((item) => {
                                    return <Tabs key={item.id} {...item}/>
                                })}
                            </div>
                            <div className={tabToggle === 'sim' ? 'active' : ''}>
                                {featuredListSim.map((item) => {
                                    return <Tabs key={item.id} {...item}/>
                                })}
                            </div>
                        </div>
                        <div className="tab-viewer">
                            <div className='active'>
                                <div>Lost In Random</div>
                                <div>
                                    <p>Overall user reviews</p>
                                    <p><span>Positive </span>(13)</p>
                                </div>
                                <div>
                                    <a href="/">RPG</a>
                                    <a href="/">Indie</a>
                                    <a href="/">Adventure</a>
                                    <a href="/">Anime</a>
                                    <a href="/">JRPG</a>
                                </div>
                                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_845c7dfe5ecf0fb9b50d48aef7875aafc43b9240.600x338.jpg?t=1631811672" alt="" />
                                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_c8a5566056a7b1ee346d20e2f4a71eb691008115.600x338.jpg?t=1631811672" alt="" />
                                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.600x338.jpg?t=1631811672" alt="" />
                                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_7876f213935e449f1a754ff95c41f2fdf7dc9b66.600x338.jpg?t=1631811672" alt="" />
                            </div>
                        </div>
                    </section>
                </div>
                {/* under 200.000d */}
                {/*//todo Maybe a grid display here if we have the time wink wink */}
            </div>
        </>
    )
}

export default Home
