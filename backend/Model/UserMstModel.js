
const mongoose = require('mongoose')

const userMstSchema = new mongoose.Schema({
    userdeptname: {
        type: String,
        required: true
    },
    deptId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'departmentmsts',
        required: true
    },
    userlocname: {
        type: String,
        required: true
    },    
    locId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'locationmsts',
        required: true
    },
    employeename: {
        type: String,
        required: true
    },
    empId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employeemsts',
        required: true
    },
    username : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    confirmpass : {
        type: String,
        required: true
    },
    useractivestatus : {
        type: String,
        required: true
    },
    token:{
        type:String
     }
}, { timestamps: true })


module.exports = mongoose.model('Userlogin', userMstSchema)