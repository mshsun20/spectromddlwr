const mongoose = require('mongoose')

const FlupldSchema = mongoose.Schema({
    filenam: {
        type: String,
        required: true,
        unique: true
    },
    fetch_stat: {
        type: String,
        required: true,
        default: 'F'
    }
    // created_on: {
    //     type: String,
    //     required: true,
    //     default: Date.now()
    // }
},
{
    timestamp: true
})

module.exports = mongoose.model('filelist', FlupldSchema)