const { sendResponse, AppError, catchAsync } = require("../helpers/untils")
const CarBrand = require("../models/CarBrand");

const carBrandController = {};

// add new a Car Brand
carBrandController.createNewCarBrand = catchAsync(async (req, res, next) => {


})

// get list Car Brands
carBrandController.getCarBrands = catchAsync(async (req, res, next) => {



    //.populate("author")
})

// get Single Car Brand
carBrandController.getSingleCarBrand = catchAsync(async (req, res, next) => {

});


// Update Single Car Brand
carBrandController.updateSingleCarBand = catchAsync(async (req, res, next) => {


});


// Delete Single Car Brand
carBrandController.deleteSingleCarBrand = catchAsync(async (req, res, next) => {

});


module.exports = carBrandController