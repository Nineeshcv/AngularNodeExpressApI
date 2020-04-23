import express from "express";
import PropertiesHandlerController from "../controller/PropertiesHandlerController"

const router = express.Router();
var propController = new PropertiesHandlerController();



router.get("/",propController.getNpmrcConfigs);
router.post("/",propController.getNpmrcConfigWithKey);
router.put("/",propController.createNpmrcConfig);
router.delete("/",propController.deleteNpmrcConfig);

module.exports = router;