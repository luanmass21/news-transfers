// import React from "react";
import "../css/footer.css"; // Importando o arquivo CSS para o footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Football Weekly. Todos os direitos reservados.</p>
        <div className="footer-links">
          {/* <a href="#about">Sobre</a>
          <a href="#privacy">Política de Privacidade</a> //deixando em comentário porque ainda não irei usar, porém já está pronto
          <a href="#terms">Termos de Serviço</a> */}
          {/* Links para o GitHub e LinkedIn */}
          <a href="https://github.com/luanmass21" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/luan-massuda-8b2686266/?trk=opento_sprofile_details" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
