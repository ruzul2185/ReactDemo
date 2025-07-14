import "./Login.css";
import { useState } from "react";

const Login = () => {
  //     getter    setter
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    if (event.target.value.length < 8) {
      setError("Invalid Password!");
    } else {
      setError("");
    }
    setPassword(event.target.value);
  };

  return (
    <div id="container">
      <form id="login-form">
        <label htmlFor="username">Username </label>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={username}
          onChange={usernameHandler}
        />
        <label htmlFor="password">
          Password <span>{error}</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={passwordHandler}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
