import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
//pages
import Home from "./pages/Home";
import Offers from "./pages/Offers";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Offers/:id" element={<Offers />} />
      </Routes>
    </Router>
  );
}

export default App;
