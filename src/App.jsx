import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import Modal from "./components/Modal";

//pages
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";
//components
import Header from "./components/Header";

function App() {
  const [token, setToken] = useState(Cookies.get("vintedToken") || null);
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [minPrice, setMinPrice] = useState(0);

  const handleToken = (token, id) => {
    if (token && id) {
      setToken(token);
      Cookies.set("vintedToken", token, { expires: 14, sameSite: "Strict" });
      Cookies.set("VintedId", id, { expires: 14 });
    } else {
      setToken(null);
      Cookies.remove("vintedToken");
      Cookies.remove("VintedId");
    }
  };

  return (
    <div className="app">
      <Router>
        <Header
          handleToken={handleToken}
          token={token}
          visible={visible}
          setVisible={setVisible}
          search={search}
          setSearch={setSearch}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home search={search} maxPrice={maxPrice} minPrice={minPrice} />
            }
          />
          <Route path="/Offers/:id" element={<Offers />} />
          <Route path="/Login" element={<Login handleToken={handleToken} />} />
          <Route path="/Publish" element={<Publish token={token} />} />
          <Route path="/Payment" element={<Payment token={token} />} />
        </Routes>

        {visible && <Modal setVisible={setVisible} handleToken={handleToken} />}
      </Router>
    </div>
  );
}

export default App;
