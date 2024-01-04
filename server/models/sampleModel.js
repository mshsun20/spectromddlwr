const mongoose = require('mongoose')

const AccSchema = new mongoose.Schema({
    sampledt: {
        type: String,
        required: true
    },
    avid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AV'
    },
    rid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'R'
    },
    cvid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CV'
    },
    sdid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SD'
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Account', AccSchema)