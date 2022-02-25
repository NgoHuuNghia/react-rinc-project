import React from 'react'
import {FaFilter, FaSearch} from 'react-icons/fa'
import {RiEditBoxFill, RiDeleteBack2Fill} from 'react-icons/ri'

const AdminDashboard = () => {
    return (
        <>
            <div className='title'>
                <h2>Dash title</h2>
                <button><FaFilter /></button>
            </div>
            <div className='list-container'>
                <div className='search'>
                    <input type="text" placeholder='Search...' />
                    <button><FaSearch /></button>
                </div>
                <ul className='table'>
                    <li className='table-head'>id</li>
                    <li className='table-head'>slug</li>
                    <li className='table-head'>released</li>
                    <li className='table-head'>rating</li>
                    <li className='table-head'>review_count</li>
                    <li className='table-head'>Edit</li>
                    <li className='table-head'>Delete</li>
                    <li>23123</li>
                    <li>asd-qwr-czxcs</li>
                    <li>23-2-1999</li>
                    <li>4.5</li>
                    <li>5000</li>
                    <li><RiEditBoxFill /></li>
                    <li><RiDeleteBack2Fill /></li>
                    <li>23123</li>
                    <li>asd-qwr-czxcs</li>
                    <li>23-2-1999</li>
                    <li>4.5</li>
                    <li>5000</li>
                    <li><RiEditBoxFill /></li>
                    <li><RiDeleteBack2Fill /></li>
                </ul>
            </div>
        </>
    )
}

export default AdminDashboard