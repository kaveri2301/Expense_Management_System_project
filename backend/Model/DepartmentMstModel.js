
const mongoose = require('mongoose')

const deptMstSchema = new mongoose.Schema({
    deptname: {
        type: String,
        required: true
    },
    deptactivestatus: {
        type: String,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model('departmentmst', deptMstSchema)