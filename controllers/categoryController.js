const { Category, SubCategory } = require("../models/categoryModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.creatCategory = catchAsyncErrors(async (req, res) => {
    try {
        const { name, cimg } = req.body;
        console.log(req.body);
        if (name === "" || cimg === "") {
            res.status(400).json({ message: "category or image is blank" });
        }
        const catname = await Category.findOne({ name: name });
        if (catname) {
            res.status(400).json({ data: catname,message: "Category Already exist" });
        }
        const catAdd = await Category(req.body);
        await catAdd.save();
        res.status(200).json({ data: catAdd, message: "category add Succesfull" });
    } catch (error) {
        res.status(400).json({ data: error, message: "Error" });
    }
})

exports.showAllCategory = catchAsyncErrors(async (req, res) => {
    try {
        const catdata = await Category.find();
        if (!catdata) {
            res.status(400).json({ mesaage: "Categorys not found " });
            return;
        }
        res
            .status(200)
            .json({ data: catdata, mesaage: "Get Category details Succesfull" });
    } catch (error) {
        res.status(400).json({ data: error, mesaage: "Error" });
    }
})

// exports.addCategory = catchAsyncErrors(async (req, res) => {
//     try {

//     } catch (error) {
//         res.status(400).json({ data: err, mesaage: "Error" });
//     }
// })

exports.updateCategory = catchAsyncErrors(async (req, res) => {
    try {
        const newCatData = {
            name: req.body.name,
            cimg: req.body.cimg,
        };
        const catdata = await Category.findById(req.params.id, newCatData, {
            new: true,
        });
        console.log(catdata);
        if (!catdata) {
            res.status(400).json({ mesaage: "User not found " });
            return;
        } else {
            const cat = await Category.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });
            console.log(cat);
            res
                .status(200)
                .json({ data: cat, mesaage: "Update user details Succesfull" });
        }
    } catch (error) {
        res.status(400).json({ data: error, mesaage: "Error" });
    }
})

exports.getOneCategory = catchAsyncErrors(async (req, res) => {
    try {
        const catdata = await Category.findById(req.params.id);
        if (!catdata) {
            return next(`User does not exist with Id: ${req.params.id}`);
        }
        res.status(200).json({
            success: true,
            catdata,
        });
    } catch (error) {
        res.status(400).json({ data: error, mesaage: "Error" });
    }
})

exports.deleteCategory = catchAsyncErrors(async (req, res) => {
    try {
        const catdata = await Category.findById(req.params.id);
        if (!catdata) {
            res.status(400).json({ data: err, mesaage: "User Not Found" });
        }
        Users.findByIdAndDelete(req.params.id, { new: true }, (err, data) => {
            if (err) {
                throw err;
            }
            res
                .status(200)
                .json({ data: data, mesaage: "Delete Categorydata Details Successfull" });
        });
    } catch (error) {
        res.status(400).json({ data: err, mesaage: "Error" });
    }
})


exports.creatSubCategory = catchAsyncErrors(async (req, res) => {
    try {
        const { name, cimg } = req.body;
        if (name === "" || cimg === "") {
            res.status(400).json({ mesaage: "category or image is blank" });
        }
        const catname = await SubCategory.findOne({ name: name });
        if (catname) {
            res.status(400).json({ mesaage: "Category Already exist" });
        }
        const catAdd = await SubCategory(req.body);
        await catAdd.save();
        res.status(200).json({ data: catAdd, mesaage: "Subcategory add Succesfull" });
    } catch (error) {
        res.status(400).json({ data: error, mesaage: "Error" });
    }
})

exports.getAllSubCategory = catchAsyncErrors(async (req, res) => {
    try {
        const catdata = await SubCategory.find();
        if (!catdata) {
            res.status(400).json({ mesaage: "SubCategory not found " });
            return;
        }
        res
            .status(200)
            .json({ data: catdata, mesaage: "Get SubCategory details Succesfull" });
    } catch (error) {
        res.status(400).json({ data: error, mesaage: "Error" });
    }
})