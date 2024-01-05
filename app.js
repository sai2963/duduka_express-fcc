const express=require('express');
const app = express();

app.get('/',(req,res)=>{
res.send('hello World')
})
app.get('/about',(req,res)=>{
    res.send('Home Page')
})
app.all('*',(req,res)=>{
    res.status(404).send("<h1>Resource not found</h1>")
})

app.listen(5000,()=>{
    console.log('server is runnimg at port 5000')
}) 