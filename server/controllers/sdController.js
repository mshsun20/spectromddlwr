const SdModel = require('../models/sdModel')

module.exports = {
    create: async (req, res) => {
        let flg=0
        const sdl=req.body
        // console.log(sdl[0][66])
        
        for (let i=0; i<req.body.length; i++) {
            const sdt = sdl[i][0]
            const c = sdl[i][9]
            const mn = sdl[i][12]
            const si = sdl[i][15]
            const s = sdl[i][18]
            const p = sdl[i][21]
            const al = sdl[i][24]
            const cr = sdl[i][27]
            const cu = sdl[i][30]
            const ni = sdl[i][33]
            const mo = sdl[i][36]
            const ti = sdl[i][39]
            const nb = sdl[i][42]
            const pb = sdl[i][45]
            const sn = sdl[i][48]
            const b = sdl[i][51]
            const sb = sdl[i][54]
            const v = sdl[i][57]
            const co = sdl[i][60]
            const n = sdl[i][63]
            const fe = sdl[i][66]
            try {
                const Sd = await SdModel.create({sdt, c, mn, si, s, p, al, cr, cu, ni, mo, ti, nb, pb, sn, b, sb, v, co, n, fe})
                if (Sd) {
                    flg = 1
                }
            } catch (error) {
                console.error(error)
            }
        }
        // console.log(flg)
        if (flg===1) {
            res.json({success:'New SD added Successfully.', statuscode:200})
        }
        else {
            res.json({error:'New SD addition Failed.', statuscode:422})
        }
    },

    read: async (req, res) => {
        const Sd = await SdModel.find()
        res.json({success:'All SD data Retrieved Successfully.', statuscode:200, data:Sd})
    },

    update: async (req, res) => {},
    
    delete: async (req, res) => {},
}