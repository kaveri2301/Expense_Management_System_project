
const mongoose = require('mongoose')

const expSubCatMstSchema = new mongoose.Schema({
    expheadcatname: {
        type: String,
        required: true
    },
    expheadcatId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'expensecatmst',
        required: true
    },
    expensesubcatname: {
        type: String,
        required: true
    },
    expensesubcatId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'expensesubcatmsts',
        required: true
    },
    suppliername: {
        type: String,
        required: true
    },
    supplierId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vendors',
        required: true
    },
    expenseheadname: {
        type: String,
        required: true
    },
    expenseprice : {
        type: String,
        required: true
    },
    expheadactivestatus: {
        type: String,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model('expenseheadmst', expSubCatMstSchema)