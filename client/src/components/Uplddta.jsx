import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Server from '../Server'
import axios from 'axios'
import * as XLSX from 'xlsx'
import '../styles/Others.css'

const Uplddta = () => {
    const [exclFil, setExclFil] = useState(null)
    const [excErr, setExcErr] = useState(null)
    const [exclData, setExclData] = useState(null)
    // const [exclMp, setExclMp] = useState(null)
    const [av, setAv] = useState()
    const [r, setR] = useState()
    const [cv, setCv] = useState()
    const [sd, setSd] = useState()
    let selectedfile, av_l=[], r_l=[], cv_l=[], sd_l=[]
    const navig = useNavigate()

    const fileType = ['text/csv']
    // const fileType = ['text/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
    const hndlfile = async (e) => {
        try {
            const res = await axios.get(`${Server}/upld/fetch`)
            const data = await res.data
            console.log(data)

            selectedfile = e.target.files[0]
            // console.log(selectedfile)
            // if (selectedfile.name === "20230825.csv") {
            //     console.log("yes")
            // }
            // else {
            //     console.log("no")
            // }
            if (selectedfile) {
                // console.log(selectedfile.type)
                if (selectedfile&&fileType.includes(selectedfile.type)) {
                    let reader = new FileReader()
                    reader.readAsArrayBuffer(selectedfile)
                    reader.onload = (e) => {
                        setExcErr(null)
                        setExclFil(e.target.result)
                    }
                }
                else {
                    setExcErr(`Please Select Only Excel File Type: ".csv" or ".xlsx"`)
                    setExclFil(null)
                }
            }
            else {
                console.log(`Please Select an Excel File.`)
            }
        } catch (error) {
            console.error(error)
        }

        // selectedfile = e.target.files[0]
        // // if (selectedfile.name === "20230825.csv") {
        // //     console.log("yes")
        // // }
        // // else {
        // //     console.log("no")
        // // }
        // // console.log(selectedfile.name)
        // if (selectedfile) {
        //     // console.log(selectedfile.type)
        //     if (selectedfile&&fileType.includes(selectedfile.type)) {
        //         let reader = new FileReader()
        //         reader.readAsArrayBuffer(selectedfile)
        //         reader.onload = (e) => {
        //             setExcErr(null)
        //             setExclFil(e.target.result)
        //         }
        //     }
        //     else {
        //         setExcErr(`Please Select Only Excel File Type: ".csv" or ".xlsx"`)
        //         setExclFil(null)
        //     }
        // }
        // else {
        //     console.log(`Please Select an Excel File.`)
        // }
    }
    const hndlsub = async (e) => {
        e.preventDefault()
        if (exclFil!==null) {
            const workbook = XLSX.read(exclFil, {type: 'buffer'})
            const wsname = workbook.SheetNames[0]
            const ws = workbook.Sheets[wsname]
            // const data = XLSX.utils.sheet_to_json(ws)
            // console.log(data)
            // setExclData(data)
            const dataa = XLSX.utils.sheet_to_json(ws, {header: 1})
            console.log(dataa)
            setExclData(dataa)
            // setExclMp(dataa[0])
            // console.log(dataa[0].indexOf('account_name')!==-1)
            for (let i=0; i<dataa.length; i++) {
                if (dataa[i][2]==='AV') {
                    av_l.push(dataa[i])
                }
                if (dataa[i][2]==='R') {
                    r_l.push(dataa[i])
                }
                if (dataa[i][2]==='CV') {
                    cv_l.push(dataa[i])
                }
                if (dataa[i][2]==='SD') {
                    sd_l.push(dataa[i])
                }
            }
            // console.log(av_l)
            // console.log(r_l)
            // console.log(cv_l)
            // console.log(sd_l)
            setAv(av_l)
            setR(r_l)
            setCv(cv_l)
            setSd(sd_l)
        }
        else {
            setExclData(null)
        }
    }
    const hndlupld = async () => {
        const resav = await axios.post(`${Server}/upldav/create`, av)
        const resr = await axios.post(`${Server}/upldr/create`, r)
        const rescv = await axios.post(`${Server}/upldcv/create`, cv)
        const ressd = await axios.post(`${Server}/upldsd/create`, sd)
        const avdta = await resav.data
        const rdta = await resr.data
        const cvdta = await rescv.data
        const sddta = await ressd.data
        // console.log(avdta)
        // console.log(rdta)
        // console.log(cvdta)
        // console.log(sddta)
        if (avdta.statuscode === 422) {
            console.error(avdta.error)
        }
        else if (rdta.statuscode === 422) {
            console.error(rdta.error)
        }
        else if (cvdta.statuscode === 422) {
            console.error(cvdta.error)
        }
        else if (sddta.statuscode === 422) {
            console.error(sddta.error)
        }
        else {
            window.alert(`All Sample Data Successfully Stored into Database.`)
            navig('/')
        }
    }

  return (
    <>
        <div>
            <div className='impacc'>
                <div className="upldsect">
                    <form className='frm' onSubmit={hndlsub}>
                        <div className="frmgrp">
                            <label htmlFor="accimp">Upload File</label>
                            <input type="file" name="accimp" id="accimp" onChange={hndlfile} />
                            {excErr&&<div className='text-danger' style={{marginTop:5+'px'}}>{excErr}</div>}
                        </div>
                        <div className="frmgrp">
                            <input type="submit" value="Show Data" />
                        </div>
                    </form>
                </div>
                <div className="viewsect">
                    {exclData===null&&<>No File Selected</>}
                    {exclData!==null&&(
                        <>
                            <button onClick={hndlupld}>Upload</button>
                            <table border='1'>
                                <thead>
                                    <tr>
                                        <th>Sample Date</th>
                                        <th>Samping Type</th>
                                        <th>Batch/Lot</th>
                                        <th>C</th>
                                        <th>Mn</th>
                                        <th>Si</th>
                                        <th>S</th>
                                        <th>P</th>
                                        <th>Al</th>
                                        <th>Cr</th>
                                        <th>Cu</th>
                                        <th>Ni</th>
                                        <th>Mo</th>
                                        <th>Ti</th>
                                        <th>Nb</th>
                                        <th>Pb</th>
                                        <th>Sn</th>
                                        <th>B</th>
                                        <th>Sb</th>
                                        <th>V</th>
                                        <th>Co</th>
                                        <th>N</th>
                                        <th>Fe</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        exclData.map((elm, i) => (
                                            <tr key={i}>
                                                <td>{elm[0]}</td>
                                                <td>{elm[2]}</td>
                                                <td>{elm[7]}</td>
                                                <td>{elm[9]}</td>
                                                <td>{elm[12]}</td>
                                                <td>{elm[15]}</td>
                                                <td>{elm[18]}</td>
                                                <td>{elm[21]}</td>
                                                <td>{elm[24]}</td>
                                                <td>{elm[27]}</td>
                                                <td>{elm[30]}</td>
                                                <td>{elm[33]}</td>
                                                <td>{elm[36]}</td>
                                                <td>{elm[39]}</td>
                                                <td>{elm[42]}</td>
                                                <td>{elm[45]}</td>
                                                <td>{elm[48]}</td>
                                                <td>{elm[51]}</td>
                                                <td>{elm[54]}</td>
                                                <td>{elm[57]}</td>
                                                <td>{elm[60]}</td>
                                                <td>{elm[63]}</td>
                                                <td>{elm[66]}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </>
                    )}
                </div>
            </div>
        </div>
    </>
  )
}

export default Uplddta