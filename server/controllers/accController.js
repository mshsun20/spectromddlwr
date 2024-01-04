const AccModel = require('../models/accModel')

module.exports = {
    create: async (req, res) => {
        const {accname, accphn, accemail, accpass, company, deptid, desigid, empcode} = req.body

        try {
            const Acc = await AccModel.create({accname, accphn, accemail, accpass, company, deptid, desigid, empcode})
            if (Acc) {
                res.json({success:'New Account Created Successfully.', statuscode:200})
            }
            else {
                res.json({error:'New Account Creation Failed.', statuscode:400})
            }
        } catch (error) {
            console.error(error)
        }
    },

    read: async (req, res) => {
        const Acc = await AccModel.find().populate('deptid').populate('desigid')
        res.json({success:'All Accounts data Retrieved Successfully.', statuscode:200, data:Acc})
    },

    update: async (req, res) => {},
    
    delete: async (req, res) => {},
}