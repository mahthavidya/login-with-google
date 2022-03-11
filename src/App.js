import React, { useState, useEffect } from "react";
import Login from "./component/Login1";
import Home from "./component/Home1";
import { Route, Routes, Router, Navigate, useNavigate } from "react-router-dom";

const App = () => {
  const [isAuth, setAuth] = useState(false);
  const navigate = useNavigate();
  const setAuthFunction = () => {
    setAuth(!isAuth);
  };

  return (
    <div>
      {isAuth ? (
        <Routes>
          <Route
            path="/home"
            element={<Home setAuthValue={setAuthFunction} />}
          />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login setAuthValue={setAuthFunction} />} />
          <Route path="/home" element={<Navigate to="/" />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
