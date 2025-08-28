import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";  

function App() {
  const [companies, setCompanies] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    industry: "",
    location: "",
    founded: "",
    employees:"",
  });

  useEffect(() => {
    fetchCompanies();
    // eslint-disable-next-line
  }, [filters]);

  const fetchCompanies = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/companies", {
        params: filters,
      });
      setCompanies(res.data);
    } catch (err) {
      console.error("Error fetching companies:", err);
    }
  };

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const resetFilters = () => {
    setFilters({
      name: "",
      industry: "",
      location: "",
      founded: "",
      employees:"",
    });
  };

  return (
    <div className="container">
      <h1>Companies Directory</h1>

      {/* Filters Section */}
      <div className="filters">
        <input
          type="text"
          name="name"
          value={filters.name}
          placeholder="Search by Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="industry"
          value={filters.industry}
          placeholder="Search by Industry"
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          value={filters.location}
          placeholder="Search by Location"
          onChange={handleChange}
        />
        <input
          type="text"
          name="founded"
          value={filters.founded}
          placeholder="Search by Founded Year"
          onChange={handleChange}
        />
        <input
          type="text"
          name="employees"
          value={filters.employees}
          placeholder="Search by no. of Employees"
          onChange={handleChange}
        />
        <button onClick={resetFilters}>Reset</button>
      </div>

      {/* Companies Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Industry</th>
            <th>Location</th>
            <th>Founded</th>
            <th>Employees</th>
          </tr>
        </thead>
        <tbody>
          {companies.length > 0 ? (
            companies.map((c) => (
              <tr key={c._id}>
                <td>{c.name}</td>
                <td>{c.industry}</td>
                <td>{c.location}</td>
                <td>{c.foundedYear}</td>
                <td>{c.employees}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No companies found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
