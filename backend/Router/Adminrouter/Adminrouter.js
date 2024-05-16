const {addperson,findPerson ,login,logout}= require ('../../Controller/AdminController/Adminlogin')
const express = require('express')
const router = express()



router.post('/add', addperson)
router.get('/findall', findPerson)
router.post('/login', login)
// router.put('/update/:email', updateUser)
router.post('/logout', logout);





module.exports = router