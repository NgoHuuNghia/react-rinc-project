import React from 'react'
import { FaChevronRight, FaWindows } from 'react-icons/fa'

const Home = () => {
    return (
        <>
            <section className='hero'></section>
            <section className='main-section'>

                <section className='main-card-container'>
                    <h5>Featured &#38; Recommended</h5>
                    <div className='main-card-slider'>
                        <div> {/* map here 4 times */}
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/740130/capsule_616x353.jpg?t=1631331996" alt="" />
                            <h4>Tale of Arise</h4>
                            <small>800.000d</small>
                        </div>
                    </div>
                </section>  

                <section className='secondary-card-container'>
                    <div>
                        <h5>Special offer</h5>
                        <a href="/">more <FaChevronRight /></a>
                    </div>
                    <div className='secondary-card-slider'>
                         <div> {/* map here  8 times */}
                            <a href="/">
                                <img src="https://cdn.akamai.steamstatic.com/steam/spotlights/b3a1549adf8ed85aade0ab16/spotlight_image_english.jpg?t=1630685626" alt="" />
                            </a>
                            <div>
                                <h6>Weekend deal</h6>
                                <small>Offer ends 24 Sep @ 12:00am.</small>
                                <div>
                                    <h3>-33%</h3>
                                    <div>
                                        <small>1.000.000d</small>
                                        <p>670.000d</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>

                <section className="movie-card-container">
                    <div>
                        <h5>Community recommended</h5>
                        <a href="/">more <FaChevronRight /></a>
                    </div>
                    <div className='movie-card-slider'> {/* map here 3 times */}
                        <img src="/" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti officiis, dolorum a totam quibusdam in adipisci voluptate aspernatur architecto magni, cum sint fuga laboriosam vitae quas vel assumenda doloribus.</p>
                        <div className='movie-card-comment'>
                            <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/2e/2ea08980f32ec568536bf791b0f3986e8b279ccb.jpg" alt="" />
                            <div>
                                <h6>comment name</h6>
                                <p>comment</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='browse-container'>
                    <h5>Browse Steam</h5>
                    <a href="/">New releases</a>
                    <a href="/">Special</a>
                    <a href="/">Free games</a>
                    <a href="/">By user tags</a>
                </section>

                <section className='special-card-container'>
                    <div>
                        <h5>Popular Vr Game</h5>
                        <a href="/">more <FaChevronRight /></a>
                    </div>
                    <div className='special-card-slider'> {/* map here 6 times */}
                        <a href='/' className='speical-card-btn'>
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/1032430/header_292x136.jpg?t=1624419479" alt="" />
                            <p>220.000d</p>
                        </a>
                    </div>
                </section>

            </section>
            <div className='tab-selector'>
                <a href="/">News and trending</a>
                <a href="/">Top news</a>
                <a href="/">Popular upcoming</a>
                <a href="/">Special</a>
            </div>
            <section className='subsidiary-section'>
                <div className='tab-container'>
                    <div className='tab-expand'>
                        <p>See more: <a href="/">New releases</a></p>
                    </div>
                    {/* map here 10 times*/}
                    <a href='/' className='tab-item'>
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1462570/capsule_184x69.jpg?t=1631287776" alt="" />
                        <div>
                            <h4>Lost in random</h4>
                            <i><FaWindows /></i>
                            <small>Action, adventure, exploration</small>
                        </div>
                        <p>600.000d <small>500.000d</small></p>
                    </a>
                </div>

                {/*//todo Maybe a grid display here if we have the time wink wink */}
            </section>
        </>
    )
}

export default Home
