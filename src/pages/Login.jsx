import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <section className="router">
      <div className="connexionBox">
        <div>
          <h1>Se connecter</h1>
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              try {
                const response = await axios.post(
                  "https://lereacteur-vinted-api.herokuapp.com/user/login",
                  {
                    email: email,
                    password: password,
                  }
                );
                if (response.data.token) {
                  handleToken(response.data.token);
                  navigate("/Publish");
                  // console.log(response);
                }
                console.log(response.data);
              } catch (error) {
                console.log(error);
              }
            }}
          >
            <p>Mail : </p>
            <input
              type="email"
              placeholder="votre email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
            />
            <p>Password : </p>
            <input
              type="password"
              placeholder="azerty"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};
export default Login;
