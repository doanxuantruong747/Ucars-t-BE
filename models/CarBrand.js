const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const carBrandSchema = Schema(
    {
        name: { type: String, required: true },
        image: { type: String, default: "" },
        description: { type: String, default: "" },
        status: { type: String, enum: ["Active", "Inactive"], default: "Active" },

        moldesId: {
            type: Schema.Types.ObjectId,
            ref: "CarModel",
        },

        isDeleted: { type: Boolean, default: false, required: true },
    },
    { timestamps: true }
);



const CarBrand = mongoose.model("CarBrand", carBrandSchema);
module.exports = CarBrand;