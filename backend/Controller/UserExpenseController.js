
const userExpenseMstModel = require('../Model/UserExpenseModel')

async function addUserExpenseMst(req, res) {

    try {
        const { userexpensedept, deptId, userexpenseloc, locId, userexpensecat, expensecatId,
            userexpensesubcat, expensesubcatId, userexpensehead, expenseheadId,
            userexpensename, userexpensedate, userexpenseamt, userdescription, username ,
            approvestatus ,rejectreason } = req.body

        const data = new userExpenseMstModel({
            userexpensedept,
            deptId,
            userexpenseloc,
            locId,
            userexpensecat,
            expensecatId,
            userexpensesubcat,
            expensesubcatId,
            userexpensehead,
            expenseheadId,
            userexpensename,
            userexpensedate,
            userexpenseamt,
            userdescription,
            username,
            approvestatus,
            rejectreason,
            uploadrcpt: req.file.filename
        });

        const userExpMstData = await data.save();
        res.status(201).send({ msg: "User Expense added successfully", userExpMstData });
    }
    catch (err) {
        console.error(err);  // Log the error for debugging
        res.status(500).send({ msg: "Internal server error", error: err });
    }

}



async function updateUserExpense(req, res) {
    try {
        const {
            userexpensedept,
            deptId,
            userexpenseloc,
            locId,            
            userexpensecat,
            expensecatId,
            userexpensesubcat,
            expensesubcatId,
            userexpensehead,
            expenseheadId,
            userexpensename,
            userexpensedate,            
            userexpenseamt,
            userdescription,
            username,
            approvestatus,
            rejectreason
        } = req.body

        const data = await userExpenseMstModel.updateOne(
            { _id: req.params._id },
            {
                $set: {
                    userexpensedept,
                    deptId,
                    userexpenseloc,
                    locId,            
                    userexpensecat,
                    expensecatId,
                    userexpensesubcat,
                    expensesubcatId,
                    userexpensehead,
                    expenseheadId,
                    userexpensename,
                    userexpensedate,            
                    userexpenseamt,
                    userdescription,
                    username,
                    approvestatus,
                    rejectreason,
                    uploadrcpt: req.file.filename
                }
            }
        )

        if (data.modifiedCount > 0) {
            res.status(200).send({ msg: "Data has been updated" })
        } else {
            res.status(400).send({ msg: "You haven't updated anything" })
        }
    } catch (err) {
        // console.error(err);
        res.status(500).send({ err });
    }
}



// const updateUserExpense = async (req, res) => {
//     try {
//         const userExpId = req.params._id;

//         const updateData = {
//             userexpensedept: req.body.userexpensedept,
//             deptId: req.body.deptId,
//             userexpenseloc: req.body.userexpenseloc,
//             locId: req.body.locId,
//             userexpensecat: req.body.userexpensecat,
//             expensecatId: req.body.expensecatId,
//             userexpensesubcat: req.body.userexpensesubcat,
//             expensesubcatId: req.body.expensesubcatId,
//             userexpensehead: req.body.userexpensehead,
//             expenseheadId: req.body.expenseheadId,
//             userexpensename: req.body.userexpensename,
//             userexpensedate: req.body.userexpensedate,
//             userexpenseamt: req.body.userexpenseamt,
//             userdescription: req.body.userdescription,
//             username: req.body.username
//         };


//         {
//             if (req.files && req.files.uploadrcpt) {
//                 updateData.uploadrcpt = req.files.uploadrcpt[0].filename;
//             } else {
//                 updateData.uploadrcpt = '';
//             }
//         }

//         const updatedDetails = await userExpenseMstModel.findByIdAndUpdate(
//             userExpId,
//             updateData,
//             { new: true }
//         );
//         res.status(200).send({ info: "Update Data", updatedDetails },);
//     } catch (error) {
//         console.log(error);
//     }
// };

async function updateUserApprovalStatus(req, res) {
    try {
        const {
            approvestatus,
            rejectreason
        } = req.body

        const data = await userExpenseMstModel.updateOne(
            { _id: req.params._id },
            {
                $set: {                    
                    approvestatus,
                    rejectreason
                }
            }
        )

        if (data.modifiedCount > 0) {
            res.status(200).send({ msg: "Data has been updated" })
        } else {
            res.status(400).send({ msg: "You haven't updated anything" })
        }
    } catch (err) {
        // console.error(err);
        res.status(500).send({ err });
    }
}

async function finUserExpenses(req, res) {
    try {
        const data = await userExpenseMstModel.find()
        res.status(200).send({ data })

    }
    catch (err) {
        res.status(400).send(err)
    }
}

async function findParticularUserExpense(req, res) {
    try {
        const data = await userExpenseMstModel.findOne({ _id: req.params._id })
        if (data != null) {
            res.status(200).send({ data })
        }
        else {
            res.status(400).send({ message: "This User Expense doesn't exist" })
        }
    } catch (err) {
        res.status(500).send(err)
    }
}


async function deleteUserExpense(req, res) {
    try {
        const data = await userExpenseMstModel.deleteOne({ _id: req.params._id })
        res.status(200).send({ msg: "User Expense deleted Successfully" })
    } catch (err) {
        res.status(500).send(err)
    }
}


module.exports = { addUserExpenseMst, updateUserExpense, finUserExpenses, findParticularUserExpense, deleteUserExpense ,updateUserApprovalStatus}