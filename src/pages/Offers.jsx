import { Link } from "react-router-dom";

const Offers = ({ data }) => {
  return (
    <section>
      <div>
        <h1>Offers</h1>
        <Link to="/">Home</Link>
      </div>
      <div>
        {data.offers.map((elem) => {
          return (
            <section className="offerHeader" key={elem._id}>
              <h1>{elem.product_name}</h1>
              <p>{elem.product_description}</p>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default Offers;
