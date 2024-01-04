const CvModel = require('../models/cvModel')

module.exports = {
    create: async (req, res) => {
        let flg=0
        const cvl=req.body
        // console.log(cvl[0][66])
        
        for (let i=0; i<req.body.length; i++) {
            const sdt = cvl[i][0]
            const c = cvl[i][9]
            const mn = cvl[i][12]
            const si = cvl[i][15]
            const s = cvl[i][18]
            const p = cvl[i][21]
            const al = cvl[i][24]
            const cr = cvl[i][27]
            const cu = cvl[i][30]
            const ni = cvl[i][33]
            const mo = cvl[i][36]
            const ti = cvl[i][39]
            const nb = cvl[i][42]
            const pb = cvl[i][45]
            const sn = cvl[i][48]
            const b = cvl[i][51]
            const sb = cvl[i][54]
            const v = cvl[i][57]
            const co = cvl[i][60]
            const n = cvl[i][63]
            const fe = cvl[i][66]
            try {
                const Cv = await CvModel.create({sdt, c, mn, si, s, p, al, cr, cu, ni, mo, ti, nb, pb, sn, b, sb, v, co, n, fe})
                if (Cv) {
                    flg = 1
                }
            } catch (error) {
                console.error(error)
            }
        }
        // console.log(flg)
        if (flg===1) {
            res.json({success:'New CV added Successfully.', statuscode:200})
        }
        else {
            res.json({error:'New CV addition Failed.', statuscode:422})
        }
    },

    read: async (req, res) => {
        const Cv = await CvModel.find()
        res.json({success:'All CV data Retrieved Successfully.', statuscode:200, data:Cv})
    },

    update: async (req, res) => {},
    
    delete: async (req, res) => {},
}