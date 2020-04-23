import PropertiesHandlerService  from "../services/PropertiesHandlerService"

/**
 * This is Controller for Properties Handler
 */
class PropertiesHandlerController{
    constructor(){}

    /**
     * This method is used to get all properties
     * @param {*} req 
     * @param {*} res 
     */
    getNpmrcConfigs(req,res){
        var promise = new PropertiesHandlerService().getNpmrcConfigs();
        promise.then((result) =>{
            res.send(Object.entries(result));
        }).catch((err) =>{
            console.log("Error : Failed to get the data " +err);
        })
    }

    /**
     * This method is used to get NpmrcConfig value with the key
     * @param {*} req 
     * @param {*} res 
     */
    getNpmrcConfigWithKey(req,res){
        var key = req.body.key;
        var promise = new PropertiesHandlerService().getNpmConfigWithKey(key);
        promise.then((result) =>{
            res.send(result);
        }).catch((err) =>{
            console.log("Error : Failed to get the data : "+err);
        })
    }

    /**
     * This is used to create an entry
     * @param {*} req 
     * @param {*} res 
     */
    createNpmrcConfig(req,res){
        var key = req.body.key;
        var value = req.body.value;
        let  createPromise = new PropertiesHandlerService().createNpmConfig(key,value);
        createPromise.then((jsonsResult) =>{
            console.log("Values are saved !");
            res.status(200).send(jsonsResult);
        }).catch((error) =>{
            console.log("Failed to Save the Data !" + error);
        })
    }

    /**
     * This is used to Delete the entry from the properties
     * @param {*} req 
     * @param {*} res 
     */
    deleteNpmrcConfig(req,res){
        var key = req.query.key;
        let deletePromise = new PropertiesHandlerService().deleteNpmrcConfig(key);
        deletePromise.then((result)=>{
              res.status(200).send(result);
        }).catch((error) =>{
             console.log("Error to delete the data !" +error);
        });
    }
}
module.exports=PropertiesHandlerController;