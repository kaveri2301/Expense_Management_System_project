
//import Expense Sub-Category controllers
const { addUserExpenseMst  ,updateUserExpense , finUserExpenses ,
    findParticularUserExpense ,deleteUserExpense ,updateUserApprovalStatus } = require('../Controller/UserExpenseController')

//import express package
const express = require('express')

//file upload
const photoUpload = require('../fileUpload')

//import express() method from express package
const router = express()

//insert router for User
router.post('/add', photoUpload.single('uploadrcpt'),addUserExpenseMst)

//update router for user
router.put('/update/:_id', photoUpload.single('uploadrcpt'),updateUserExpense)

router.put('/updatestatus/:_id',updateUserApprovalStatus)

// find router for single user
router.get('/find/:_id',findParticularUserExpense)

//find router for all users
router.get('/findall', finUserExpenses)

//delete router for single user
router.delete('/delete/:_id', deleteUserExpense)

module.exports = router


