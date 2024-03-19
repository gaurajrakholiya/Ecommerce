const express = require("express");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");
const {
  createProductController,
  getProductControlller,
  singleProductControlller,
  photoProductController,
  deleteProductController,
  updateProductController,
  productFiltersController,
  productCountController,
  productListController,
  searchProductController,
  realtedProductController,
  productCategoryController,
  braintreeTokenController,
  brainTreePaymentController

} = require("../controllers/productController");
const Formidable = require("express-formidable");

const router = express.Router();

//create product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  Formidable(),
  createProductController
);

// update routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  Formidable(),
  updateProductController
);

//getALl product
router.get("/get-product", getProductControlller);

//get single product
router.get("/get-product/:slug", singleProductControlller);

//get photo
router.get("/product-photo/:pid", photoProductController);

//delete rproduct
router.delete("/product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);


module.exports = router;
