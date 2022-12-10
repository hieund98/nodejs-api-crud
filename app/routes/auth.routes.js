const passport = require('passport');
const auth = require("../controllers/auth.controller");

module.exports = app => {
    const auth = require("../controllers/auth.controller.js");

    const router = require("express").Router();

    // Login with username and password
    router.post("/login",
        (req, res) => {
            return auth.login(req, res)
        })

    // Create a new account
    router.post("/register",
        (req, res) => {
            return auth.register(req, res)
        })


    app.use('/api', router);
};
