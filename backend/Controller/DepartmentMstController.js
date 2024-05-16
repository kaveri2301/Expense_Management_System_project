
const deptmstModel = require('../Model/DepartmentMstModel')


async function addDepartment(req, res) {

    try {
        const { deptname, deptactivestatus } = req.body

        const data = new deptmstModel({
            deptname,
            deptactivestatus
        });

        const departmentMstData = await data.save();
        res.status(201).send({ msg: "Department added successfully", departmentMstData });
    } catch (err) {
        res.status(400).send({ err });
    }
}


async function findDepartment(req, res) {
    try {
        const data = await deptmstModel.find()
        res.status(200).send({ data })
    }
    catch (err) {
        res.status(400).send(err)
    }
}


async function findParticularDepartment(req, res) {
    try {
        const data = await deptmstModel.findOne({_id: req.params._id })
        if (data != null) {
            res.status(200).send({ data })
        }
        else {
            res.status(400).send({ message: "This employee doesn't exist" })
        }
    } catch (err) {
        res.status(500).send(err)
    }
}


async function updateDepartment(req, res) {
    try {
        const {  deptname, deptactivestatus  } = req.body

        const data = await deptmstModel.updateOne(
            {_id: req.params._id},
            { $set: 
                { 
                    deptname, deptactivestatus 
                } 
            }
        )
        if (data.modifiedCount > 0) {
            res.status(200).send({ msg: "Data has been updated" })
        } else {
            res.status(400).send({ msg: "You haven't updated anything" })
        }
    } catch (err) {
        res.status(500).send({ err })
    }
}

async function deleteDepartment(req, res) {
    try {
        const data = await deptmstModel.deleteOne({ _id: req.params._id })
        res.status(200).send({ msg: "Department deleted Successfully" })
    } catch (err) {
        res.status(500).send(err)
    }
}


module.exports = { addDepartment,findDepartment,findParticularDepartment,updateDepartment , deleteDepartment}