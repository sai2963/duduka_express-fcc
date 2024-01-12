const express=require('express');
const app = express();
const{products}=require('./data')
app.get('/',(req,res)=>{
    res.send('<h1>Home</h1><a href="api/products">products</a>')
})
app.get('/api/products',(req,res)=>{
    const newproducts=products.map((product)=>{
        const {id,name,image}=product;
        return{id,name,image}
    })
    res.json(newproducts);
})

app.listen(5000,()=>{
    console.log('server is runnimg at port 5000')
}) 