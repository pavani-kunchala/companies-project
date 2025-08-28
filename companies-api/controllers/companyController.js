const Company = require("../models/Company");

// CREATE company
const createCompany = async (req, res) => {
  try {
    const newCompany = new Company(req.body);
    const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ companies with filters
const getCompanies = async (req, res) => {
  try {
    const { name, industry, location, founded, employees } = req.query;

    let query = {};

    if (name) {
      query.name = { $regex: name, $options: "i" };
    }
    if (industry) {
      query.industry = { $regex: industry, $options: "i" };
    }
    if (location) {
      query.location = { $regex: location, $options: "i" };
    }
    if (founded) {
      query.foundedYear = Number(founded); // exact match
    }
    if (employees) {
      query.employees = Number(employees); // exact match
    }

    const companies = await Company.find(query);
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ one by ID
const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ message: "Company not found" });
    res.json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
const updateCompany = async (req, res) => {
  try {
    const updated = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
const deleteCompany = async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.id);
    res.json({ message: "Company deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
};
