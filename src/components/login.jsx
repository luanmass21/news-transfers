import { useState } from "react";
// import { FaUser } from "react-icons/fa"; // Só mantive o ícone de usuário
import '../css/login.css';
import 'font-awesome/css/font-awesome.min.css';


const Login = () => {
  // Estado para armazenar o e-mail do usuário
  const [email, setEmail] = useState("");

  // Função que é chamada quando o formulário é enviado
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("E-mail do usuário:", email); // Apenas o e-mail será mostrado
  };

  return (
    <div className="container">
       {/* Ícone Font Awesome da câmera */}

       
      <form onSubmit={handleSubmit}>
        <h1>Football Weekly</h1>


        
        <br />
        <h3>A newsletter com artigos e as últimas notícias de transferências de jogadores ao redor do mundo.</h3>
        <div className="input-field">
       <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>  
          
          <input

            type="email" // Agora é um campo de email
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Aqui é pego o e-mail
          />
        </div>
        
        <button type="submit">Subscribe</button> {/* Botão para inscrição */}
      </form>
    </div>
  );
};

export default Login;

