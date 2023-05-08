import { useState, useEffect } from "react";
import axios from "axios";

import OffersCard from "../components/offerCard";

const Home = ({ search }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [search]);

  return isLoading ? (
    <p>Loading ... </p>
  ) : (
    <>
      <img
        src="https://lereacteur-vinted.netlify.app/static/media/hero.2c66d85a1335550c4518.jpg"
        alt=""
      />
      <div className="offers">
        {data.offers.map((elem) => {
          console.log(elem);

          return <OffersCard key={elem._id} offer={elem} />;
        })}
      </div>
    </>
  );
};
export default Home;
