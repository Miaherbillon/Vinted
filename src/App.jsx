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
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/Offers/:id" element={<Offers />} />
      </Routes>
    </Router>
  );
}

export default App;
