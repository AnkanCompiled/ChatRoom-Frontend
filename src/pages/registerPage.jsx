import { useState } from "react";
import { Link } from "react-router-dom";
import { EMAIL_REGEX } from "../config";
import "../styles/loginStyle.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function typeEmail(e) {
    setEmail(e.target.value);
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
    if (EMAIL_REGEX.test(email) === false) {
      setError("Invalid Email. Please try again.");
    }
  }

  return (
    <div className="log-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={email}
            onChange={typeEmail}
            className={error === "" ? "inputNoError" : "inputError"}
            placeholder="Enter Email"
            required
          />
        </div>
        <div>
          <input
            value={username}
            onChange={typeUsername}
            className={error === "" ? "inputNoError" : "inputError"}
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
        <div>{error && <p className="error">{error}</p>}</div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
        <div>
          <Link to="/login">Already User? Sign In</Link>
        </div>
      </form>
    </div>
  );
}
