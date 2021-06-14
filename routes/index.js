const express = require('express');
const router = express.Router();
const {conn} = require('../connection')
const {check} = require('../connection')



router.post('/', async(req, res)=>{
  return res.json({data: 'Hello World' })
})


module.exports =router