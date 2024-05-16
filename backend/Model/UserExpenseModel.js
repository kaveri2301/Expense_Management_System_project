
const mongoose = require('mongoose')

const userExpMstSchema = new mongoose.Schema({
    userexpensedept: {
        type: String,
        required: true
    },
    deptId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'departmentmsts',
        required: true
    },
    userexpenseloc: {
        type: String,
        required: true
    },
    locId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'locationmsts',
        required: true
    },
    userexpensecat: {
        type: String,
        required: true
    },
    expensecatId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'expensecatmsts',
        required: true
    },
    userexpensesubcat: {
        type: String,
        required: true
    },
    expensesubcatId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'expensesubcatmsts',
        required: true
    },
    userexpensehead: {
        type: String,
        required: true
    },
    expenseheadId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'expenseheadmsts',
        required: true
    },
    userexpensename: {
        type: String,
        required: true
    },
    userexpensedate: {
        type: Date,
        required: true,
        default: Date.now
    },
    userdescription: {
        type: String,
        required: true
    },    
    userexpenseamt: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    uploadrcpt: {
        type: String,
       
    },
    approvestatus:{
        type : String,
        required :true,
        default  : "pending"
    },
    rejectreason:{
        type : String,
        // required :true
    }

},{ timestamps: true })
//, { timestamps: true }

module.exports = mongoose.model('userexpense', userExpMstSchema)