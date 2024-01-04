const mongoose = require('mongoose')

const AccSchema = new mongoose.Schema({
    accname: {
        type: String,
        required: true
    },
    accphn: {
        type: String,
        required: true
    },
    accemail: {
        type: String,
        required: true
    },
    accpass: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    deptid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    },
    desigid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Designation'
    },
    empcode: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Account', AccSchema)