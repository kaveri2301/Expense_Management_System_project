
const mongoose = require('mongoose')

const locationMstSchema = new mongoose.Schema({
    locationname: {
        type: String,
        required: true
    },
    city:{
        type : String,
        required:true
    },
    // cityId:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'citymsts',
    //     required: true
    // },
    address: {
        type: String,
        required: true
    },
    locactivestatus: {
        type: String,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model('LocationMaster', locationMstSchema)