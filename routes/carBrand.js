const express = require("express");
const carBrandController = require("../controllers/carBrand.controller");
const router = express.Router();


/**
 * @route POST /carBand
 * @description Create a new car Band
 * @body {name, logo,staus, description}
 * @access 
 */
router.post("/", carBrandController.createNewCarBrand)


/**
 * @route GET /carBand?page=1&limit=10&name=`$name`
 * @description Get carBands with pagination
 * @access public
 */
router.get("/", carBrandController.getCarBrands)


/**
 * @route GET /carBrand/detail/:id
 * @description Get a carBrand
 * @access public
 */
router.get("/detail/:id", carBrandController.getSingleCarBrand)


/**
 * @route PUT /carBand/:id
 * @description Update a new carBand
 * @body {name, logo, description}
 * @access 
 */
router.put("/:id", carBrandController.updateSingleCarBand)


/**
 * @route DELETE /carBrand/:id
 * @description Delete a car Brand
 * @access 
 */
router.delete("/:id", carBrandController.deleteSingleCarBrand);


module.exports = router;