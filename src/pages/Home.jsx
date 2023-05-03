import { Link } from "react-router-dom";

const Home = ({ data }) => {
  return (
    <div>
      <div className="router">
        <Link to="/Offers">Naviguer vers les details</Link>
        <div>coucou</div>
        <h1>je suis dans le Home</h1>
      </div>

      <img
        src="https://lereacteur-vinted.netlify.app/static/media/hero.2c66d85a1335550c4518.jpg"
        alt=""
      />

      <div className="offers">
        {data.offers.map((elem) => {
          console.log(elem.product_details);
          return (
            <section className="offer" key={elem._id}>
              <section>
                <div>
                  <h1>{elem.owner.account.username} 🦊</h1>
                  <img src={elem.product_image.url} alt="" />
                  <p>{elem.product_price} €</p>
                  {/* <p>{elem.product_details}</p> */}
                </div>
              </section>
            </section>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
