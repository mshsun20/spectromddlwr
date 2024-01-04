const mongoose = require('mongoose')

const AvSchema = new mongoose.Schema({
    sdt: {
        type: String,
        required: true
    },
    c: {
        type: String,
        required: true
    },
    mn: {
        type: String,
        required: true
    },
    si: {
        type: String,
        required: true
    },
    s: {
        type: String,
        required: true
    },
    p: {
        type: String,
        required: true
    },
    al: {
        type: String
    },
    cr: {
        type: String
    },
    cu: {
        type: String
    },
    ni: {
        type: String
    },
    mo: {
        type: String
    },
    ti: {
        type: String
    },
    nb: {
        type: String
    },
    pb: {
        type: String
    },
    sn: {
        type: String
    },
    b: {
        type: String
    },
    sb: {
        type: String
    },
    v: {
        type: String
    },
    co: {
        type: String
    },
    n: {
        type: String
    },
    fe: {
        type: String
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('AV', AvSchema)