const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const {conn} = require('./connection')


//check connection
let connection = async()=>{
  try{
    await conn.authenticate();
    console.log('Database Connection Succesfull')
  }catch(err){console.log(`Error while connecting ${err}`)}
}
connection();

//body parser
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))
//Router
app.use('/',require('./routes/index'))
app.use('/customer',require('./routes/customers'))
app.use('/book', require('./routes/books'))
//server running

app.listen(5000, ()=>{
  console.log(`Server running on port 5000`);
})
