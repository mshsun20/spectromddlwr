const DeptModel = require('../models/deptModel')

module.exports = {
    create: async (req, res) => {
        const {deptname, deptinfo} = req.body

        try {
            const Dept = await DeptModel.create({deptname, deptinfo})
            if (Dept) {
                res.json({success:'New Department Created Successfully.', statuscode:200})
            }
            else {
                res.json({error:'New Department Creation Failed.', statuscode:400})
            }
        } catch (error) {
            console.error(error)
        }
    },

    read: async (req, res) => {
        const Dept = await DeptModel.find()
        res.json({success:'Department data Retrieved Successfully.', statuscode:200, data:Dept})
    },

    update: async (req, res) => {},
    
    delete: async (req, res) => {},
}