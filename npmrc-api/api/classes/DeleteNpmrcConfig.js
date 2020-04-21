var fs = require('fs');
var PropertiesReader = require("Properties-reader");

const homeDir = require('os').homedir();
//var properties = PropertiesReader(homeDir+"/.npmrc");

class DeleteNpmrcConfig{
    constructor(){}

    deleteNpmrcConfig(key){
        var properties = new PropertiesReader(homeDir+"/.npmrc");
        
        return new Promise((resolve,reject)=>{
            
            if(key != null){
                var newProperties;
                fs.writeFileSync(homeDir+"/.npmrc","",function(err){
                   // console.log("New File Created !!!")
                    if(err)  throw err;
                }) 
                
                try{
                    newProperties = new PropertiesReader(homeDir+"/.npmrc");
                    properties.each((_key,_value)=>{
                        if(key != _key ){
                         newProperties.set(_key,_value);
                        }
                    })
                    newProperties.save(homeDir+"/.npmrc");
                    properties = newProperties;
                }catch(error){
                    throw error;
                }
                var result = Object.entries(newProperties.getAllProperties());
                resolve(result);
            }else{
                reject("Failed");
            }
        })
    }
}

module.exports=DeleteNpmrcConfig;