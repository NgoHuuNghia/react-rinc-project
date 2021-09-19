import React from 'react'
import { FaChevronRight, FaWindows, FaFlag, FaShareAlt, FaThumbsDown, FaThumbsUp, FaMeh } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'

const GameDetail = () => {
    return (
        <div className='detail'>
            <section className="breadcrumbs">
                <a href="/">All</a> <FaChevronRight /> 
                <a href="/">RPG</a> <FaChevronRight />  
                <a href="/">BANDAI NAMECO Entertainment Franchise</a> <FaChevronRight />  
                <a href="/">Tales Of Arise</a> 
            </section>
            <section className='trailer'>
                <h1>Tales Of Arise</h1>
                <a href='/' className="detail-trailer"><img src="/" alt="" /></a>
                 <div className='trailer-slider'>{/* map here 8 times */}
                    <a href="/"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/740130/ss_d3f44bb87db552da6f17bb31ba4144639b24ed2f.600x338.jpg?t=1631331996" alt="" /></a>
                </div>
            </section>
            <section className='glance'> {/* ADD AGE RATING AND WEBSITE */}
                <p>300 years of tyranny. A mysterious mask. Lost pain and memories. Wield the Blazing Sword and join a mysterious, untouchable girl to fight your oppressors. Experience a tale of liberation, featuring characters with next-gen graphical expressiveness! </p>
                <label className='label-sm'>Developer <a href="/">BANDAI NAMCO Studios Inc.</a></label>
                <label className='label-sm'>Publisher <a href="/">BANDAI NAMCO Entertainment</a></label>
                <label className='label-sm'>Publisher <span>10 Sep, 2021</span></label>
                <label className='label-md'>Tags</label>
                <div className='tag-container'>{/* limit map by 4 */}
                    <a href="/">Anime</a>
                    <a href="/">Action</a>
                    <a href="/">RPG</a>
                    <a href="/">JRPG</a>
                    <a href="/">+</a>{/* the more tags button */}
                </div>
                <label className='label-md'>Languages</label>
                <div className='languages-container'>
                    <table>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>Interface</th>
                                <th>Full audio</th>
                                <th>Subtitles</th>
                            </tr>
                            {/* map here all */}
                            <tr>
                                <td>English</td>
                                <td>✔</td>
                                <td>✔</td>
                                <td>✔</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <label className='label-md'>Ratings</label>
                <div className='ratings-container'>{/* flexbox 2-2 */}
                    <div className='ratings'>
                        <div>
                            <h4>Exceptional</h4>
                            <a href="/">1178 Ratings</a>{/*  link to rating part of page */}
                            <p># 10 <a href="/">RPG</a></p>
                            <p># 1 <a href="/">Top 2020</a></p>
                        </div>
                        <div>
                            <h4>Metascore</h4>
                            <div><p>68</p></div>
                        </div>
                    </div>
                    <div className='chart-container'>
                        <p>Click to rate</p>
                        <div className='chart'> {/* this is so gonna take some work might do last */}
                            <div>
                                <FaThumbsUp />
                            </div>
                            <div>
                                <FaMeh />
                            </div>
                            <div>
                                <FaThumbsDown />
                            </div>
                            <div></div>
                        </div>
                        <div className='chart-label'>
                            <div>
                                <div></div> {/* lil color circle */}
                                <label htmlFor="Exceptional">Exceptional</label>
                                <p>548</p>
                            </div>
                            <div>
                                <div></div> {/* lil color circle */}
                                <label htmlFor="Exceptional">Recommended</label>
                                <p>548</p>
                            </div>
                            <div>
                                <div></div> {/* lil color circle */}
                                <label htmlFor="Exceptional">Meh</label>
                                <p>548</p>
                            </div>
                            <div>
                                <div></div> {/* lil color circle */}
                                <label htmlFor="Exceptional">Skip</label>
                                <p>548</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
            <section className='action'>
                <div className='action-action'>
                    <a href="/"><FaShareAlt /></a>
                    <a href="/"><FaFlag /></a>
                </div>
                <div className='action-play'>
                    <div className="play-demo">
                        <h5>Download Tales of Arise Demo On Steam App</h5>
                        <FaWindows />
                        <a href='/'>Download</a>
                    </div>
                    <div className='play-purchase'>
                        <h5>Buy Tales of Arise</h5>
                        <FaWindows />
                        <div >
                            <p>800.000₫</p>
                            <a href="/">Add to cart</a>
                        </div>
                    </div>
                    <div className='play-purchase'>
                        <h5>Buy Tales of Arise: Deluxe Edition</h5>
                        <FaWindows />
                        <div >
                            <p>1.080.000₫</p>
                            <a href="/">Add to cart</a>
                        </div>
                    </div>
                    <div className='play-purchase'>
                        <h5>Buy Tales of Arise: Ultimate Edition</h5>
                        <FaWindows />
                        <div >
                            <p>1.380.000₫</p>
                            <a href="/">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div className="action-dlc">
                    <label className='label-md'>Content For This Game</label>
                    <a href='/'>
                        <p>Browse all (24)</p>
                    </a>
                    {/* map here 5 time? and make button to see all */}
                    <a href='/' className='dlc-purchase'>
                        <h6>Tales of Arise - Starter Pack</h6>
                        <p>80.000₫</p>
                    </a>
                    <div>
                        <div>
                            <p>showing 1 - 5 of 24</p>
                            <a href="/">See All <IoMdArrowDropdown /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='description'>
                {/* map all here */}
                <div>
                    {/* also this is like the template from the steam api - the img src is weird look into */}
                    <h1>Deluxe Edition</h1>
                    <p> 
                        <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/740130/extras/TOA_CustomImage_DeluxeEdition.gif?t=1631331996\" />
                        <br />The Deluxe Edition includes the Tales of Arise full game, Premium Travel Pack, and Adventurer's Pack.
                    </p>
                </div>
            </section>
            <section className='system'>
                <label className='label-md'>System Requirements</label>
                {/* map the 2 requirements here also the class is weird here same with the br look into that*/}
                <strong>Minimum:</strong><br /><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br /></li><li><strong>OS:</strong> Windows 10 (64-bit Only)<br /></li><li><strong>Processor:</strong> Intel Core i5-2300 or AMD Ryzen 3 1200<br /></li><li><strong>Memory:</strong> 8 GB RAM<br /></li><li><strong>Graphics:</strong> GeForce GTX 760 or Radeon HD 7950<br /></li><li><strong>DirectX:</strong> Version 11<br /></li><li><strong>Storage:</strong> 45 GB available space<br /></li><li><strong>Sound Card:</strong> DirectX compatible soundcard or onboard chipset</li></ul>
            </section>
            <section className="recommended">
                <div>
                    <label>More from BANDAI NAMCO Entertainment</label>{/*  output Publisher here i think */}
                    <a href="/">See all</a>
                    <div>
                        {/* map here 6 games */}
                        <div>
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/570940/capsule_184x69.jpg?t=1605604948" alt="" />
                            <label>Dark soul</label>
                        </div>
                    </div>
                </div>
                <div>
                    <label>More Like this</label>{/*  output games of same gerne here i think */}
                    <a href="/">See all</a>
                    <div>
                        {/* map here 6 games */}
                        <div>
                            <img src="https://cdn.akamai.steamstatic.com/steam/apps/570940/capsule_184x69.jpg?t=1605604948" alt="" />
                            <label>Soul</label>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GameDetail
