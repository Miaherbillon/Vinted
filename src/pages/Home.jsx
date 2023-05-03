import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="router">
        <Link to="/Offers">Naviguer vers les details</Link>
        <div>coucou</div>
        <h1>je suis dans le Home</h1>
      </div>

      <img
        src="https://lereacteur-vinted.netlify.app/static/media/hero.2c66d85a1335550c4518.jpg"
        alt=""
      />
    </div>
  );
};
export default Home;
