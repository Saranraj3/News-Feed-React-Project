import React from "react";

const Login = () => {
  return (
    <div>
      <input
        className="border border-black"
        type="text"
        placeholder="First Name"
      />
      <br />
      <br />
      <input
        className="border border-black"
        type="text"
        placeholder="Last Name"
      />
      <br />
      <br />
      <input className="border border-black" type="email" placeholder="Email" />
      <br />
      <br />
      <input
        className="border border-black"
        type="text"
        placeholder="Address"
      />
      <br />
      <br />
      <input
        className="border border-black"
        type="text"
        placeholder="Nationality"
      />
      <br />
      <br />
      <div className="flex">
        <div className="flex">
          <p>Male</p>
          <input type="radio" name="radAnswer" />
        </div>
        <div className="flex">
          <p>Female</p>
          <input type="radio" name="radAnswer" />
        </div>
      </div>
    </div>
  );
};

export default Login;
