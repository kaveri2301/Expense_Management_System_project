
//import Expense Sub-Category controllers
const { addExpenseSubCat , updateExpenseSubCat , findExpenseSubCat , findParticularExpenseSubCat , deleteExpenseSubCat } = require('../Controller/ExpenseSubCategoryController')

//import express package
const express = require('express')

//import express() method from express package
const router = express()

//file upload
// const photoUpload = require('../fileUpload')

//insert router for Expense Sub-Category
router.post('/add',addExpenseSubCat)

//update router for Expense Sub-Category
router.put('/update/:_id',updateExpenseSubCat)

//find router for single Expense Sub-Category
router.get('/find/:_id',findParticularExpenseSubCat)

//find router for all Expense Sub-Category
router.get('/findall', findExpenseSubCat)

//delete router for single Expense Sub-Category
router.delete('/delete/:_id', deleteExpenseSubCat)


module.exports = router


