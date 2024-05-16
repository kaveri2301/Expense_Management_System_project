
const employeeMstModel = require('../Model/EmployeeRecordModel')


async function addEmployeeMst(req, res) {

    try {
        const { empnumber, empname, empdeptname,empdeptId, emplocname,emplocId,emppancard, empaadharcard, empemailid, empmobile, empactivestatus } = req.body

        const data = new employeeMstModel({
            empnumber,
            empname,
            empdeptname,
            empdeptId,
            emplocname,
            emplocId,
            emppancard,
            empaadharcard,
            empemailid,
            empmobile,
            empactivestatus
        });

        const employeeMstData = await data.save();
        res.status(201).send({ msg: "Employee added successfully", employeeMstData });
    } catch (err) {
        res.status(400).send({ err });
    }
}

async function findRecord(req, res) {
    try {
        const data = await employeeMstModel.find()
        res.status(200).send({ data })

    }
    catch (err) {
        res.status(400).send(err)
    }
}


async function findParticularRecord(req, res) {
    try {
        const data = await employeeMstModel.findOne({ _id: req.params._id })
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


async function updateRecord(req, res) {
    try {
        const {
            empnumber,
            empname,
            empdeptname,
            empdeptId,
            emplocname,
            emplocId,
            emppancard,
            empaadharcard,
            empemailid,
            empmobile,
            empactivestatus
         } = req.body
        const data = await employeeMstModel.updateOne(
            { _id: req.params._id },
            {
                $set:
                {
                    empnumber,
                    empname,
                    empdeptname,
                    empdeptId,
                    emplocname,
                    emplocId,
                    emppancard,
                    empaadharcard,
                    empemailid,
                    empmobile,
                    empactivestatus
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


async function deleteEmployeeRecord(req, res) {
    try {
        const data = await employeeMstModel.deleteOne({ _id: req.params._id })
        res.status(200).send({ msg: "Employee deleted Successfully" })
    } catch (err) {
        res.status(500).send(err)
    }
}


module.exports = { addEmployeeMst, findRecord, updateRecord, findParticularRecord , deleteEmployeeRecord}