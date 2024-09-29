import { useState } from "react";
import { Link } from "react-router-dom";
import { EMAIL_REGEX, USERNAME_REGEX, PASSWORD_REGEX } from "../config";
import { registerUser } from "../services/userService";
import "../styles/loginStyle.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [status, setStatus] = useState("");

  function emailOnBlur() {
    if (EMAIL_REGEX.test(email) === false) {
      setEmailError("Invalid Email. Please try again.");
    }
  }

  function usernameOnBlur() {
    if (USERNAME_REGEX.test(username) === false) {
      setUsernameError("Invalid Username. Please try again.");
    }
  }

  function passwordOnBlur() {
    if (PASSWORD_REGEX.test(password) === false) {
      setPasswordError(
        <>
          Invalid Password
          <br />
          <li>Minimum 8 characters in length</li>
          <li>At least one English letter</li>
          <li>At least one digit</li>
        </>
      );
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (emailError === "" && usernameError === "" && passwordError === "") {
      const checkEmailExistence = async () => {
        await registerUser(email, username, password);
      };
      if (checkEmailExistence.status === "success") {
        setStatus("Registered Successfully");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else if (checkEmailExistence.status === "email exists") {
        setEmailError("Email Already Exists.");
      } else if (checkEmailExistence.status === "username exists") {
        setUsernameError("Username Already Exists.");
      } else {
        setStatus(checkEmailExistence.error);
      }
    }
  }

  return (
    <div className="log-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            onBlur={emailOnBlur}
            className={emailError === "" ? "inputNoError" : "inputError"}
            placeholder="Enter Email"
            required
          />
        </div>
        <div>
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setUsernameError("");
            }}
            onBlur={usernameOnBlur}
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
            onBlur={passwordOnBlur}
            className={passwordError === "" ? "inputNoError" : "inputError"}
            placeholder="Enter Password"
            required
          />
        </div>
        <div>{emailError && <p className="error">{emailError}</p>}</div>
        <div>{usernameError && <p className="error">{usernameError}</p>}</div>
        <div>{passwordError && <p className="error">{passwordError}</p>}</div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
        <div>{status && <p className="status">{status}</p>}</div>
        <div>
          <Link to="/login">Already User? Sign In</Link>
        </div>
      </form>
    </div>
  );
}
