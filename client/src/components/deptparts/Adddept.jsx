import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import server from '../../Server'
import axios from 'axios'

const Adddept = () => {
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
        const {deptname, deptinfo} = vl

        try {
            const res = await axios.post(`${server}/dept/create`, {deptname, deptinfo})
            const data = await res.data
            if (data.statuscode === 200) {
                alert(data.success)
                navig('/dept')
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
            <div className="hdr">Add Department</div>
            <form className="frm">
                <div className="frmgrp">
                    <label htmlFor="deptname">Department Name</label>
                    <input type="text" name="deptname" id="deptname" onChange={hndlinp} />
                </div>
                <div className="frmgrp">
                    <label htmlFor="deptinfo">Department Info</label>
                    <input type="text" name="deptinfo" id="deptinfo" onChange={hndlinp} />
                </div>
                <div className="frmgrp">
                    <input type="submit" value="Add" onClick={hndlsub} />
                </div>
            </form>
        </div>
    </>
  )
}

export default Adddept