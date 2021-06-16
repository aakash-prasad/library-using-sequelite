const express = require('express');
const router = express.Router();
const {conn} = require('../connection')
const Customer = require('../Models/Customer')
const Issue = require('../Models/Issue');

//ROUTE TO INSERT A NEW CUSTOMER
router.post('/', async(req, res)=>{
  const{userName , phoneNo, gender} = req.body;
  const lowerUserName = userName.toLowerCase();
  
  //VALIDATE A PHONE NUMBER
  if(phoneNo.length != 10){
    return res.json({Error: "Please Enter a Valid Number"})
  }
  
  //CREATE A CUSTOMER OBJECT TO PUSH
  const newCustomer  = {
    userName: lowerUserName,
    phoneNo: phoneNo,
    gender: gender
  }
  
  //Push customer into database
  try{
    const insertCustomer = await Customer.create(newCustomer);
    return res.status(200).json({data: newCustomer})
  }catch(err){return res.status(500).json({error:err})}
})

//ROUTE TO GET ALL THE CUSTOMERS
router.get('/', async(req, res)=>{
  //FETCH ALL THE CUSTOMERS FROM THE CUSTOMER TABLE
  const allCustomer = await Customer.findAll();
  let customerArray = [];
  allCustomer.forEach((item, index)=>{
    customerArray.push(allCustomer[index].dataValues)
    console.log(allCustomer[index].dataValues);
  })
  return res.json({data:customerArray})
})


//ROUTE TO GET THE CUSTOMER WITH THEIR ID'S
router.get('/:id', async(req, res)=>{
  const customerId = (req.params.id)
  const customer  = await Customer.findAll({
    where : {
      id: customerId
    }
  })
  console.log(customer[0].dataValues)
  return res.status(200).json({data: customer})
})

// POST REQUEST WHERE THE USER DETAILS CAN BE UPDATED
router.post('/:id', async(req,res)=>{
  const {userName, phoneNo}= req.body;
  //CHECK A VALID PHONE NUMBER
    if(phoneNo.length != 10){
      return res.status(400).json({data: "Enter a valid number"})
    }
  //GRAB THE ID FROM THE REQUEST PARAMS
  const customerId = req.params.id
  // UPDATE CUSTOMER TABLE WHERE ID = ID
  try{
    await Customer.update({userName: userName, phoneNo:phoneNo},{
    where: {id : customerId}
    })
  }catch(err){return res.status(500).json({err})}
  return res.status(200).json({data: [userName, phoneNo]})
})


//POST REQUEST TO ISSUE A BOOK USING CUSTOMERID AND BOOKID
router.post('/:id1/book/:id2', (req, res)=>{
  const customerId = req.params.id1
  const bookId = req.params.id2
  
})

module.exports =router