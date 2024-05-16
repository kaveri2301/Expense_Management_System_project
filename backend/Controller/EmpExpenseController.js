const empExpenseModel = require('../Model/EmpExpenseModel')


const addEmpExpense = async (req, res) => {
    try {
        const { employeeid, employeename, department,
            expensedate, expcategory, expdescription, suppliername, expamount,
            taskname, taskdesc, traveldate, traveldesti, purposeofexp, notes

        } = req.body

        const data = new empExpenseModel({
            employeeid,
            employeename,
            department,
            expensedate,
            expcategory,
            expdescription,
            suppliername,
            expamount,
            taskname,
            taskdesc,
            traveldate,
            traveldesti,
            purposeofexp,
            notes,
            receiptimg: req.file.filename
        })
        const empExpensedata = await data.save()
        res.status(200).send({ msg: "Employee Expense added successfully", empExpensedata })
    }
    catch (err) {
        console.error(err);  // Log the error for debugging
        res.status(500).send({ msg: "Internal server error", error: err });
    }
}

// async function updateEmpExpense(req, res) {
//     try {
//         const { department,
//             expensedate, expcategory, expdescription, suppliername, expamount,
//             taskname, taskdesc, traveldate, traveldesti, purposeofexp, notes
//         } = req.body

//         // const updateFields = {
//         //     department,
//         //     expensedate,
//         //     expcategory,
//         //     expdescription,
//         //     suppliername,
//         //     expamount,
//         //     taskname,
//         //     taskdesc,
//         //     traveldate,
//         //     traveldesti,
//         //     purposeofexp,
//         //     notes,
//         // };

//         // // Add the receiptimg field only if req.file.filename exists
//         // if (req.file && req.file.filename) {
//         //     updateFields.receiptimg = req.file.filename;
//         // }

//         // const data = await empExpenseModel.updateOne(
//         //     { _id: req.params._id },
//         //     { $set: updateFields }
//         // );

//         const data = await empExpenseModel.updateOne(
//             { _id: req.params._id },
//             {
//                 $set:
//                 {                   
//                     department,
//                     expensedate,
//                     expcategory,
//                     expdescription,
//                     suppliername,
//                     expamount,
//                     taskname,
//                     taskdesc,
//                     traveldate,
//                     traveldesti,
//                     purposeofexp,
//                     notes,
//                     receiptimg: req.file.filename
//                 }
//             }
//         )

//         if (data.modifiedCount > 0) {
//             res.status(200).send({ msg: "Your Data is updated succesfully" })
//         }
//         else {
//             res.status(400).send({ msg: "you haven't update any data" })
//         }
//     }
//     catch (err) {
//         console.error(err);
//         res.status(500).send({ err: err.message });
//     }
// }

async function updateEmpExpense(req, res) {
    try {
        const {
            department,
            expensedate,
            expcategory,
            expdescription,
            suppliername,
            expamount,
            taskname,
            taskdesc,
            traveldate,
            traveldesti,
            purposeofexp,
            notes,
        } = req.body;

        const updateFields = {
            department,
            expensedate,
            expcategory,
            expdescription,
            suppliername,
            expamount,
            taskname,
            taskdesc,
            traveldate,
            traveldesti,
            purposeofexp,
            notes,
        };

        // Add the receiptimg field only if req.file.filename exists
        if (req.file && req.file.filename) {
            updateFields.receiptimg = req.file.filename;
        }

        const data = await empExpenseModel.updateOne(
            { _id: req.params._id },
            { $set: updateFields }
        );

        if (data.modifiedCount > 0) {
            res.status(200).send({ msg: "Your Data is updated successfully" });
        } else {
            res.status(400).send({ msg: "You haven't updated any data" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ err: err.message });
    }
}


const findEmpExpense = async (req, res) => {
    try {
        const data = await empExpenseModel.find()
        res.status(200).send({ data })
    }
    catch (err) {
        res.status(500).send(err)
    }
}

async function findParticularEmpExpense(req, res) {
    try {
        const data = await empExpenseModel.findOne({ _id: req.params._id })
        if (data != null) {
            res.status(200).send({ data })
        }
        else {
            res.status(400).send({ message: "This Employee Expense doesn't exist" })
        }
    } catch (err) {
        res.status(500).send(err)
    }
}


async function deleteEmpExpense(req, res) {
    try {
        const data = await empExpenseModel.deleteOne({ _id: req.params._id })
        if (data.deletedCount > 0) {
            res.status(200).send({ msg: "User deleted successfully" })
        } else {
            res.status(400).send({ msg: "Data you are trying to delete doesn't exist" })
        }
    }
    catch (err) {
        res.status(500).send(err)
    }
}

module.exports = { addEmpExpense, findEmpExpense, findParticularEmpExpense, deleteEmpExpense, updateEmpExpense }