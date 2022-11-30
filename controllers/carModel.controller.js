const { sendResponse, AppError, catchAsync } = require("../helpers/untils")
const CarModel = require("../models/CarModel");


const carModelController = {};

//Check id Car Models
const checkId = async (id) => {

 let carModels = await CarModel.find({ isDeleted: false })
 let checkIdInput
 carModels.find((carModel) => {
  const carModel_id = String(carModel._id)

  if (carModel_id === id)
   return checkIdInput = true

  if (carBrand_id !== id)
   return checkIdInput = false
 });

 return checkIdInput
}

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
 let { page, limit, name, ...filterQuery } = req.query

 const filterKeys = Object.keys(filterQuery);
 if (filterKeys.length)
  throw new AppError(400, "Not accepted query", "Bad Request");

 const filterConditions = [{ isDeleted: false }]
 if (name) {
  filterConditions.push({
   name: { $regex: name, $options: "i" },
  })
 }
 const filterCritera = filterConditions.length
  ? { $and: filterConditions }
  : {};

 const count = await CarModel.countDocuments(filterCritera)

 page = parseInt(page) || 1;
 limit = parseInt(limit) || 10;
 const totalPages = Math.ceil(count / limit);
 const offset = limit * (page - 1)

 let carModels = await CarModel.find(filterCritera)
  .sort({ createdAt: -1 })
  .limit(limit)
  .skip(offset)

 return sendResponse(res, 200, true, { carModels, totalPages, count }, null, "Get carBands successful")

})


// get Single Car Model
carModelController.getSingleCarModel = catchAsync(async (req, res, next) => {
 const CarModelId = req.params.id;

 const idIput = await checkId(CarModelId)

 if (idIput === false)
  throw new AppError(400, "Car Model id not found", "Get Single Car Model Error")

 if (idIput === true) {
  let carModel = await CarModel.findById(CarModelId)
  return sendResponse(res, 200, true, carModel, null, "Get Single Car Model successful")
 }

});


// Update Single Car Model
carModelController.updateSingleCarModel = catchAsync(async (req, res, next) => {
 const carModelId = req.params.id;
 const idIput = await checkId(carModelId)

 if (idIput === false)
  throw new AppError(400, "Car Model id not found", "Get Single Car Model Error")

 if (idIput === true) {

  let carModel = await CarModel.findById(carModelId);
  const allows = ["name"];

  allows.forEach((field) => {
   if (req.body[field] !== undefined) {
    carModel[field] = req.body[field]
   }
  });
  await carModel.save();

  return sendResponse(res, 200, true, carModel, null, "Update Car Model successful")
 }
});


// Delete Single Car Model
carModelController.deleteSingleCarModel = catchAsync(async (req, res, next) => {


});





module.exports = carModelController