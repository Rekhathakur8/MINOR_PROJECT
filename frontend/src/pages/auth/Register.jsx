import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/register", { name, email, password, role })
      .then((response) => {
        console.log("registed successfull", response);
        navigate("/Login");
      })
      .catch((err) => console.log("registration failed", err));
  };
  return (
    <>
      <div>
        <h1>Register</h1>

        {/* register form */}
        <form onSubmit={handleSubmit}>
          {/* name */}
          <div>
            <label>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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

          {/* Role */}
          <div>
            <label>Role</label>
            <select
              name="role"
              id="role"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="owner">Owner</option>
              <option value="student">Student</option>
            </select>
          </div>

          {/* submit button */}
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default Register;
