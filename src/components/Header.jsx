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
        <Link to="/Signup">
          <button>S'inscrire</button>
        </Link>
        <Link to="/Login">
          <button>Se connecter</button>
        </Link>
        <Link to="/Vendre">
          <button className="buttonVends">Vends tes articles</button>
        </Link>
      </div>
    </>
  );
};
export default Header;
