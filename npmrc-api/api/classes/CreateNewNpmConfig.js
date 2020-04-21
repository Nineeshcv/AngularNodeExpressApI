var PropertiesReader = require("properties-reader");


const homeDir = require('os').homedir();
var properties = PropertiesReader(homeDir+"/.npmrc");

class CreateNewNpmConfig{
    
    constructor(){
        
    }

    createNpmConfig(key,value){
        var properties = new PropertiesReader(homeDir+"/.npmrc");
       // var allProps = properties.getAllProperties();
        let jsonResult = {};      
        return new Promise((resolve,reject)=>{
            if(key !=  null && value != null){
               // console.log("Length of the Properties inside getConfigurations() :"+properties.length);
               // console.log("Values from the file :"+allProps);
               properties.set(key,value);
               properties.save(homeDir+"/.npmrc");
               var allProps = properties.getAllProperties();
               jsonResult = allProps;
               resolve(jsonResult);
            }else{
                reject("Failed");
            }
        }) 
    }
}
module.exports=CreateNewNpmConfig;