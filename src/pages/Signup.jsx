import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import Cookies from "js-cookie";

const Signup = ({ handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newletter, setNewletter] = useState(false);
  const [avatar, setAvatar] = useState();

  const navigate = useNavigate();
  return (
    <div>
      <h1>S'inscrire</h1>
      <form
        className="signup"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const response = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/user/signup",
              {
                email: email,
                password: password,
              }
            );
            if (response.data.token) {
              handleToken(response.data.token, response.data.id);
              navigate("/Publish");
            }

            console.log(response.data.token);
          } catch (error) {
            console.log(error.response);
          }
        }}
      >
        <input
          type="text"
          placeholder="Nom"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          value={username}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="azerty"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <input
          type="file"
          onChange={(event) => {
            setAvatar(event.target.avatar);
          }}
          value={avatar}
        />

        <div className="checkBox">
          <input
            id="newletter"
            type="checkbox"
            onChange={() => {
              setNewletter(!newletter);
            }}
            checked={newletter} // lier la checkbox
          />

          <label htmlFor="newletter">
            <p>Abonnement à la newletter</p>
          </label>
        </div>

        <input type="submit" value="s'inscrire" />
      </form>
      <Link to="/Login"> Tu as déja un compte ? connecte-toi</Link>
    </div>
  );
};

export default Signup;
