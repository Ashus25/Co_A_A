import React from 'react';
import { Link } from 'react-router-dom';

function Dropdown() {
  return (
    <div className="absolute right-4 top-16 bg-white shadow-md rounded">
      <ul>
        <li className="px-4 py-2 hover:bg-gray-200">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-200">
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
