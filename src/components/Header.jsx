import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-antiguo.png";
import axios from "axios";
import { Range } from "react-range";

const Header = ({ handleToken, token, setVisible, search, setSearch }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ... </p>
  ) : (
    <div className="router">
      <Link to="/">
        <img src={Logo} alt="Logo vinted" />
      </Link>
      <input
        type="text"
        placeholder=" 🔎 Je recherche "
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

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
          {/* <Link to="/Signup"> */}
          <button
            onClick={() => {
              setVisible(true);
            }}
          >
            Signup
          </button>
          <Link to="/Login">
            <button>Login</button>
          </Link>
        </>
      )}
      {token ? (
        <Link to="/Publish">
          <button className="buttonVends">Vendre</button>
        </Link>
      ) : (
        <Link to="/Login">
          <button className="buttonVends">Vendre</button>
        </Link>
      )}
    </div>
  );
};
export default Header;
