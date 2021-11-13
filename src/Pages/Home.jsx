import React from 'react'
import Featured from '../Components/Home/Featured'
import { FaChevronRight, FaWindows } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Home = () => {
    const { featuredList } = useGlobalContext()

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
                    <div className='previous'>
                        
                    </div>
                    <div className="next">

                    </div>
                    <div className='slider'>
                        {/* map here 4 times */}
                        <a href='/' className='active'>
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/740130/capsule_616x353.jpg?t=1631331996" alt="" />
                            <div>
                                <h4>Tale of Arise</h4>
                                <img src="https://cdn.akamai.steamstatic.com/steam/apps/740130/ss_ff3e713e134572734fdc55adcb6043e2652f0506.600x338.jpg?t=1632698351" alt="" />
                                <img src="https://cdn.akamai.steamstatic.com/steam/apps/740130/ss_3ca8447106ddb23b14e4e30db0b24cbb359e2a5f.600x338.jpg?t=1632698351" alt="" />
                                <img src="https://cdn.akamai.steamstatic.com/steam/apps/740130/ss_7f7362042aff89d16cdf36c58b8c5674deb71d63.600x338.jpg?t=1632698351" alt="" />
                                <img src="https://cdn.akamai.steamstatic.com/steam/apps/740130/ss_f14d3e50d12061fee9afa2f46718bc0e0538d286.600x338.jpg?t=1632698351" alt="" />
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
                        </a>
                        <a href='/' className=''>
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/740130/capsule_616x353.jpg?t=1631331996" alt="" />
                            <div>
                                <h4>Tale of Arise</h4>
                                <img src="https://cdn.akamai.steamstatic.com/steam/apps/740130/ss_ff3e713e134572734fdc55adcb6043e2652f0506.600x338.jpg?t=1632698351" alt="" />
                                <img src="https://cdn.akamai.steamstatic.com/steam/apps/740130/ss_3ca8447106ddb23b14e4e30db0b24cbb359e2a5f.600x338.jpg?t=1632698351" alt="" />
                                <img src="https://cdn.akamai.steamstatic.com/steam/apps/740130/ss_7f7362042aff89d16cdf36c58b8c5674deb71d63.600x338.jpg?t=1632698351" alt="" />
                                <img src="https://cdn.akamai.steamstatic.com/steam/apps/740130/ss_f14d3e50d12061fee9afa2f46718bc0e0538d286.600x338.jpg?t=1632698351" alt="" />
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
                        </a>
                    </div>
                </section>  

                <section className='secondary-card-container'>
                    <div>
                        <h5>Special offer</h5>
                        <a href="/"><p>More</p> <FaChevronRight /></a>
                    </div>
                    <div className='slider'>
                        {/* map here  8 times */}
                        {featuredList.map((item) => {
                            return <Featured key={item.id} {...item}/>
                        })}
                    </div>
                </section>

                <section className="movie-card-container">
                    <div>
                        <h5>Community recommended</h5>
                        <a href="/">more <FaChevronRight /></a>
                    </div>
                    <div className='slider'> 
                        <div className='active'> {/* map here 3 times */}
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
                        {/* map like i mean 6 here? */}
                        <a href='/' className='speical-card-btn'>
                            <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/740130/header_292x136.jpg?t=1626370761" alt="" />
                            <div>
                                <p>220.000d</p>
                            </div>
                        </a>
                        <a href='/' className='speical-card-btn'>
                            <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/740130/header_292x136.jpg?t=1626370761" alt="" />
                            <div>
                                <p>220.000d</p>
                            </div>
                        </a>
                        <a href='/' className='speical-card-btn'>
                            <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/740130/header_292x136.jpg?t=1626370761" alt="" />
                            <div>
                                <p>220.000d</p>
                            </div>
                        </a>
                        <a href='/' className='speical-card-btn'>
                            <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/740130/header_292x136.jpg?t=1626370761" alt="" />
                            <div>
                                <p>220.000d</p>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
            <div className='subsidiary-section'>
                <div className='subsidiary-container'>
                    <div className='tab-selector'>
                        <a href="/" className='active'><p>Trending</p></a>
                        <a href="/"><p>Top news</p></a>
                        <a href="/"><p>Popular upcoming</p></a>
                        <a href="/"><p>Special</p></a>
                    </div>
                    <section className='tab-container'>
                        <div className='tab-list'>
                            <div>
                                <p>See more:  &nbsp;</p> <a href="/"> New releases</a>
                            </div>
                            {/* map here 10 times*/}
                            <a href='/' className='tab-item active'>
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
