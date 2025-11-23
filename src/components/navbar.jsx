// import React from "react";
import "../css/navbar.css"; // Importando o arquivo CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Futebol Semanal</h2>
      </div>
      <ul className="nav-links">
        <li><a href="https://www.transfermarkt.com/navigation/transfersundgeruechte" target="_blank" rel="noopener noreferrer">Notícias Recentes</a></li>
        <li><a href="https://www.transfermarkt.com/navigation/statistiken">Estatísticas</a></li>
        <li><a href="https://www.linkedin.com/in/luanmassuda21/">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

