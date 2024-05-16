
//import location controllers
const { addLocation , updateLocationMst , findLocationMst,findParticularLocation,deleteLocation} = require('../Controller/LocationMstController')

//import express package
const express = require('express')

//import express() method from express package
const router = express()

//file upload
// const photoUpload = require('../fileUpload')

//insert router for Location 
router.post('/add',addLocation)

//update router for Location
router.put('/update/:_id',updateLocationMst)

//find router for single Location
router.get('/find/:_id',findParticularLocation)

//find router for all Locations
router.get('/findall', findLocationMst)

//delete router for single Location
router.delete('/delete/:_id', deleteLocation)

module.exports = router


