import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
//pages
import Home from "./pages/Home";
import Offers from "./pages/Offers";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <Router>
      <div>
        <div className="router">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Offers" element={<Offers data={data} />} />
          </Routes>
        </div>

        <img
          src="https://lereacteur-vinted.netlify.app/static/media/hero.2c66d85a1335550c4518.jpg"
          alt=""
        />
        <div className="offerHeader">
          {data.offers.map((elem) => {
            return (
              <>
                <div key={elem._id}>{elem.product_name}</div>
              </>
            );
          })}
        </div>
      </div>
    </Router>
  );
}

export default App;
