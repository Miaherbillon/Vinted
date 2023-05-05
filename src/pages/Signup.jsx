import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newletter, setNewletter] = useState(false);

  return (
    <div>
      <h1>S'inscrire</h1>
      <form>
        <input
          type="text"
          placeholder="nom utilisateur"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          value={username} //value sera la valeur de username
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
        <div>
          <input
            id="newletter"
            type="checkbox"
            onChange={() => {
              setNewletter(!newletter);
            }}
            checked={newletter} // lier la checkbox
          />
          <label htmlFor="newletter">S'inscrire a la newletter</label>
        </div>

        <input type="submit" value="s'inscrire" />
      </form>
      <Link to="/Login"> Tu as déja un compte ? connecte-toi</Link>
    </div>
  );
};

export default Signup;
