import app from "./app";
//var app = require("./app");



const port = process.env.port || 8000;
app.listen(port,(err)=>{
    if(err) {
        console.error("Failed to Start the server : at "+port)
    }else{
        console.log("The server is started at :"+port);
    }

})