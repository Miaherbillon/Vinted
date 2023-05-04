import { useState, useEffect } from "react";
import axios from "axios";

const Connexion = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/user/login"
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
            <h1>Se connecter</h1>
            <input type="text" placeholder="Inscrivez votre email ici" />

            <input type="password" placeholder="azerty" />
            <button>Validez</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Connexion;
