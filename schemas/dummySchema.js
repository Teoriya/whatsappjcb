const { model, Schema } = require("mongoose");
const data = Schema({}, { strict: false });
module.exports = model("info", data);