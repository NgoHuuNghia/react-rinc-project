import React, {useState} from 'react'

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
    const [sidebar, setSidebar] = useState('')

    return (
        <section className='admin-container'>
            <AdminTerminal sidebar={sidebar} setSidebar={setSidebar}/>
            <div className='controls'>
                <AdminHeader sidebar={sidebar} setSidebar={setSidebar}/>
                <AdminDashboard sidebar={sidebar} setSidebar={setSidebar}/>
            </div>
            <AdminFilter sidebar={sidebar} setSidebar={setSidebar}/>
            <div onClick={() => setSidebar('')} className={`sidebar-overlay ${(sidebar.length > 0 ? 'sidebar-open' : '')}`}></div>
        </section>
    )
}

export default Admin