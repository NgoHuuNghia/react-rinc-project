import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdKeyboardArrowLeft, MdWidgets } from 'react-icons/md'
import { AiFillDashboard, AiFillLayout, AiFillPieChart, AiOutlineRightSquare } from'react-icons/ai'
import { FaTree } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { useGlobalContext } from '../../context'
import logo from '../../assets/logo/rinc-white-v2.png'
import { AdminArrow } from '../../assets/svg'

//todo depend on the url to make a state for dashboard child links

const AdminTerminal = ({sidebar, setSidebar}) => {
    const { ToTop } = useGlobalContext()

    return (
        <nav className={`terminal ${sidebar === 'terminal' ? 'sidebar-open' : ''}`}>
            <div className='head'>
                <Link to='/' onClick={() => ToTop()}>
                    <img src={logo} alt="" />
                    <p>Rinc's admin</p>
                </Link>
                <button onClick={() => setSidebar('')}><AdminArrow /></button>
            </div>
            <div className='admin'>
                <Link to='/' onClick={() => ToTop()}>
                    <img src="https://media.rawg.io/media/resize/80/-/avatars/654/6549f85d93a1b4653d6030fe6bd407bf.jpg" alt="avatar" />
                    <p>Admin name</p>    
                </Link>
            </div>
            <div className='search'>
                <input type="text" placeholder='Search...'/>
                <button><FaSearch /></button>
            </div>
            <div className='dashboard'>
                <ul>
                    <li>
                        <a className='current' href=""><span><AiFillDashboard />Dashboard</span><MdKeyboardArrowLeft /></a>
                        <ul className='current'>
                            <li><a className='current' href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                        </ul>
                    </li>
                    <li>
                        <a><span><MdWidgets />test stuff</span><MdKeyboardArrowLeft /></a>
                        <ul className='test'>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                        </ul>
                    </li>
                    <li>
                        <a><span><AiFillLayout />test stuff</span><MdKeyboardArrowLeft /></a>
                        <ul>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                        </ul>
                    </li>
                    <li>
                        <a><span><AiFillPieChart />test stuff</span><MdKeyboardArrowLeft /></a>
                        <ul>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                        </ul>
                    </li>
                    <li>
                        <a><span><AiFillPieChart />test stuff</span><MdKeyboardArrowLeft /></a>
                        <ul>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                        </ul>
                    </li>
                    <li>
                        <a><span><FaTree />test stuff</span><MdKeyboardArrowLeft /></a>
                        <ul>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                        </ul>
                    </li>
                </ul>
                <p className='label'>label</p>
                <ul>
                    <li>
                        <a><span>extension stuff</span><MdKeyboardArrowLeft /></a>
                        <ul>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                        </ul>
                    </li>
                    <li>
                        <a><span>extension stuff</span><MdKeyboardArrowLeft /></a>
                        <ul>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                        </ul>
                    </li>
                    <li>
                        <a><span>extension stuff</span><MdKeyboardArrowLeft /></a>
                        <ul>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                        </ul>
                    </li>
                    <li>
                        <a><span>extension stuff</span><MdKeyboardArrowLeft /></a>
                        <ul>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                        </ul>
                    </li>
                    <li>
                        <a><span>extension stuff</span><MdKeyboardArrowLeft /></a>
                        <ul>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                        </ul>
                    </li>
                    <li>
                        <a><span>extension stuff</span><MdKeyboardArrowLeft /></a>
                        <ul>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                            <li><a href=""><AiOutlineRightSquare />Dashboard</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default AdminTerminal