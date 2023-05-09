import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import Modal from "./components/Modal";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//pages
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";
//components
import Header from "./components/Header";

//
const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

function App() {
  const [token, setToken] = useState(Cookies.get("vintedToken") || null);
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [minPrice, setMinPrice] = useState(0);

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
          <Route path="Publish" element={<Publish token={token} />} />
          <Route path="/Payment" element={<Payment />} />
        </Routes>
        {visible && <Modal setVisible={setVisible} handleToken={handleToken} />}
        <div>
          {/* <Elements stripe={stripePromise}>
            <Paiement />
          </Elements> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
