import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
  let index =req.body.index;
  res.send(index);
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Abhishek</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: 7678574104</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});