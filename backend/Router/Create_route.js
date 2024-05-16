const {addperson,findPerson ,login,updateUser}= require ('../Controller/Create_controller')
const express = require('express')
const router = express()



router.post('/add', addperson)
router.get('/findall', findPerson)
router.post('/login', login)
router.put('/update/:email', updateUser)




module.exports = router