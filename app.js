const express = require("express");
const app = express();
const { products } = require("./data");
app.get("/", (req, res) => {
  res.send('<h1>Home</h1><a href="api/products">products</a>');
});
app.get("/api/products/:productID", (req, res) => {
  //console.log(req);
  //console.log(req.params);
  const { productID } = req.params;
  const singleproduct = products.find(
    (product) => product.id === Number(productID)
  );
  res.json(singleproduct);
});

app.listen(5000, () => {
  console.log("server is runnimg at port 5000");
});
