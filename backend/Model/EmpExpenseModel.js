const mongoose = require('mongoose')

const empExpenseSchema = new mongoose.Schema({    
    employeeid:{
        type:String,
        required:true
    },
    employeename:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    expensedate:{
        type:Date,
        required:true
    },
    expcategory:{
        type:String,
        required:true
    },    
    expdescription:{
        type:String,
        required:true
    },
    suppliername:{
        type:String,
        required:true
    },
    expamount:{
        type:String,
        required:true
    },    
    taskname:{
        type:String,
        required:true 
    },
    taskdesc:{
        type:String,
        required:true
    },
    traveldate:{
        type:Date,
        required:true
    },
    traveldesti:{
        type:String,
        required:true
    },
    purposeofexp:{
        type:String,
        required:true
    },
    notes:{
        type:String,
        required:true
    },
    receiptimg:{
        type:String
    }
}, { timestamps: true })

module.exports = mongoose.model('EmployeeExp',empExpenseSchema)