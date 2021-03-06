import React from 'react'
import {FaBars} from 'react-icons/fa'

import { AdminArrow } from '../../assets/svg'
import { MdWidgets } from 'react-icons/md'
import {AiFillDashboard, AiFillLayout} from 'react-icons/ai'

const AdminHeader = ({sidebar, setSidebar}) => {
    return (
        <div className='head'>
            <button onClick={() => setSidebar('terminal')}><AdminArrow /></button>
            <div className='breadcrumbs'>
                <div>
                    <a href="/admin">current parent</a>
                </div>
                <span>/</span>
                <div>
                    <a href="/admin">Current</a>
                </div>
            </div>
            <div className='links'>
                <a href="/"><MdWidgets /></a>
                <a href="/"><AiFillDashboard /></a>
                <a href="/"><AiFillLayout /></a>
            </div>
        </div>
    )
}

export default AdminHeader