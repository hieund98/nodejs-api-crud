const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
const passport = require("passport");
const app = express();
const { worker } = require('./app/mail/worker')

worker.on('completed', job => console.info(
    `Completed job ${job.id} successfully, sent email to ${job.data.to}`,
))
worker.on('failed', (job, err) => console.info(
    `Failed job ${job.id} with ${err}`,
))

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application." });
});
require("dotenv").config({ override: true, debug: true })
require("./app/routes/product.routes.js")(app);
require("./app/routes/shipfee.routes.js")(app);
require("./app/routes/tutorial.routes.js")(app);
require("./app/routes/auth.routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

console.log(process.env.DB_HOST);
