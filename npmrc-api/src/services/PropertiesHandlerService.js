var PropertiesReader = require("properties-reader");
var fs = require("fs");

const homeDir = require('os').homedir();
var properties = PropertiesReader(homeDir+"/.npmrc");

/**
 * This class is used to Handle the Properties Handler Service
 */

 class PropertiesHandlerService{

    constructor(){}

    /**
     * To get the getNpmrc properties
     * 
     */
    getNpmrcConfigs() {
        var properties = new PropertiesReader(homeDir+"/.npmrc");
        var allProps = properties.getAllProperties();
        let jsonResult = {};
        
        return new Promise((resolve,reject)=>{
            if(allProps != null){
                jsonResult = allProps;
                resolve(jsonResult);
            }else{
                reject("Failed");
            }
        }) 
    }

    /**
     * This method is used to create the NPmrc properties entry
     * @param {*} key 
     * @param {*} value 
     */
    createNpmConfig(key,value){
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

    /**
     * This is used to Delele the Property entry
     * @param {*} key 
     */
    deleteNpmrcConfig(key){
        var properties = new PropertiesReader(homeDir+"/.npmrc");
        
        return new Promise((resolve,reject)=>{
            
            if(key != null){
                var newProperties;
                fs.writeFileSync(homeDir+"/.npmrc","",function(err){
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

    /**
     * This is for getting a properties with key
     * @param {*} key 
     */
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
module.exports= PropertiesHandlerService;