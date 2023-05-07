import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-antiguo.png";
// import OffersCard from "./offerCard";
import axios from "axios";

const Header = ({ handleToken, token, setVisible }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const [search, setSearch] = useState("");
  // const tab = [];

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

  // console.log(data.offers);

  // for (let i = 0; i < data.offers.length; i++) {
  //   // console.log(data.offers(i));
  //   const wordSearch = search[i];
  //   if (tab.length < 20) {
  //     // if (wordSearch.keywords.includes(search)) {
  //     tab.push(<OffersCard wordSearch={wordSearch} key={wordSearch} />);
  //   } else {
  //     break;
  //   }
  //   console.log(tab);
  // }

  return isLoading ? (
    <p>Loading ... </p>
  ) : (
    <div className="router">
      <Link to="/">
        <img src={Logo} alt="Logo vinted" />
      </Link>

      <input
        type="text"
        // placeholder=" 🔎 Je recherche "
        // onChange={(event) => {
        //   setSearch(event.target.value);
        // }}
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
            S'inscrire
          </button>
          {/* </Link> */}
          <Link to="/Login">
            <button>Se connecter</button>
          </Link>
        </>
      )}

      <Link to="/Vendre">
        <button className="buttonVends">Vends tes articles</button>
      </Link>
    </div>
  );
};
export default Header;
