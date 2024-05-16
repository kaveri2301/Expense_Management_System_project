
//import Expense Sub-Category controllers
const {addEmployeeMst,findRecord,updateRecord,findParticularRecord,deleteEmployeeRecord } = require('../Controller/EmployeeRecordController')

//import express package
const express = require('express')

//import express() method from express package
const router = express()

//file upload
// const photoUpload = require('../fileUpload')

//insert router for employee
router.post('/add',addEmployeeMst)

//update router for employee
router.put('/update/:_id',updateRecord)

//find router for single employees
router.get('/find/:_id',findParticularRecord)

//find router for all employees
router.get('/findall', findRecord)

//delete router for single employee
router.delete('/delete/:_id', deleteEmployeeRecord)

module.exports = router


