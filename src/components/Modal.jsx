import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Modal = ({ setVisible, handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newletter, setNewletter] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="modal-root">
      <div className="modal">
        <button
          onClick={() => {
            setVisible(false);
          }}
        >
          X
        </button>
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
                    username: username,
                    password: password,
                    newletter: newletter,
                  }
                );
                if (response.data.token) {
                  handleToken(response.data.token);
                  navigate("/");
                  setVisible(false);
                }
                console.log(response.data.token);
              } catch (error) {
                console.log(error.response);
              }
            }}
          >
            <input
              type="email"
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
            />
            <input
              type="text"
              placeholder="Nom"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              value={username}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
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

            <input type="submit" value="S'inscrire" />
          </form>
          <Link to="/Login"> Tu as déja un compte ? connecte-toi</Link>
        </div>
      </div>
    </div>
  );
};
export default Modal;
