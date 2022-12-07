const product = require("../models/product.model.js");
const validateRequest = require("../requests/validateRequest");

// Create and Save a new product
exports.create = (req, res) => {
  // Validate request
  if (!validateRequest.validated(req, res)) {
    return;
  }

  // Create a product
  const prod = new product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price || false
  });

  // Save product in the database
  product.create(prod, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the product."
      });
    else res.send(data);
  });
};

// Retrieve all products from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;

  product.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    else res.send(data);
  });
};

// Find a single product by Id
exports.findOne = (req, res) => {
  product.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found product with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving product with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// Update a product identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  product.updateById(
    req.params.id,
    new product(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found product with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating product with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a product with the specified id in the request
exports.delete = (req, res) => {
  product.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found product with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete product with id " + req.params.id
        });
      }
    } else res.send({ message: `product was deleted successfully!` });
  });
};

// Delete all products from the database.
exports.deleteAll = (req, res) => {
  product.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all products."
      });
    else res.send({ message: `All products were deleted successfully!` });
  });
};
