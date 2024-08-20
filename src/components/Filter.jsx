import React from "react";

const Filter = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h3>Filters</h3>
     <label htmlFor="color"> 
        Color:</label>
        <input
          type="text"
          name="color"
          value={filters.color}
          onChange={handleFilterChange}
        />
      
      <br />
      <label>
        Capacity:
        <input
          type="text"
          name="capacity"
          value={filters.capacity}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};

export default Filter;