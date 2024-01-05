const { PythonShell } = require('python-shell')
const fs = require('fs')
const path = require('path')
const FlupldModel = require('../models/flupldModel')


const dirpath = path.join(__dirname, 'data')
let filelist = []
let options = {
    scriptPath: 'D:/All Projects/Company Projects/spectromddlwr/server/uploader'
    // scriptPath: 'D:/Development/Company Projects/spectromddlwr/server/uploader'
}
module.exports = {
    upload: async (req, res) => {
        try {
            const result = await fs.readdir(dirpath, (err, files) => {
                // console.log(files)
                files.forEach(async (fl) => {
                    const filenam = fl
                    const fetch_stat = 'F'
                    // filelist.push[{flname:fl, fetch_stat:'F'}]
                    const Fupl = await FlupldModel.create({filenam, fetch_stat})
                })
            })
            // const result = await PythonShell.run("main.py", options)
            console.log((result))
            // if (result) {
            //     const flnms = await FlupldModel.find()
            //     res.json({success:'Files are listed.', statuscode:200, data:flnms})
            // }
            // else {
            //     res.json({error:'File Auto Upload Error...!', statuscode:400})
            // }
        } catch (error) {
            console.error(error)
        }
    }
}