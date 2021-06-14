const express = require('express');
const router = express.Router();
const {conn} = require('../connection')
const Customer = require('../Models/Customer')


router.post('/', async(req, res)=>{
  const result = await Customer.findAll()
  console.log(result)

  res.json({msg: 'Route Working'})
})

module.exports =router