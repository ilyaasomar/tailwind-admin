import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='2xl:max-w-[1640px] 2xl:mx-auto 2xl:px-5'>
        <div className='flex'>
        <Sidebar />
        <div className='bg-white w-full h-24'>
        <Navbar />
        <div className='bg-gray-100 h-[96vh]'>
          {/* top */}
          <div className='flex flex-col'>
          <div className='p-5 flex justify-between'>
            <h1 className='text-3xl py-3'>DataTables</h1>
            <div className='flex space-x-2'>
            <h3>Home</h3>
            <span> / </span>
            <h3>DataTable</h3>

            </div>

          </div>
          <div className='p-5'>
          <Outlet />
          </div>
            {/* footer */}
            <div className='p-5 flex -mb-0'>
          <Footer />
            </div>
          </div>
        </div>
        </div>

        </div>
    </div>
  )
}

export default Layout