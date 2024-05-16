
const mongoose = require('mongoose')

const expCatMstSchema = new mongoose.Schema({
    expensecatname: {
        type: String,
        required: true
    },
    expcatstatus: {
        type: String,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model('expensecatmst', expCatMstSchema)