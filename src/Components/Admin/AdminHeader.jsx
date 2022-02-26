import React from 'react'
import {FaBars} from 'react-icons/fa'

const AdminHeader = () => {
    return (
        <div className='head'>
            <button><FaBars /></button>
            <div className='breadcrumbs'>
                <div>
                    <a href="/admin">current parent</a>
                </div>
                <span>/</span>
                <div>
                    <a href="/admin">Current</a>
                </div>
                {/* <span>/</span>
                <div>
                    <p href="/">{name}</p>
                </div> */}
            </div>
        </div>
    )
}

export default AdminHeader