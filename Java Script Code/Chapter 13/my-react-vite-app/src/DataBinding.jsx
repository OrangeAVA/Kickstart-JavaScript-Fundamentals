import React, { useState } from 'react';

const DataBinding = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div>
      <h2>Data Binding Example</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <button type="submit">Greet</button>
      </form>
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

export default DataBinding;
