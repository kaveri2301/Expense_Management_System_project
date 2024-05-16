
//import Expense Sub-Category controllers
const { adUserMst ,updateUserMst , finUserMst,findParticularUser,deleteUser,Userlogin} = require('../Controller/UserMstController')

//import express package
const express = require('express')

//import express() method from express package
const router = express()

//file upload
// const photoUpload = require('../fileUpload')

//insert router for User
router.post('/add',adUserMst)

//update router for user
router.put('/update/:_id',updateUserMst)

//find router for single user
router.get('/find/:_id',findParticularUser)

//find router for all users
router.get('/findall', finUserMst)

//delete router for single user
router.delete('/delete/:_id', deleteUser)

//insert router for User
router.post('/loginuser',Userlogin)

module.exports = router


