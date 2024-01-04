const mongoose = require('mongoose')

const DesigSchema = new mongoose.Schema({
    designame: {
        type: String,
        required: true
    },
    desigdet: {
        type: String
    },
    role: {
        type: String
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Designation', DesigSchema)