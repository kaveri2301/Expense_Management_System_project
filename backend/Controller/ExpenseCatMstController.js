
const expcatmstModel = require('../Model/ExpenseCatMstModel')


async function addExpenseCategory(req, res) {

    try {
        const { expensecatname, expcatstatus } = req.body

        const data = new expcatmstModel({
            expensecatname,
            expcatstatus
        });

        const expenseCatMstData = await data.save();
        res.status(201).send({ msg: "Expense Category added successfully", expenseCatMstData });
    } catch (err) {
        res.status(400).send({ err });
    }
}


async function updateExpenseCategory(req, res) {
    try {
        const {
            expensecatname,
            expcatstatus
        } = req.body

        const data = await expcatmstModel.updateOne(
            { _id: req.params._id },
            {
                $set: {
                    expensecatname,
                    expcatstatus
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


async function findExpenseCategory(req, res) {
    try {
        const data = await expcatmstModel.find()
        res.status(200).send({ data })
    }
    catch (err) {
        res.status(400).send(err)
    }
}


async function findParticularExpenseCategory(req, res) {
    try {
        const data = await expcatmstModel.findOne({ _id: req.params._id })
        if (data != null) {
            res.status(200).send({ data })
        }
        else {
            res.status(400).send({ message: "This Expense Category doesn't exist" })
        }
    } catch (err) {
        res.status(500).send(err)
    }
}

async function deleteExpenseCategory(req, res) {
    try {
        const data = await expcatmstModel.deleteOne({ _id: req.params._id })
        res.status(200).send({ msg: "Expense Category deleted Successfully" })
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports = { addExpenseCategory , updateExpenseCategory , findExpenseCategory , findParticularExpenseCategory , deleteExpenseCategory }