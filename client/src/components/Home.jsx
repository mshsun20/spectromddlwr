import { useState, useEffect } from 'react'
import Server from '../Server'
import axios from 'axios'

const Home = () => {
  const [av, setAv] = useState()
  const [r, setR] = useState()
  const [cv, setCv] = useState()
  const [sd, setSd] = useState()

  const getdet = async () => {
    try {
      const resav = await axios.get(`${Server}/upldav/read`)
      const resr = await axios.get(`${Server}/upldr/read`)
      const rescv = await axios.get(`${Server}/upldcv/read`)
      const ressd = await axios.get(`${Server}/upldsd/read`)
      const avdta = await resav.data
      const rdta = await resr.data
      const cvdta = await rescv.data
      const sddta = await ressd.data
      // console.log(avdta.data)
      // console.log(rdta.data)
      // console.log(cvdta.data)
      // console.log(sddta.data)
      setAv(avdta.data)
      setR(rdta.data)
      setCv(cvdta.data)
      setSd(sddta.data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
      getdet()
  }, [])

  return (
    <>
        <div>
          <div className="alldta">
            <div className="hdr">Spectrometer Metal Analysis All Sampling Data</div>
            <div className="avsec">
              <div className="hds">AV Values :</div>
              <table>
                <thead>
                  <tr>
                    <th>Sampling Date</th>
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
                    (av) ? av.map((el, i) => (
                      <tr key={i}>
                        <td>{el.sdt}</td>
                        <td>{el.c}</td>
                        <td>{el.mn}</td>
                        <td>{el.si}</td>
                        <td>{el.s}</td>
                        <td>{el.p}</td>
                        <td>{el.al}</td>
                        <td>{el.cr}</td>
                        <td>{el.cu}</td>
                        <td>{el.ni}</td>
                        <td>{el.mo}</td>
                        <td>{el.ti}</td>
                        <td>{el.nb}</td>
                        <td>{el.pb}</td>
                        <td>{el.sn}</td>
                        <td>{el.b}</td>
                        <td>{el.sb}</td>
                        <td>{el.v}</td>
                        <td>{el.co}</td>
                        <td>{el.n}</td>
                        <td>{el.fe}</td>
                      </tr>
                    )) : null
                  }
                </tbody>
              </table>
            </div>
            <div className="rsec">
              <div className="hds">R Values :</div>
              <table>
                <thead>
                  <tr>
                    <th>Sampling Date</th>
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
                    (r) ? r.map((el, i) => (
                      <tr key={i}>
                        <td>{el.sdt}</td>
                        <td>{el.c}</td>
                        <td>{el.mn}</td>
                        <td>{el.si}</td>
                        <td>{el.s}</td>
                        <td>{el.p}</td>
                        <td>{el.al}</td>
                        <td>{el.cr}</td>
                        <td>{el.cu}</td>
                        <td>{el.ni}</td>
                        <td>{el.mo}</td>
                        <td>{el.ti}</td>
                        <td>{el.nb}</td>
                        <td>{el.pb}</td>
                        <td>{el.sn}</td>
                        <td>{el.b}</td>
                        <td>{el.sb}</td>
                        <td>{el.v}</td>
                        <td>{el.co}</td>
                        <td>{el.n}</td>
                        <td>{el.fe}</td>
                      </tr>
                    )) : null
                  }
                </tbody>
              </table>
            </div>
            <div className="cvsec">
              <div className="hds">CV Values :</div>
              <table>
                <thead>
                  <tr>
                    <th>Sampling Date</th>
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
                    (cv) ? cv.map((el, i) => (
                      <tr key={i}>
                        <td>{el.sdt}</td>
                        <td>{el.c}</td>
                        <td>{el.mn}</td>
                        <td>{el.si}</td>
                        <td>{el.s}</td>
                        <td>{el.p}</td>
                        <td>{el.al}</td>
                        <td>{el.cr}</td>
                        <td>{el.cu}</td>
                        <td>{el.ni}</td>
                        <td>{el.mo}</td>
                        <td>{el.ti}</td>
                        <td>{el.nb}</td>
                        <td>{el.pb}</td>
                        <td>{el.sn}</td>
                        <td>{el.b}</td>
                        <td>{el.sb}</td>
                        <td>{el.v}</td>
                        <td>{el.co}</td>
                        <td>{el.n}</td>
                        <td>{el.fe}</td>
                      </tr>
                    )) : null
                  }
                </tbody>
              </table>
            </div>
            <div className="sdsec">
              <div className="hds">SD Values :</div>
              <table>
                <thead>
                  <tr>
                    <th>Sampling Date</th>
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
                    (sd) ? sd.map((el, i) => (
                      <tr key={i}>
                        <td>{el.sdt}</td>
                        <td>{el.c}</td>
                        <td>{el.mn}</td>
                        <td>{el.si}</td>
                        <td>{el.s}</td>
                        <td>{el.p}</td>
                        <td>{el.al}</td>
                        <td>{el.cr}</td>
                        <td>{el.cu}</td>
                        <td>{el.ni}</td>
                        <td>{el.mo}</td>
                        <td>{el.ti}</td>
                        <td>{el.nb}</td>
                        <td>{el.pb}</td>
                        <td>{el.sn}</td>
                        <td>{el.b}</td>
                        <td>{el.sb}</td>
                        <td>{el.v}</td>
                        <td>{el.co}</td>
                        <td>{el.n}</td>
                        <td>{el.fe}</td>
                      </tr>
                    )) : null
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home