import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <input
        className="m-5 pl-2 border border-black"
        type="email"
        placeholder="Email"
      />
      <br />
      <input
        className="ml-5 pl-2 border border-black"
        type="password"
        placeholder="Password"
      />
      <br />
      <button className="mt-2 ml-5 bg-blue-500 rounded-md h-[2rem] w-[4rem]">
        Submit
      </button>
      <p className="mt-3 ml-5">
        You Don't Have an Accout
        <Link to="/signup" className="ml-2 text-red-500">
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Login;
