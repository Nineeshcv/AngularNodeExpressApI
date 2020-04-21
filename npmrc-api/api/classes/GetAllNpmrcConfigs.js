
var PropertiesReader = require("properties-reader");


const homeDir = require('os').homedir();
var properties = PropertiesReader(homeDir+"/.npmrc");



 class GetAllNpmrcConfigs{

    constructor(){

    }
    getAllConfiguration() {
        var properties = new PropertiesReader(homeDir+"/.npmrc");
        var allProps = properties.getAllProperties();
        let jsonResult = {};
        
        return new Promise((resolve,reject)=>{
            if(allProps != null){
                console.log("Length of the Properties inside getConfigurations() :"+properties.length);
                console.log("Values from the file :"+allProps);
                jsonResult = allProps;
                resolve(jsonResult);
            }else{
                reject("Failed");
            }
        }) 
    }
}
module.exports= GetAllNpmrcConfigs;