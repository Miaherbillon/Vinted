import { Link } from "react-router-dom";
import Logo from "../assets/logo-antiguo.png";

const header = () => {
  return (
    <>
      <div className="router">
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo vinted" />
          </Link>
        </div>
        <input type="text" placeholder="Je recherche" />
        <button>S'inscrire</button>
        <button>Se connecter</button>
      </div>
      <img
        src="https://lereacteur-vinted.netlify.app/static/media/hero.2c66d85a1335550c4518.jpg"
        alt=""
      />
    </>
  );
};
export default header;
