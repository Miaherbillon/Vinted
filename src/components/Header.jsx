import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-antiguo.png";
import axios from "axios";

const Header = ({
  handleToken,
  token,
  setVisible,
  search,
  setSearch,
  maxPrice,
  setMaxPrice,
  minPrice,
  setMinPrice,
}) => {
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

      <div>
        <input
          type="text"
          placeholder=" 🔎 Je recherche "
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />

        <div className="filter">
          <div>
            <p>Prix Min : € </p>
            <input
              type="number"
              value={minPrice}
              onChange={(event) => {
                setMinPrice(event.target.value);
              }}
            />
          </div>
          <div>
            <p>Prix Max : € </p>
            <input
              type="number"
              value={maxPrice}
              onChange={(event) => {
                setMaxPrice(event.target.value);
              }}
            />
          </div>
        </div>
      </div>

      {token ? (
        <button
          onClick={() => {
            handleToken(null, null);
          }}
        >
          Se deconnecter
        </button>
      ) : (
        <>
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
          <button className="buttonVends">Vends tes articles</button>
        </Link>
      ) : (
        <Link to="/Login">
          <button className="buttonVends">Vends tes articles</button>
        </Link>
      )}
    </div>
  );
};
export default Header;
