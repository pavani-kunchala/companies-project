const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  industry: { type: String, required: true },
  location: { type: String },
  foundedYear: { type: Number },
  employees: { type: Number },
});

module.exports = mongoose.model("Company", companySchema);
