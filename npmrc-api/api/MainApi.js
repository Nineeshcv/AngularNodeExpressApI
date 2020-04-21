var express = require("express");
var bodyParser = require("body-parser");
var PropertiesReader = require("properties-reader");
var fs = require('fs');

const homeDir = require('os').homedir();
var properties = PropertiesReader(homeDir+"/.npmrc");

var GetAllNpmrc = require("./classes/GetAllNpmrcConfigs");
var CreateNewNpmConfig = require("./classes/CreateNewNpmConfig");
var GetNpmConfigWithKey = require("./classes/GetNpmrcConfigWithKey");
var DeleteNpmrcConfig = require('./classes/DeleteNpmrcConfig');
var app = express();


app.use(function(req,res,next){
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   res.setHeader('Access-Control-Allow-Credentials', true);
   next();
}) 

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.route("/npmrc/config").get((req,res) =>{
    let promise = new GetAllNpmrc().getAllConfiguration();
    promise.then((jsonsResult)=>{
        res.send(Object.entries(jsonsResult));
    }).catch(error =>{
        console.log("Error to get the deatils :"+error);
    });
    
})

 app.route("/npmrc/config").put((req,res)=>{
     var key = req.body.key;
     var value = req.body.value;
     let  createPromise = new CreateNewNpmConfig().createNpmConfig(key,value);
     createPromise.then((jsonsResult) =>{
         console.log("Values are saved !");
         res.status(200).send(jsonsResult);
     }).catch((error) =>{
         console.log("Failed to Save the Data !" + error);
     })
 })

 app.route("/npmrc/config").post((req,res)=>{
     var key = req.body.key;
     let getPromise = new GetNpmConfigWithKey().getNpmConfigWithKey(key);
     getPromise.then((result) =>{
         res.send(result);
     }).catch((error)=>{
        console.log("Error to get the Data !"+error);
     });
     
 })

 app.route("/npmrc/config").delete((req,res) =>{
     var key = req.query.key;
     let deletePromise = new DeleteNpmrcConfig().deleteNpmrcConfig(key);
     deletePromise.then((result)=>{
        res.status(200).send(result);
     }).catch((error) =>{
         console.log("Error to delete the data !" +error);
     });
 })



app.listen(8000,()=>{
    console.log("The server is started at 8900");
})