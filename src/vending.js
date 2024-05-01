// vending.js
import React from 'react';
import { Link } from 'react-router-dom';

function Vending() {
  return (
    <div>
      <h1>Welcome to the Vending Machine!</h1>
      <h2>Snacks Available:</h2>
      <ul>
        <li>
          <Link to='/snacks/chips'>Chips</Link>
        </li>
        <li>
          <Link to='/snacks/candy'>Candy</Link>
        </li>
        <li>
          <Link to='/snacks/soda'>Soda</Link>
        </li>
      </ul>

      {/* Render snack components */}
      <hr />
      <h2>Snack Details:</h2>
      {/* Snack components will be rendered using React Router */}
    </div>
  );   
}

export default Vending;
