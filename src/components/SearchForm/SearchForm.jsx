import React, { useState } from "react";

const SearchForm = ({ handleSpellSearch }) => {
  const [formData, setFormData] = useState({query: ""});

  const handleChange = (e) => {
    setFormData({[e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSpellSearch(formData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          name="query" 
          value={formData.query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;