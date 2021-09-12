import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const GameDetail = () => {
    return (
        <section className='detail-section'>
            <div className="detail-breadcrumbs">
                <a href="/">All games</a> <FaChevronRight /> 
                <a href="/">RPG games</a> <FaChevronRight />  
                <a href="/">BANDAI NAMECO Entertainment Franchise</a> <FaChevronRight />  
                <a href="/">Tales Of Arise</a> 
            </div>
            <h1>Tales Of Arise</h1>
            <div>
                <a href='/' className="detail-trailer"><img src="/" alt="" /></a>
                 <div className='trailer-slider'>{/* map here 8 times */}
                    <a href="/"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/740130/ss_d3f44bb87db552da6f17bb31ba4144639b24ed2f.600x338.jpg?t=1631331996" alt="" /></a>
                </div>
            </div>
            <div className='detail-glance'>
                <div>
                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/740130/header.jpg?t=1631331996" alt="" />
                </div>
                <div>
                    <p>300 years of tyranny. A mysterious mask. Lost pain and memories. Wield the Blazing Sword and join a mysterious, untouchable girl to fight your oppressors. Experience a tale of liberation, featuring characters with next-gen graphical expressiveness! </p>
                    <h6>All Reviews</h6>

                </div>
                <div>

                </div>
            </div>
        </section>
    )
}

export default GameDetail
