const { sendResponse, AppError, catchAsync } = require("../helpers/untils");
const CarBrand = require("../models/CarBrand");

const carBrandController = {};

// add new a Car Brand
carBrandController.createNewCarBrand = catchAsync(async (req, res, next) => {

    let { name, image, status, description } = req.body
    let carBrand = await CarBrand.findOne({ name });

    if (!name) {
        throw new AppError(400, "Missing name", "Error Create Car Brand")
    }

    if (carBrand) {
        throw new AppError(400, "carBrand already exists", "Error Create Car Brand")
    }
    carBrand = await CarBrand.create(({ name, image, status, description }))

    sendResponse(res, 200, true, carBrand, null, "Create new carBrand successful")

})

// get list Car Brands & limit & search by name
carBrandController.getCarBrands = catchAsync(async (req, res, next) => {
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

    const count = await CarBrand.countDocuments(filterCritera)

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;
    const totalPages = Math.ceil(count / limit);
    const offset = limit * (page - 1)

    let carBrands = await CarBrand.find(filterCritera)
        .sort({ createdAt: -1 })
        .populate("moldesId")
        .limit(limit)
        .skip(offset)

    return sendResponse(res, 200, true, { carBrands, totalPages, count }, null, "Get carBands successful")

})

// get Single Car Brand
carBrandController.getSingleCarBrand = catchAsync(async (req, res, next) => {

    const carBrandId = req.params.id;
    let id = ""

    let carBrands = await CarBrand.find({ isDeleted: false })

    carBrands.find((carBrand) => {
        const carBrand_id = String(carBrand._id)

        if (carBrand_id === carBrandId)
            return id = carBrand_id

        if (carBrand_id !== carBrandId)
            throw new AppError(400, "Car Brand id not found", "Get Single CarBrand Error")
    }
    );

    let carBrand = await CarBrand.findById(id)

    return sendResponse(res, 200, true, carBrand, null, "Get Single CarBrand successful")

});


// Update Single Car Brand
carBrandController.updateSingleCarBand = catchAsync(async (req, res, next) => {

    const carBrandId = req.params.id;
    let id = "";

    let carBrands = await CarBrand.find({ isDeleted: false })

    carBrands.find((carBrand) => {
        const carBrand_id = String(carBrand._id)

        if (carBrand_id === carBrandId)
            return id = carBrand_id

        if (carBrand_id !== carBrandId)
            throw new AppError(400, "Car Brand id not found", "update singel CarBrand Error")
    }
    );

    let carBrand = await CarBrand.findById(id);

    const allows = ["name", "image", "description", "status", "moldesId"];

    allows.forEach((field) => {
        if (req.body[field] !== undefined) {
            carBrand[field] = req.body[field]
        }
    });
    await carBrand.save();

    return sendResponse(res, 200, true, carBrand, null, "Update Car Band successful")

});


// Delete Single Car Brand
carBrandController.deleteSingleCarBrand = catchAsync(async (req, res, next) => {

});


module.exports = carBrandController