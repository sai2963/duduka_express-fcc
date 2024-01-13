const express = require("express");
const app = express();
const { products } = require("./data");
app.get("/", (req, res) => {
  res.send('<h1>Home</h1><a href="api/products">products</a>');
});
app.get("/api/products",(req,res)=>{
    const newproducts=products.map((product)=>{
        const {id,name,image}=product;
        return{id,name,image}
    })
    res.send(newproducts);
})
app.get("/api/products/:productID", (req, res) => {
  //console.log(req);
  //console.log(req.params);
  const { productID } = req.params;
  const singleproduct = products.find(
    (product) => product.id === Number(productID)
  );
  if(!singleproduct){
    res.status(404).send('Product Does not Exist')
  }
  res.json(singleproduct);
});
app.get("/api/products/:productID/review/:reviewID",(req,res)=>{
    console.log(req.params)
    res.send('helloworld')
})
app.get("/api/v1/query",(req,res)=>{
  const {search,limit}=req.query;
  let sortedProducts=[...products]
  if(search){
    sortedProducts=sortedProducts.filter((product)=>{
      return product.name.startsWith(search);
    })
  }
  if(limit){
    sortedProducts=sortedProducts.slice(0,Number(limit))
  }
  if(sortedProducts<1){
    res.status(200).json({success: true ,data:[]})
    
  }
  res.status(200).json(sortedProducts);
 
})

app.listen(5000, () => {
  console.log("server is runnimg at port 5000");
});
