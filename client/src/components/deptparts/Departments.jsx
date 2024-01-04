import React from 'react'
import { NavLink } from 'react-router-dom'

const Departments = () => {
  return (
    <>
        <div>
            <div className="hdr">Departments</div>
            <div className="lnks">
                <NavLink to='/adddept'>Add New</NavLink>
            </div>
        </div>
    </>
  )
}

export default Departments