import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='navmenu'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/dtaupld'>Data Upload</NavLink>
            {/* <NavLink to='/dept'>Departments</NavLink>
            <NavLink to='/desig'>Designations</NavLink> */}
        </div>
    </>
  )
}

export default Navbar