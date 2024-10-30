import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = ({ onSignup }) => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Nationality, setNationality] = useState("");
  const [Address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    onSignup();
    navigate("/login");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="mt-5 ml-5 pl-2 border border-black"
          type="text"
          placeholder="First Name"
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <input
          className="mt-3 ml-5 pl-2 border border-black"
          type="text"
          placeholder="Last Name"
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <input
          className="mt-3 ml-5 pl-2 border border-black"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="mt-3 ml-5 pl-2 border border-black"
          type="text"
          placeholder="Address"
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <input
          className="mt-3 ml-5 pl-2 border border-black"
          type="text"
          placeholder="Nationality"
          value={Nationality}
          onChange={(e) => setNationality(e.target.value)}
        />
        <br />
        <input
          className="mt-3 ml-5 pl-2 border border-black"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <div className="mt-3 ml-5 pl-2 flex">
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
          <p className="ml-2 text-red-500" onClick={() => navigate("/login")}>
            Login
          </p>
        </p>
      </form>
    </div>
  );
};

export default Signup;
