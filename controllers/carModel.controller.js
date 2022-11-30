const { sendResponse, AppError, catchAsync } = require("../helpers/untils")
const CarModel = require("../models/CarModel");


const carModelController = {};

// Create Car Model
carModelController.createCarModel = catchAsync(async (req, res, next) => {
 let { name } = req.body
 let carModel = await CarModel.findOne({ name });

 if (!name) {
  throw new AppError(400, "Missing name", "Error Create Car Model")
 }

 if (carModel) {
  throw new AppError(400, "car Model already exists", "Error Create Car Model")
 }
 carModel = await CarModel.create(({ name }))

 sendResponse(res, 200, true, carModel, null, "Create new car Model successful")


})


// get list Car Model
carModelController.getCarModel = catchAsync(async (req, res, next) => {

})

// get Single Car Model
carModelController.getSingleCarModel = catchAsync(async (req, res, next) => {

});


// Update Single Car Model
carModelController.updateSingleCarModel = catchAsync(async (req, res, next) => {

});


// Delete Single Car Model
carModelController.deleteSingleCarModel = catchAsync(async (req, res, next) => {


});





module.exports = carModelController