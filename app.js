const express = require('express');
const bodyParser = require('body-parser');
let items = ["Take Medicine","Eat Food","Studying"];
let workItems  = [];
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res){
   let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   let today = new Date();
  let day=  (today.toLocaleDateString("en-IN", options));
  
  res.render("list",{listTitle: day, newListItems: items});

});
app.get("/Work",function(req,res){
  res.render("list",{listTitle:"work List",newListItems:workItems});
});

app.post("/work",function(req,res){
  let item = req.body.newItem;
  workItem.push(item);
  res.redirect("/work");
})

app.post("/",function(req,res){
     var item = req.body.newItem
     if(req.body.list==="work"){
      workItems.push(item);
      res.redirect("/work");
     }else{
      items.push(item);
      res.redirect("/");
     }
 
  });


app.listen(3000,function(){
    console.log( "server is running on port 3000");
})