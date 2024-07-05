const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./Router/coustmerRoute')
const customerModel = require('./model/customer.model')

 require('dotenv').config()
 const app = express()

 app.use(express.json());
  app.use(cors())
  app.use(router)
  app.use(customerModel)
  
  
  
  
  mongoose.connect(process.env.MONGODB_URL,   
    console.log('MongoDb start')
  )


 app.listen(process.env.PORT,()=>{
    console.log('port running on',process.env.PORT)
 })