const {productRequest} = require("../requests/productRequest");
const product = require("../controllers/product.controller");
const auth = require("../middlewares/auth")();

module.exports = app => {
  const product = require("../controllers/product.controller.js");

  var router = require("express").Router();

  // Create a new Product
  router.post("/", productRequest.store(),
      (req, res) => {
        return product.create(req, res)
  })

  // Retrieve all Products
  router.get("/", auth.authenticate(),
      (req, res) => {
      return product.findAll(req, res)
  });

  // Retrieve a single Product with id
  router.get("/:id", auth.authenticate(),
      (req, res) => {
      return product.findOne(req, res)
  });

  // Update a Product with id
  router.put("/:id", auth.authenticate(),
      (req, res) => {
        return product.update(req, res)
  })

  // Delete a Product with id
  router.delete("/:id", product.delete);

  // Delete all Products
  router.delete("/", product.deleteAll);

  app.use('/api/products', router);
};
