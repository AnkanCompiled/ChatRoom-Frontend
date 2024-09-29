import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../services/userService";
import "../styles/loginStyle.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [status, setStatus] = useState("");
  const [checkboxBool, setCheckboxBool] = useState(true);

  function handleCheckbox(e) {
    setCheckboxBool(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (usernameError === "" && passwordError === "") {
      const checkEmailExistence = async () => {
        await loginUser(username, password);
      };
    }
  }

  return (
    <div className="log-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setUsernameError("");
            }}
            className={usernameError === "" ? "inputNoError" : "inputError"}
            placeholder="Enter Username"
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
            className={passwordError === "" ? "inputNoError" : "inputError"}
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
        <div>{usernameError && <p className="error">{usernameError}</p>}</div>
        <div>{passwordError && <p className="error">{passwordError}</p>}</div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
        <div>{status && <p className="status">{status}</p>}</div>
        <div>
          <Link to="/register">New User? Sign Up</Link>
        </div>
      </form>
    </div>
  );
}
