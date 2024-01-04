const { PythonShell } = require('python-shell')
const flupldModel = require('../models/flupldModel')

let options = {
    scriptPath: 'D:/All Projects/Company Projects/spectromddlwr/server/uploader'
    // scriptPath: 'D:/Development/Company Projects/spectromddlwr/server/uploader'
}
module.exports = {
    upload: async (req, res) => {
        try {
            const result = await PythonShell.run("main.py", options)
            // console.log((result))
            if (result) {
                const flnms = await flupldModel.find()
                res.json({success:'Files are listed.', statuscode:200, data:flnms})
            }
            else {
                res.json({error:'File Auto Upload Error...!', statuscode:400})
            }
        } catch (error) {
            console.error(error)
        }
    }
}