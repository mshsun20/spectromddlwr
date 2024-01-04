const AvModel = require('../models/avModel')

module.exports = {
    create: async (req, res) => {
        let flg=0
        const avl=req.body
        // console.log(avl[0][66])
        
        for (let i=0; i<req.body.length; i++) {
            const sdt = avl[i][0]
            const c = avl[i][9]
            const mn = avl[i][12]
            const si = avl[i][15]
            const s = avl[i][18]
            const p = avl[i][21]
            const al = avl[i][24]
            const cr = avl[i][27]
            const cu = avl[i][30]
            const ni = avl[i][33]
            const mo = avl[i][36]
            const ti = avl[i][39]
            const nb = avl[i][42]
            const pb = avl[i][45]
            const sn = avl[i][48]
            const b = avl[i][51]
            const sb = avl[i][54]
            const v = avl[i][57]
            const co = avl[i][60]
            const n = avl[i][63]
            const fe = avl[i][66]
            try {
                const Av = await AvModel.create({sdt, c, mn, si, s, p, al, cr, cu, ni, mo, ti, nb, pb, sn, b, sb, v, co, n, fe})
                if (Av) {
                    flg = 1
                }
            } catch (error) {
                console.error(error)
            }
        }
        // console.log(flg)
        if (flg===1) {
            res.json({success:'New AV added Successfully.', statuscode:200})
        }
        else {
            res.json({error:'New AV addition Failed.', statuscode:422})
        }
    },

    read: async (req, res) => {
        try {
            const Av = await AvModel.find()
            res.json({success:'All AV data Retrieved Successfully.', statuscode:200, data:Av})
        } catch (error) {
            console.error(error)
        }
    },

    update: async (req, res) => {},
    
    delete: async (req, res) => {},
}