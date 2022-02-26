import React from 'react'

import AdminTerminal from './AdminTerminal'
import AdminHeader from './AdminHeader'
import AdminDashboard from './AdminDashboard'
import AdminFilter from './AdminFilter'

//todo Do overlay like in AdminLTE 3 and 
//todo convert the overlay in header like that too
//todo utilize position static and absolute to achieve same structure

//todo make functions for search, pagination

//! Working on the AdminTerminal right now

const Admin = () => {
    return (
        <section className='admin-container'>
            <AdminTerminal />
            <div className='controls'>
                <AdminHeader />
                <AdminDashboard admin={true}/>
            </div>
            <AdminFilter />
            <div className='sidebar-overlay sidebar-open'></div>
        </section>
    )
}

export default Admin