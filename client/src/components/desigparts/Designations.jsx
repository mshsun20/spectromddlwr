import React from 'react'
import { NavLink } from 'react-router-dom'

const Designations = () => {
  return (
    <>
        <div>
            <div className="hdr">Designations</div>
            <div className="lnks">
                <NavLink to='/adddesig'>Add New</NavLink>
            </div>
        </div>
    </>
  )
}

export default Designations