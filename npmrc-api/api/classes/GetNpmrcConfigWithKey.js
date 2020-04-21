var PropertiesReader = require("Properties-reader");

const homeDir = require('os').homedir();
var properties = PropertiesReader(homeDir+"/.npmrc");

class GetNpmrcConfigWithKey{
    constructor(){}
    
    getNpmConfigWithKey(key){
        return new Promise((resolve,reject)=>{
            if( key != null){
                properties = new PropertiesReader(homeDir+"/.npmrc");
                resolve(properties.get(key));
            }else{
                reject("Failed");
            }
        })
    }
}

module.exports=GetNpmrcConfigWithKey;