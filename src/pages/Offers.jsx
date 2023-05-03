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
            <>
              <div key={elem._id}>{elem.product_name}</div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Offers;
