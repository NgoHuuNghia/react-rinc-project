import React from 'react'
import { FaChevronRight, FaWindows } from 'react-icons/fa'

const Home = () => {
    return (
        <>
            <div className='hero'>
                <a href="/">
                    <video loop="yes" muted="yes" autoplay="yes" playsinline="" poster="https://cdn.cloudflare.steamstatic.com/steam/clusters/frontpage/f53c67a4c72cf00ced7afa3d/page_bg_mobile_english.jpg?t=1631553001" class="fullscreen-bg__video_mobile">
                        <source src="https://cdn.cloudflare.steamstatic.com/steam/clusters/frontpage/f53c67a4c72cf00ced7afa3d/webm_page_bg_mobile_english.webm?t=1631553001" type="video/webm" />
                        <source src="https://cdn.cloudflare.steamstatic.com/steam/clusters/frontpage/f53c67a4c72cf00ced7afa3d/mp4_page_bg_mobile_english.mp4?t=1631553001" type="video/mp4" />
                    </video>                
                </a>
            </div>
            <div className='main-section'>

                <section className='main-card-container'>
                    <div>
                        <h5>Featured &#38; Recommended</h5>
                    </div>
                    {/* map here 4 times */}
                    <div className='slider'>
                        <div>
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/740130/capsule_616x353.jpg?t=1631331996" alt="" />
                            <div>
                                <h4>Tale of Arise</h4>
                                <div>
                                    <div>-91%</div>
                                    <div>
                                        <span>588.000d</span>
                                        134.000d
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>  

                <section className='secondary-card-container'>
                    <div>
                        <h5>Special offer</h5>
                        <a href="/"><p>More</p> <FaChevronRight /></a>
                    </div>
                    <div className='slider'>
                         <div> {/* map here  8 times */}
                            <a href="/">
                                <img src="https://cdn.akamai.steamstatic.com/steam/apps/740130/header.jpg?t=1631331996" alt="" />
                            </a>
                            <div>
                                <div>
                                    <div>-33%</div>
                                    <div>
                                        <span>1.000.000d</span>
                                        670.000d
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
                    <div> {/* map here 3 times */}
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/740130/capsule_616x353.jpg?t=1631331996" alt="" />
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
                        <h5>Popular Vr Game</h5>
                        <a href="/">more <FaChevronRight /></a>
                    </div>
                    <div className='special-card-slider'> {/* map here 6 times */}
                        <a href='/' className='speical-card-btn'>
                            <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/740130/header_292x136.jpg?t=1626370761" alt="" />
                            <div>
                                <p>220.000d</p>
                            </div>
                        </a>
                    </div>
                </section>
            </div>

            <div className='tab-selector'>
                <a href="/"><p>Trending</p></a>
                <a href="/"><p>Top news</p></a>
                <a href="/"><p>Popular upcoming</p></a>
                <a href="/"><p>Special</p></a>
            </div>
            <div className='subsidiary-section'>
                <section className='tab-container'>
                    <div>
                        <div className='tab-expand'>
                            <p>See more:  &nbsp;</p> <a href="/"> New releases</a>
                        </div>
                        {/* map here 10 times*/}
                        <a href='/' className='tab-item'>
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/1462570/capsule_184x69.jpg?t=1631287776" alt="" />
                            <div>
                                <div>
                                    <h4>Lost in random</h4>
                                    <i><FaWindows /></i>
                                    <small>Action, adventure, exploration</small>
                                </div>
                                <div>
                                    <div>-10%</div>
                                    <div>
                                        <p>495.000d</p>
                                        <p>445.500d</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href='/' className='tab-item'>
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/1462570/capsule_184x69.jpg?t=1631287776" alt="" />
                            <div>
                                <div>
                                    <h4>Lost in random</h4>
                                    <i><FaWindows /></i>
                                    <small>Action, adventure, exploration</small>
                                </div>
                                <div>
                                    <div>-10%</div>
                                    <div>
                                        <p>495.000d</p>
                                        <p>445.500d</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>
                {/* under 200.000d */}
                {/*//todo Maybe a grid display here if we have the time wink wink */}
            </div>
        </>
    )
}

export default Home
