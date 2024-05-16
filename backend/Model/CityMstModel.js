
const mongoose = require('mongoose')

const cityMstSchema = new mongoose.Schema({
    cityname: {
        type: String,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model('citymst', cityMstSchema)