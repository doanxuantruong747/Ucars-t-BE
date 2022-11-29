const express = require("express");
const carModelController = require("../controllers/carModel.controller");
const router = express.Router();



/**
 * @route POST /carModel
 * @description Create new Car Model
 * @body {name,image,price,authorCarBrand}
 * @access public 
 */
router.post("/", carModelController.createCarModel)


/**
 * @route GET /carModel?page=1&limit=10&name=`$name`
 * @description Get Car Model with pagination
 * @access public
 */
router.get("/", carModelController.getCarModel)


/**
 * @route GET /carModel/detail/:id
 * @description Get a Car Model
 * @access public
 */
router.get("/detail/:id", carModelController.getSingleCarModel)


/**
 * @route PUT /carModel/:id
 * @description Update a new car model
 * @body {name,image,price,authorCarBrand}
 * @access 
 */
router.put("/:id", carModelController.updateSingleCarModel)


/**
 * @route DELETE /carModel/:id
 * @description Delete a car model
 * @access 
 */
router.delete("/:id", carModelController.deleteSingleCarModel);



module.exports = router;