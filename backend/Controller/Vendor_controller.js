const vendorModel = require('../Model/Vendor_model')


async function addVendor(req, res) {
    try {
        const data = new vendorModel({
            companyName: req.body.companyName,
            LegalBusinessName: req.body.LegalBusinessName,
            contactPerson: req.body.contactPerson,
            position: req.body.position,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            bankName: req.body.bankName,
            accountName: req.body.accountName,
            accountNumber: req.body.accountNumber,
            gstNumber: req.body.gstNumber,
            notes: req.body.notes
        })
        const vendorData = await data.save()
        res.status(201).send({ msg: "Vendor added successfully", vendorData })
    } catch (err) {
        res.status(400).send({ err })
    }
}

const findVendor = async (req, res) => {
    try {
        const data = await vendorModel.find()
        res.status(200).send({ data })
    } catch (err) {
        res.status(500).send(err)
    }
}


async function updateUser(req,res){
    try{
        const{email}=req.params
        const{companyName,LegalBusinessName,contactPerson,position,phoneNumber,address,bankName,accountName,accountNumber,gstNumber,notes}=req.body

        const data=await vendorModel.updateOne(
            {email},{$set:{companyName,LegalBusinessName,contactPerson,position ,phoneNumber,address,bankName,accountName,accountNumber,notes}}
        )
            res.status(200).send({msg:"Update Successfully"})
        // if(data.modifiedCount>0){
        //     res.status(200).send({msg:"User updated successfully"})
        // }else{
        //     res.status(400).send({msg:"You haven't updated any data"})
        // }
    } catch(error){
        res.status(500).send(err)
    }
}

async function deletevendor(req, res) {
    try {
        const data = await vendorModel.deleteOne({ email: req.params.email })
        res.status(200).send({ msg: "User deleted successfully" })

    } catch (error) {
        res.status(500).send(error)
    }
}

const findparticularUser = async (req,res)=>{
    try{
        const data=await vendorModel.findOne({email:req.params.email})
        if(data !=null){
            res.status(200).send({data})
        } else{
            res.status(400).send({message:"This user doesn't exist"})
        } 

        }catch (error){
            res.status(500).send(err)
    }
}





module.exports = {addVendor,findVendor,updateUser,deletevendor,findparticularUser}


