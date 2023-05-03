import { Link } from "react-router-dom";

const Offers = ({ data }) => {
  return (
    <section>
      <div className="router">
        <h1>Offers</h1>
        <Link to="/">Home</Link>
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
    </section>
  );
};

export default Offers;
