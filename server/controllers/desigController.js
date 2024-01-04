const DesigModel = require('../models/desigModel')

module.exports = {
    create: async (req, res) => {
        const {designame, desigdet, role} = req.body

        try {
            const Desig = await DesigModel.create({designame, desigdet, role})
            if (Desig) {
                res.json({success:'New Designation Created Successfully.', statuscode:200})
            }
            else {
                res.json({error:'New Designation Creation Failed.', statuscode:400})
            }
        } catch (error) {
            console.error(error)
        }
    },

    read: async (req, res) => {
        const Desig = await DesigModel.find()
        res.json({success:'Designation data Retrieved Successfully.', statuscode:200, data:Desig})
    },

    update: async (req, res) => {},
    
    delete: async (req, res) => {},
}