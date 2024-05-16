
const mongoose = require('mongoose')

const employeeMstSchema = new mongoose.Schema({
    empnumber: {
        type: String,
        required: true
    },
    empname: {
        type: String,
        required: true
    },    
    empdeptname: {
        type: String,
        required: true
    },
    empdeptId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'departmentmsts',
        required: true
    },
    emplocname : {
        type : String,
        required : true
    },
    emplocId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'locationmsts',
        required: true
    },
    emppancard : {
        type: String,
        required: true
    },
    empaadharcard : {
        type: String,
        required: true
    },
    empemailid : {
        type: String,
        required: true
    },
    empmobile : {
        type: String,
        required: true
    },
    empactivestatus : {
        type: String,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model('employeemst', employeeMstSchema)