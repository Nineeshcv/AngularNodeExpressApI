var PropertiesReader = require("properties-reader");


const homeDir = require('os').homedir();
var properties = PropertiesReader(homeDir+"/.npmrc");

class UpdateNpmConfig{
    
    constructor(){
        
    }

    updateNpmConfig(key,value){
        var properties = new PropertiesReader(homeDir+"/.npmrc");
        let jsonResult = {};      
        return new Promise((resolve,reject)=>{
            if(key !=  null && value != null){
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
module.exports=UpdateNpmConfig;