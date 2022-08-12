const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

//Template Engine
app.set("view engine", "ejs");


// const myLogger =(req,res,next) =>{
//   console.log("Mİddleware log 1");
//   next();
// }
// const myLogger2 =(req,res,next) =>{
//   console.log("Mİddleware log 2");
//   next();
// }

//MIDDLEWARES
app.use(express.static('public'));
// app.use(myLogger);
// app.use(myLogger2);

//ROUTES

app.get("/", (req, res) => {
  res.render('index');
});


app.get("/about", (req, res) => {
  res.render('about');
});


app.get("/add", (req, res) => {
  res.render('add');
});
const port = 3000;

app.listen(port, () => {
  console.log(` sunucu ${port} portunda baslatildi..`);
});
