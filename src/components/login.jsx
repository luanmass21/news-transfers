import { useState } from "react";
import '../css/login.css';
import 'font-awesome/css/font-awesome.min.css';

const Login = () => {
  const [email, setEmail] = useState(""); // state to store user email
  const [message, setMessage] = useState(""); // state to store backend message

  // function called when form is submitted
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("user email:", email); // log the email in console

    try {
      const response = await fetch('http://localhost:5000/enviar-email', {
        method: 'POST', //always i need to put post
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // send email in the request body
      });

      const data = await response.json();
      setMessage(data.message); // show the backend response message

    } catch (error) {
      console.error('error:', error);
      setMessage("error sending the email."); // show error message if request fails
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Football Weekly</h1>
        <br />
        <h3>A newsletter with articles and latest player transfer news around the world.</h3>
        <div className="input-field">
          <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>  
          <input
            type="email"
            placeholder="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} // update email in the state
          />
        </div>
        <button type="submit">subscribe</button>
      </form>

      {/* display the backend message */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
