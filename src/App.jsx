import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
//pages
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
//components
import Header from "./components/Header";

function App() {
  const [token, setToken] = useState(Cookies.get("vintedToken") || null);

  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("vintedToken", token, { expires: 14 });
    } else {
      setToken(null);
      Cookies.remove("vintedToken");
    }
  };
  return (
    <Router>
      <Header handleToken={handleToken} token={token} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Offers/:id" element={<Offers />} />
        <Route path="/Login" element={<Login handleToken={handleToken} />} />
        <Route path="/Signup" element={<Signup handleToken={handleToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
