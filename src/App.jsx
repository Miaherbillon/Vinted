import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // console.log(data);
  return (
    <section>
      {data.offers.map((elem) => {
        return (
          <>
            <div key={elem._id}>{elem.product_name}</div>
            {}
          </>
        );
      })}
    </section>
  );
}

export default App;
