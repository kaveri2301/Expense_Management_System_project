
const expHeadMstModel = require('../Model/ExpenseHeadMstModel')


async function addExpenseHead(req, res) {

    try {
        const { expheadcatname, expheadcatId, expensesubcatname, expensesubcatId, suppliername, supplierId,
            expenseheadname, expenseprice, expheadactivestatus } = req.body

        const data = new expHeadMstModel({
            expheadcatname,
            expheadcatId,
            expensesubcatname,
            expensesubcatId,
            suppliername,
            supplierId,
            expenseheadname,
            expenseprice,
            expheadactivestatus
        });

        const expenseHeadMstData = await data.save();
        res.status(201).send({ msg: "Expense Head added successfully", expenseHeadMstData });
    } catch (err) {
        res.status(400).send({ err });
    }
}


async function updateExpenseHead(req, res) {
    try {
        const {
            expheadcatname,
            expheadcatId,
            expensesubcatname,
            expensesubcatId,
            suppliername,
            supplierId,
            expenseheadname,
            expenseprice,
            expheadactivestatus
        } = req.body

        const data = await expHeadMstModel.updateOne(
            { _id: req.params._id },
            {
                $set: {
                    expheadcatname,
                    expheadcatId,
                    expensesubcatname,
                    expensesubcatId,
                    suppliername,
                    supplierId,
                    expenseheadname,
                    expenseprice,
                    expheadactivestatus
                }
            }
        )

        if (data.modifiedCount > 0) {
            res.status(200).send({ msg: "Data has been updated" })
        } else {
            res.status(400).send({ msg: "You haven't updated anything" })
        }
    } catch (err) {
        res.status(500).send({ err });
    }
}


async function findExpenseHead(req, res) {
    try {
        const data = await expHeadMstModel.find()
        res.status(200).send({ data })
    }
    catch (err) {
        res.status(400).send(err)
    }
}


async function findParticularExpenseHead(req, res) {
    try {
        const data = await expHeadMstModel.findOne({ _id: req.params._id })
        if (data != null) {
            res.status(200).send({ data })
        }
        else {
            res.status(400).send({ message: "This Expense Head doesn't exist" })
        }
    } catch (err) {
        res.status(500).send(err)
    }
}

async function deleteExpenseHead(req, res) {
    try {
        const data = await expHeadMstModel.deleteOne({ _id: req.params._id })
        res.status(200).send({ msg: "Expense Head deleted Successfully" })
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports = { addExpenseHead, updateExpenseHead, findParticularExpenseHead, findExpenseHead, deleteExpenseHead }