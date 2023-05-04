import { useState, useEffect } from "react";
import axios from "axios";

const Connexion = () => {
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
    <p>Loading ...</p>
  ) : (
    <section className="router">
      <div className="connexionBox">
        <div>
          <form>
            <label>Votre email : </label>
            <input type="text" placeholder="Inscrivez votre email ici" />
            <label>Mot de passe : </label>
            <input type="password" placeholder="azerty" />
            <button>Validez</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Connexion;
