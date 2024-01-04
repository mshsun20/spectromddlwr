const mongoose = require('mongoose')

const DeptSchema = new mongoose.Schema({
    deptname: {
        type: String,
        required: true
    },
    deptinfo: {
        type: String
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Department', DeptSchema)