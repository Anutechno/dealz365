const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    cimg: {
        type: String,
    },
    SubCategory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory"
    },
}, {
    timestamps: true
});

const cat = mongoose.model("Category", CategorySchema);

const SubCategorySchema = new mongoose.Schema({
    subcategory_name: {
        type: String,
    },
    img: {
        type: String,
    }
}, {
    timestamps: true
})
const subcat = mongoose.model("SubCategory", SubCategorySchema);

module.exports = {
    Category: cat,
    SubCategory: subcat
}