import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import server from '../../Server'
import axios from 'axios'

const Adddesig = () => {
    let name, value
    const [vl, setVl] = useState()
    const navig = useNavigate()

    const hndlinp = (e) => {
        name = e.target.name
        value = e.target.value
        setVl({...vl, [name]:value})
    }

    const hndlsub = async (e) => {
        e.preventDefault()
        const {designame, desigdet, role} = vl

        try {
            const res = await axios.post(`${server}/desig/create`, {designame, desigdet, role})
            const data = await res.data
            if (data.statuscode === 200) {
                alert(data.success)
                navig('/desig')
            }
            else {
                alert(data.error)
            }
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
        <div>
            <div className="hdr">Add Designation</div>
            <form className="frm">
                <div className="frmgrp">
                    <label htmlFor="designame">Designation Name</label>
                    <input type="text" name="designame" id="designame" onChange={hndlinp} />
                </div>
                <div className="frmgrp">
                    <label htmlFor="desigdet">Designation Details</label>
                    <input type="text" name="desigdet" id="desigdet" onChange={hndlinp} />
                </div>
                <div className="frmgrp">
                    <label htmlFor="role">Roles</label>
                    <input type="text" name="role" id="role" onChange={hndlinp} />
                </div>
                <div className="frmgrp">
                    <input type="submit" value="Add" onClick={hndlsub} />
                </div>
            </form>
        </div>
    </>
  )
}

export default Adddesig