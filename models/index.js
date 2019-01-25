const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/dispatch", {
  keepAlive: true
});

module.exports.User = require("./user");
module.exports.Employee = require("./Employee");
module.exports.Message = require("./message");
