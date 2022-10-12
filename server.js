const express= require("express");
const app =express();
app.get("/",function(req,res){
  res.send("Hello");
})
app.get("/about",function(req,res){
  res.send("Blabla")
})
app.listen(3000, function(){
  console.log("Server has started at port 3000")
})
