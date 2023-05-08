import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offers = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);
  console.log(data);
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <section className="Offers">
      <img src={data.product_image.secure_url} alt="" />
      <div className="OfferDescription">
        {data.product_details.map((details, index) => {
          console.log(details);
          const keyName = Object.keys(details)[0];
          return (
            <div className="OfferInfoDesc" key={index}>
              <span>{keyName} : </span>
              <span>{details[keyName]}</span>
            </div>
          );
        })}
        <div className="OfferPrice">{data.product_price} €</div>
      </div>
    </section>
  );
};
export default Offers;
