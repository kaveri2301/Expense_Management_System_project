
//import Expense Sub-Category controllers
const { addLocationHeadMst, updateLocationHeadMst , findLocationHeadMst , findParticularLocationHead , 
    deleteLocationHead, 
    Locationlogin} = require('../Controller/LocationHeadMstController')

//import express package
const express = require('express')

//import express() method from express package
const router = express()

//file upload
// const photoUpload = require('../fileUpload')

router.post('/locationlogin',Locationlogin)



//insert router for Location Head
router.post('/add',addLocationHeadMst)

//update router for Location Head
router.put('/update/:_id',updateLocationHeadMst)

//find router for single Location Head
router.get('/find/:_id',findParticularLocationHead)

//find router for all Location Head
router.get('/findall', findLocationHeadMst)

//delete router for single Location Head
router.delete('/delete/:_id', deleteLocationHead)

module.exports = router


