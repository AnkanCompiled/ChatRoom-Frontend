import { useState } from "react";
import { Link } from "react-router-dom";
import { EMAIL_REGEX } from "../config";
import "../styles/loginStyle.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [checkboxBool, setCheckboxBool] = useState(true);

  function handleCheckbox(e) {
    setCheckboxBool(e.target.checked);
  }

  function typeUsername(e) {
    setUsername(e.target.value);
  }

  function typePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
  }

  return (
    <div className="log-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={typeUsername}
            placeholder="Enter Username"
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={typePassword}
            className={error === "" ? "inputNoError" : "inputError"}
            placeholder="Enter Password"
            required
          />
        </div>
        <div>
          <input
            type="checkbox"
            checked={checkboxBool}
            onChange={handleCheckbox}
          />
          <label>Remember Me</label>
          <Link to="/forget_password">Forgot Password?</Link>
        </div>
        <div>{error && <p className="error">{error}</p>}</div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
        <div>
          <Link to="/register">New User? Sign Up</Link>
        </div>
      </form>
    </div>
  );
}
