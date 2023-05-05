import { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/user/login"
        );
        setData(response);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <section className="router">
      <div className="connexionBox">
        <div>
          <form>
            <h1>Se connecter</h1>
            <p>email</p>
            <input type="text" placeholder="Inscrivez votre email ici" />
            <p>password</p>
            <input type="password" placeholder="azerty" />
            <button>Validez</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Login;
