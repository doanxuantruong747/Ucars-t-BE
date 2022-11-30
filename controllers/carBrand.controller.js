const { sendResponse, AppError, catchAsync } = require("../helpers/untils");
const CarBrand = require("../models/CarBrand");

const carBrandController = {};

// add new a Car Brand
carBrandController.createNewCarBrand = catchAsync(async (req, res, next) => {
    let { name, image, status, description } = req.body
    let carBrand = await CarBrand.findOne({ name });

    if (!name) {
        throw new AppError(400, "Lack of input data (name)", "Error Create Car Brand")
    }

    if (carBrand) {
        throw new AppError(400, "carBrand already exists", "Error Create Car Brand")
    }

    carBrand = await CarBrand.create(({ name, image, status, description }))

    sendResponse(
        res,
        200,
        true,
        carBrand,
        null,
        "Create new carBrand successful")

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