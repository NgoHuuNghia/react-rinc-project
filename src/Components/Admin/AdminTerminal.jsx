import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { useGlobalContext } from '../../context'
import logo from '../../assets/logo/rinc-white-v2.png'

const AdminTerminal = () => {
    const { ToTop } = useGlobalContext()

    return (
        <div className='terminal'>
            <div className='head'>
                <Link to='/' onClick={() => ToTop()}>
                    <img src={logo} alt="" />
                    <p>Rinc's admin</p>
                </Link>
            </div>
            <div className='admin'>
                <Link to='/' onClick={() => ToTop()}>
                    <img src={logo} alt="" />
                    <p>Admin name</p>    
                </Link>
            </div>
            <div className='search'>
                <input type="text" placeholder='Search...'/>
                <FaSearch />
            </div>
            <div className='dashboard'>
                <ul>
                    <li className='activated'><span>Dashboard</span><MdKeyboardArrowLeft /></li>
                    <li><span>test stuff</span><MdKeyboardArrowLeft /></li>
                    <li><span>test stuff</span><MdKeyboardArrowLeft /></li>
                    <li><span>test stuff</span><MdKeyboardArrowLeft /></li>
                    <li><span>test stuff</span><MdKeyboardArrowLeft /></li>
                    <li><span>test stuff</span><MdKeyboardArrowLeft /></li>
                </ul>
                <p className='extension-dashboard'>label</p>
                <ul>
                    <li><span>extension stuff</span><MdKeyboardArrowLeft /></li>
                    <li><span>extension stuff</span><MdKeyboardArrowLeft /></li>
                    <li><span>extension stuff</span><MdKeyboardArrowLeft /></li>
                    <li><span>extension stuff</span><MdKeyboardArrowLeft /></li>
                    <li><span>extension stuff</span><MdKeyboardArrowLeft /></li>
                    <li><span>extension stuff</span><MdKeyboardArrowLeft /></li>
                </ul>
                <p className='extension-dashboard'>label</p>
                <ul>
                    <li><span>extension stuff</span><MdKeyboardArrowLeft /></li>
                    <li><span>extension stuff</span><MdKeyboardArrowLeft /></li>
                    <li><span>extension stuff</span><MdKeyboardArrowLeft /></li>
                    <li><span>extension stuff</span><MdKeyboardArrowLeft /></li>
                    <li><span>extension stuff</span><MdKeyboardArrowLeft /></li>
                    <li><span>extension stuff</span><MdKeyboardArrowLeft /></li>
                </ul>
            </div>
        </div>
    )
}

export default AdminTerminal