import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/login", { email, password })
      .then((response) => {
        if (response.data === "success") {
          navigate("/owner");
        } else {
          alert("Please enter correct details");
        }
      })
      .catch((err) => console.log("registration failed", err));
  };
  return (
    <>
      <div>
        <h1>Login</h1>

        {/* register form */}
        <form onSubmit={handleSubmit}>
          {/* Email  */}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* password */}
          <div>
            <label>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* submit button */}
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
