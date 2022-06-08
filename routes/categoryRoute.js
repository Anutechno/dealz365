const express = require("express");
const router = express.Router();
const {
    creatCategory,
    getOneCategory,
    showAllCategory,
    updateCategory,
    deleteCategory
} = require("../controllers/categoryController");

router.route("/creatcategory").post(creatCategory);
router.route("/allcategory").get(showAllCategory);
router
    .route("/category/:id")
    .get(getOneCategory)
    .put(updateCategory)
    .delete(deleteCategory);

module.exports = router;