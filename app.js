const express = require("express");
const app = express();
const { people } = require("./data.js");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/api/people", (req, res) => {
  res.status(404).json({ success: true, data: people });
});
app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, person: name })
})

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  res.status(404).send("Please Provide Credentials");
});
app.listen(5000, () => {
  console.log("server is runnimg at port 5000");
});
