import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
    categoryControlller,
    createCategoryController,
    deleteCategoryCOntroller,
    singleCategoryController,
    updateCategoryController,
} from "./../controllers/categoryController.js";

const router = express.Router();

//routes
// create category
router.post("/create-category", requireSignIn, isAdmin, createCategoryController); //1

//update category
router.put("/update-category/:id", requireSignIn, isAdmin, updateCategoryController); //2

//getALl category
router.get("/get-category", categoryControlller); //3

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategoryCOntroller);

export default router;