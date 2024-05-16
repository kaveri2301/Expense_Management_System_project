
//import location controllers
const {addDepartment,findDepartment,updateDepartment, findParticularDepartment , deleteDepartment} = require('../Controller/DepartmentMstController')

//import express package
const express = require('express')

//import express() method from express package
const router = express()

//file upload
// const photoUpload = require('../fileUpload')

//insert router for Department
router.post('/add',addDepartment)

//update router for Department
router.put('/update/:_id',updateDepartment)

//find router for single Department
router.get('/find/:_id',findParticularDepartment)

//find router for all Departments
router.get('/findall',findDepartment)

//delete router for single Department
router.delete('/delete/:_id', deleteDepartment)

module.exports = router


