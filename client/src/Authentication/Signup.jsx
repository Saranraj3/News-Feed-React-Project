import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <input
        className="mt-5 ml-5 border border-black"
        type="text"
        placeholder="First Name"
      />
      <br />
      <input
        className="mt-3 ml-5 border border-black"
        type="text"
        placeholder="Last Name"
      />
      <br />
      <input
        className="mt-3 ml-5  border border-black"
        type="email"
        placeholder="Email"
      />
      <br />
      <input
        className="mt-3 ml-5  border border-black"
        type="text"
        placeholder="Address"
      />
      <br />
      <input
        className="mt-3 ml-5  border border-black"
        type="text"
        placeholder="Nationality"
      />
      <br />
      <div className="mt-3 ml-5  flex">
        <div className="flex">
          <p>Male</p>
          <input type="radio" name="radAnswer" />
        </div>
        <div className="flex">
          <p>Female</p>
          <input type="radio" name="radAnswer" />
        </div>
      </div>
      <button className="mt-3 ml-5 h-[2rem] w-[5rem] bg-blue-500">
        Submit
      </button>
      <p className="mt-3 ml-5">
        You Already Have an Accout
        <Link to="/login" className="ml-2 text-red-500">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
