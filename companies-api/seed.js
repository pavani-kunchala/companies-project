const mongoose = require("mongoose");
const Company = require("./models/Company"); // adjust path if needed

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/companiesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedCompanies = [
  {
    name: "Wipro",
    industry: "IT Services",
    location: "Bangalore, India",
    foundedYear: 1945,
    employees: 250000,
  },
  {
    name: "Infosys",
    industry: "IT Services",
    location: "Pune, India",
    foundedYear: 1981,
    employees: 310000,
  },
  {
    name: "TCS",
    industry: "IT Services",
    location: "Mumbai, India",
    foundedYear: 1968,
    employees: 600000,
  },
  {
    name: "Google",
    industry: "Technology",
    location: "California, USA",
    foundedYear: 1998,
    employees: 190000,
  },
  {
    name: "Microsoft",
    industry: "Technology",
    location: "Washington, USA",
    foundedYear: 1975,
    employees: 220000,
  },
  {
    name: "Amazon",
    industry: "E-commerce",
    location: "Seattle, USA",
    foundedYear: 1994,
    employees: 1600000,
  },
  {
    name: "Accenture",
    industry: "Consulting",
    location: "Dublin, Ireland",
    foundedYear: 1989,
    employees: 750000,
  },
  {
    name: "Capgemini",
    industry: "Consulting",
    location: "Paris, France",
    foundedYear: 1967,
    employees: 350000,
  },
  {
    name: "Tech Mahindra",
    industry: "IT Services",
    location: "Pune, India",
    foundedYear: 1986,
    employees: 152000,
  },
  {
    name: "Deloitte",
    industry: "Consulting",
    location: "London, UK",
    foundedYear: 1845,
    employees: 450000,
  },
];

const seedDB = async () => {
  await Company.deleteMany({});
  await Company.insertMany(seedCompanies);
  console.log("✅ Database Seeded with Companies!");
  mongoose.connection.close();
};

seedDB();
