import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    onLogin();
    navigate("/Home");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="m-5 pl-2 border border-black"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="ml-5 pl-2 border border-black"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="mt-2 ml-5 bg-blue-500 rounded-md h-[2rem] w-[4rem]">
          Submit
        </button>
        <p className="mt-3 ml-5">
          You Don't Have an Accout
          <p className="ml-2 text-red-500" onClick={() => navigate("/signup")}>
            Signup
          </p>
        </p>
      </form>
    </div>
  );
};

export default Login;
