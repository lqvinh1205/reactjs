import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        <header>
            header AdminLayout
        </header>
        <main>
            <aside className='col-2'>
                Aside
            </aside>
            <div className="col-10">
                <Outlet />
            </div>
        </main>
    </div>
  )
}

export default AdminLayout