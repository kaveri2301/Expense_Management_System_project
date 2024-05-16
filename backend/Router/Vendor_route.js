const {addVendor,findVendor,updateUser,deletevendor,findparticularUser}= 
require ('../Controller/Vendor_controller')
const express = require('express')
const router = express()



router.post('/add', addVendor)
router.get('/findall', findVendor)
router.put('/update/:email', updateUser)
router.delete('/delete/:email',deletevendor)
router.get('/find/:email',findparticularUser)





module.exports = router