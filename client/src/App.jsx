import React, { useState } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";
import Home from "./Authentication/Home";
import ProtectedRoute from "./Authentication/Auth";

const App = () => {
  const [authenticated, setauthenticated] = useState(false);

  const handlelogin = () => {
    setauthenticated(true);
  };

  const handlesignup = () => {
    setauthenticated(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/login" element={<Login onLogin={handlelogin} />} />
        <Route path="/signup" element={<Signup onSignup={handlesignup} />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute
              authenticated={authenticated}
              component={<Home />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
