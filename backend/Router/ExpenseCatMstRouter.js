
//import Expense Category controllers
const { addExpenseCategory , updateExpenseCategory , findExpenseCategory , findParticularExpenseCategory , deleteExpenseCategory } = require('../Controller/ExpenseCatMstController')

//import express package
const express = require('express')

//import express() method from express package
const router = express()

//file upload
// const photoUpload = require('../fileUpload')

//insert router for Expense Category
router.post('/add',addExpenseCategory)

//update router for Expense Category
router.put('/update/:_id',updateExpenseCategory)

//find router for single Expense Category
router.get('/find/:_id',findParticularExpenseCategory)

//find router for all Expense Category
router.get('/findall', findExpenseCategory)

//delete router for single Expense Category
router.delete('/delete/:_id', deleteExpenseCategory)

module.exports = router


