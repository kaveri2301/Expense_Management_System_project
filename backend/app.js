
//import express package
const express = require('express')

//import mongoose package
const mongoose = require('mongoose')

//use express method
const app = express()

const cors = require('cors')

//connection of express with database
mongoose.connect('mongodb://127.0.0.1:27017/ExpManSysDB')

.then(()=>{
    console.log("Connected to database");
})
.catch((err)=>{
    console.log(err);
})

//this function is to handle all json data
app.use(express.json())

app.use(cors())

app.use(express.static('public/images'))

//This is just to check whether our server is running
app.get('/',(req,res)=>{
    res.send("Welcome to Expense Management System ")
})

//This function is to create a server on the specified port
app.listen(8080, () => {
    console.log("Server running");
})

//create and login
const personRoute=require('./Router/Adminrouter/Adminrouter')
app.use('/Person',personRoute)


//location Master
const locationMstRoute = require('./Router/LocationMstRouter')
app.use('/locationmst',locationMstRoute)

//Department Master
const deptMstRoute = require('./Router/DepartmentMstRouter')
app.use('/departmentmst',deptMstRoute)

// Expense Category Master
const expcatMstRoute = require('./Router/ExpenseCatMstRouter')
app.use('/expensecatmst',expcatMstRoute)

//Expense Sub-Category Master
const expsubcatMstRoute = require('./Router/ExpenseSubCategoryRouter')
app.use('/expensesubcatmst',expsubcatMstRoute)

//Expense Head Master
const expHeadMstRoute = require('./Router/ExpenseHeadMstRouter')
app.use('/expenseheadmst',expHeadMstRoute)

//Employee Master
const empMstRoute = require('./Router/EmployeeRecordRouter')
app.use('/employeemst',empMstRoute)

//User Master
const userMstRoute = require('./Router/UserMstRouter')
app.use('/usermst',userMstRoute)

//User Expense Master
const userExpMstRoute = require('./Router/UserExpenseRouter')
app.use('/userexpensemst',userExpMstRoute)

//Register & login 
// const userRegisterRoute = require('./Router/Create_route')
// app.use('/userregister',userRegisterRoute)

//Employee Expense Master
const empExpenseRoute = require('./Router/EmpExpenseRouter')
app.use('/empexpense',empExpenseRoute)

//Supplier/Vendor Master
const vendorRoute=require('./Router/Vendor_route')
app.use('/Vendor',vendorRoute)

//City Master
const cityRoute = require('./Router/CityMstRouter')
app.use('/citymst',cityRoute)

//Location Head Master
const locHeadRoute = require('./Router/LocationHeadMstRouter')
app.use('/locheadmst',locHeadRoute)