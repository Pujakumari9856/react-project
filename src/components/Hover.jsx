import React, { useState } from 'react';
import './App.css'; 

const NavBar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  const navItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <ul>
      {navItems.map((item, index) => (
        <li
          key={index}
          onClick={() => handleClick(index)}
          className={selectedItem === index ? 'active' : ''}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
