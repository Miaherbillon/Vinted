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
  // console.log(data);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <Router>
      <div>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<Offers data={data} />} /> */}
            <Route path="/Offers" element={<Offers data={data} />} />
          </Routes>
        </div>
      </div>

      <div className="offers">
        {data.offers.map((elem) => {
          // console.log(elem.product_image.url);
          return (
            <section className="offer" key={elem._id}>
              <section>
                <div>
                  <h1>{elem.product_name}</h1>
                  <img src={elem.product_image.url} alt="" />
                  <p>{elem.product_description}</p>
                </div>
              </section>
            </section>
          );
        })}
      </div>
    </Router>
  );
}

export default App;
