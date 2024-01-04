const RModel = require('../models/rModel')

module.exports = {
    create: async (req, res) => {
        let flg=0
        const rl=req.body
        // console.log(rl[0][66])
        
        for (let i=0; i<req.body.length; i++) {
            const sdt = rl[i][0]
            const c = rl[i][9]
            const mn = rl[i][12]
            const si = rl[i][15]
            const s = rl[i][18]
            const p = rl[i][21]
            const al = rl[i][24]
            const cr = rl[i][27]
            const cu = rl[i][30]
            const ni = rl[i][33]
            const mo = rl[i][36]
            const ti = rl[i][39]
            const nb = rl[i][42]
            const pb = rl[i][45]
            const sn = rl[i][48]
            const b = rl[i][51]
            const sb = rl[i][54]
            const v = rl[i][57]
            const co = rl[i][60]
            const n = rl[i][63]
            const fe = rl[i][66]
            try {
                const R = await RModel.create({sdt, c, mn, si, s, p, al, cr, cu, ni, mo, ti, nb, pb, sn, b, sb, v, co, n, fe})
                if (R) {
                    flg = 1
                }
            } catch (error) {
                console.error(error)
            }
        }
        // console.log(flg)
        if (flg===1) {
            res.json({success:'New R added Successfully.', statuscode:200})
        }
        else {
            res.json({error:'New R addition Failed.', statuscode:422})
        }
    },

    read: async (req, res) => {
        const R = await RModel.find()
        res.json({success:'All R data Retrieved Successfully.', statuscode:200, data:R})
    },

    update: async (req, res) => {},
    
    delete: async (req, res) => {},
}