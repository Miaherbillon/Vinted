import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-antiguo.png";

const Header = ({ handleToken, token }) => {
  return (
    <>
      <div className="router">
        <Link to="/">
          <img src={Logo} alt="Logo vinted" />
        </Link>

        <input type="search" placeholder=" 🔎 Je recherche " />

        {token ? (
          <button
            onClick={() => {
              handleToken(null);
            }}
          >
            Se deconnecter
          </button>
        ) : (
          <>
            <Link to="/Signup">
              <button>S'inscrire</button>
            </Link>
            <Link to="/Login">
              <button>Se connecter</button>
            </Link>
          </>
        )}

        <Link to="/Vendre">
          <button className="buttonVends">Vends tes articles</button>
        </Link>
      </div>
    </>
  );
};
export default Header;
