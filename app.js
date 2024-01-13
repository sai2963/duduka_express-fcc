const express = require("express");
const app = express();
const logger=require('./logger.js')
const authorize=require('./authorize.js')
app.use(authorize,logger)
app.get('/',(req,res)=>{
  res.send('Home')
})
app.get('/about',(req,res)=>{
  res.send('about')
})
app.get('/api/products',(req,res)=>{
  res.send("api")
})
app.get('/api/products/cpu',(req,res)=>{
  res.send("computer")
})
app.listen(5000, () => {
  console.log("server is runnimg at port 5000");
});
