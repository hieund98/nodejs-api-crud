const  userService = require("../services/userService"),
  config = require("../config/configs.js"),
  jwt = require("jwt-simple");
const { Queue } = require('bullmq')
const { queueName, connection } = require('../config/mailer.config')

exports.login = function (req, res) {
  console.log("Logged In");
  const user = userService.findOne({ username: req.body.username, password: req.body.password }).then(function (user) {
    console.log(user);
    if (user === null) {
      res.json({
        success: false,
        message: "User not found"
      });
      return;
    }

    const payload = {
      id: user.id,
      expire: Date.now() + 1000 * 60 * 60 * 24, //7 days
    };
    const token = jwt.encode(payload, config.jwtSecret);
    res.json({
      success: true,
      token: token,
      message: "Logic successful !"
    });
  });
};

exports.register = async function (req, res) {
  const data = userService.createUser({username: req.body.username, password: req.body.password});
  const queue = new Queue(queueName, { connection });

  await queue.add(process.env.QUEUE_NAME, {
    from: process.env.MAIL_USER,
    subject: 'This is a simple test',
    text: 'An email sent using BullMQ',
    to: "hieunguyendinh@channelvn.net",
  }).then(function (response) {
    res.send({ message: "Successful", data: data, response});
  });

};
