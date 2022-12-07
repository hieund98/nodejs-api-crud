
module.exports = app => {
    const shipfee = require("../controllers/shipfee.controller.js");

    var router = require("express").Router();

    // Create a new Product
    router.post("/",
        (req, res) => {
            return shipfee.store(req, res)
        })

    // Retrieve all Products
    router.get("/", (req, res) => {
        return shipfee.index(req, res)
    })

    // Retrieve a single Product with id
    router.get("/:id", shipfee.findOne);

    // Update a Product with id
    router.put("/:id", shipfee.update);

    // Delete a Product with id
    router.delete("/:id", shipfee.delete);


    app.use('/api/shipfees', router);
};
