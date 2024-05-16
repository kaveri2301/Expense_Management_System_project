const mongoose= require ('mongoose')

/*
    This function creates a schema.
    A schema is nothing but it defines what the structure
    of particular collection should be
*/
const vendorSchema = new mongoose.Schema({
    companyName:{
    type:String,
    required:true
   },


   LegalBusinessName:{
      type:String,
     
   },

   contactPerson:{
    type:String,
   
    required:true
 },

 position:{
    type:String,
    required:true
},

email:{
    type:String,
    required:true 
},

phoneNumber:{
    type:String,
    required:true 
},

address:{
    type:String,
    required:true
},

bankName:{
    type:String,
    required:true
},

accountName:{
    type:String,
    required:true 
},
accountNumber:{
    type:String,
    required:true 
},
gstNumber:{
    type:String,
    required:true 
},
notes:{
    type:String,
    required:true
},

} ,{timestamps:true})


//Here we are creating a model and exporting the same
module.exports = mongoose.model('vendor', vendorSchema)