import { Link } from "react-router-dom";
import Logo from "../assets/logo-antiguo.png";

const header = () => {
  return (
    <>
      <section className="router">
        <div>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <input type="text" placeholder="Je recherche" />
      </section>
      <img
        src="https://lereacteur-vinted.netlify.app/static/media/hero.2c66d85a1335550c4518.jpg"
        alt=""
      />
    </>
  );
};
export default header;
