import { Link } from "react-router-dom";
import Logo from "../assets/logo-antiguo.png";

const Home = ({ data }) => {
  return (
    <>
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
                <button>
                  <h1>{elem.owner.account.username} 🦊</h1>
                  <img src={elem.product_image.url} alt="" />
                  <p>{elem.product_price} €</p>
                  {/* <p>{elem.product_details}</p> */}
                </button>
              </section>
            </section>
          );
        })}
      </div>
    </>
  );
};
export default Home;
