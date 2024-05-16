
//import location controllers
const { addCities , updateCity , findCities , findParticularCity , deleteCity} = require('../Controller/CityMstController')

//import express package
const express = require('express')

//import express() method from express package
const router = express()

//file upload
// const photoUpload = require('../fileUpload')

//insert router for Cities
router.post('/add',addCities)

//update router for City
router.put('/update/:_id',updateCity)

//find router for single City
router.get('/find/:_id',findParticularCity)

//find router for all Cities
router.get('/findall',findCities)

//delete router for single City
router.delete('/delete/:_id', deleteCity)

module.exports = router

