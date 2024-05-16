const { addEmpExpense , findEmpExpense , findParticularEmpExpense , 
    deleteEmpExpense , updateEmpExpense } = require('../Controller/EmpExpenseController')

//import express package
const express = require('express')

//import express() method from express package
const router = express()

// Serve static files from the 'public' directory
router.use('/public', express.static('public'));

//file upload
const photoUpload = require('../fileUpload')

//insert router for Employee Expense
router.post('/add', photoUpload.single('receiptimg'),addEmpExpense)

//update router for Employee Expense
router.put('/update/:_id', photoUpload.single('receiptimg'),updateEmpExpense)

// find router for single Employee Expense
router.get('/find/:_id',findParticularEmpExpense)

//find router for all Employee Expense
router.get('/findall', findEmpExpense)

//delete router for single Employee Expense
router.delete('/delete/:_id', deleteEmpExpense)



module.exports = router