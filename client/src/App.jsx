import React from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
