import { Link } from "react-router-dom";
import Logo from "../assets/logo-antiguo.png";

const Header = () => {
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
        <button className="buttonVends">Vends tes articles</button>
      </div>
    </>
  );
};
export default Header;
