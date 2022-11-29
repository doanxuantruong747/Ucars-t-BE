const express = require('express');
const router = express.Router();

router.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});

//carModelsApi
const carModelsApi = require('./carModels');
router.use("/carModels", carModelsApi)

//carBrandApi
const carBrandApi = require('./carBrand');
router.use("/carBrand", carBrandApi)



module.exports = router;
