
const mongoose = require('mongoose')

const expSubCatMstSchema = new mongoose.Schema({

    expcatname: {
        type: String,
        required: true
    },
    expcatId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'expensecatmst',
        required: true
    },
    expsubcatname: {
        type: String,
        required: true
    },
    expsubcatstatus: {
        type: String,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model('expensesubcatmst', expSubCatMstSchema)