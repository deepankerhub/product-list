import React from "react";

const Filter = ({ filters, setFilters }) => {
  // Updated: Function to handle input changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target; // Destructured name and value from e.target
    setFilters({
      ...filters, // Spread operator to retain existing filters
      [name]: value, // Updated filter based on the input's name attribute
    });
  };

  return (
    <div>
      <h3>Filters</h3>
      <div>
        {/* Updated: Added htmlFor to associate label with input */}
        <label htmlFor="color">Color:</label> 
        {/* Updated: Added id to input to match the label's htmlFor */}
        <input
          id="color"
          type="text"
          name="color" // name attribute matches the key in the filters state
          value={filters.color} // Controlled input, value comes from the filters state
          onChange={handleFilterChange} // Calls handleFilterChange on input change
        />
      </div>
      <br />
      <div>
        {/* Updated: Added htmlFor to associate label with input */}
        <label htmlFor="capacity">Capacity:</label> 
        {/* Updated: Added id to input to match the label's htmlFor */}
        <input
          id="capacity"
          type="text"
          name="capacity" // name attribute matches the key in the filters state
          value={filters.capacity} // Controlled input, value comes from the filters state
          onChange={handleFilterChange} // Calls handleFilterChange on input change
        />
      </div>
    </div>
  );
};

export default Filter;
