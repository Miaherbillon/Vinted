import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

//pages
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Offers/:id" element={<Offers />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/Signup" element={<Signup />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
