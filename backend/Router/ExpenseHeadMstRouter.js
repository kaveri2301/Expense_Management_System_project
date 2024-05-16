
//import Expense Sub-Category controllers
const { addExpenseHead , updateExpenseHead , findParticularExpenseHead , findExpenseHead , deleteExpenseHead } = require('../Controller/ExpenseHeadMstController')

//import express package
const express = require('express')

//import express() method from express package
const router = express()

//file upload
// const photoUpload = require('../fileUpload')

//insert router for Expense Head
router.post('/add',addExpenseHead)

//update router for Expense Head
router.put('/update/:_id',updateExpenseHead)

//find router for single Expense Head
router.get('/find/:_id',findParticularExpenseHead)

//find router for all Expense Head
router.get('/findall', findExpenseHead)

//delete router for single Expense Head
router.delete('/delete/:_id', deleteExpenseHead)

module.exports = router


