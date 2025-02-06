// import React from "react";
import "../css/navbar.css"; // Importando o arquivo CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Football Weekly</h2>
      </div>
      <ul className="nav-links">
        <li><a href="https://www.transfermarkt.com/navigation/transfersundgeruechte" target="_blank" rel="noopener noreferrer">Recently news</a></li>
        <li><a href="">Transfers</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

