
const expsubcategoryModel = require('../Model/ExpenseSubCategoryModel')


async function addExpenseSubCat(req, res) {
    try {
        const {expcatname, expcatId,  expsubcatname, expsubcatstatus } = req.body;

        if (!expcatId || !expcatname || !expsubcatname || !expsubcatstatus) {
            return res.status(400).send({ msg: "Please provide all the required fields." });
        }

        const data = new expsubcategoryModel({            
            expcatname,
            expcatId,
            expsubcatname,
            expsubcatstatus
        });

        const expenseSubCatMstData = await data.save();
        res.status(201).send({ msg: "Expense Sub-Category added successfully", expenseSubCatMstData });
    } catch (err) {
        res.status(400).send({ err });
    }
}

async function updateExpenseSubCat(req, res) {
    try {
        const {            
            expcatname,
            expcatId,
            expsubcatname,
            expsubcatstatus
        } = req.body

        const data = await expsubcategoryModel.updateOne(
            { _id: req.params._id },
            {
                $set: {
                    expcatname,
                    expcatId,
                    expsubcatname,
                    expsubcatstatus
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


async function findExpenseSubCat(req, res) {
    try {
        const data = await expsubcategoryModel.find()
        res.status(200).send({ data })
    }
    catch (err) {
        res.status(400).send(err)
    }
}


async function findParticularExpenseSubCat(req, res) {
    try {
        const data = await expsubcategoryModel.findOne({ _id: req.params._id })
        if (data != null) {
            res.status(200).send({ data })
        }
        else {
            res.status(400).send({ message: "This Expense Sub-Category doesn't exist" })
        }
    } catch (err) {
        res.status(500).send(err)
    }
}

async function deleteExpenseSubCat(req, res) {
    try {
        const data = await expsubcategoryModel.deleteOne({ _id: req.params._id })
        res.status(200).send({ msg: "Expense Sub-Category deleted Successfully" })
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports = { addExpenseSubCat, updateExpenseSubCat, findExpenseSubCat, findParticularExpenseSubCat, deleteExpenseSubCat }