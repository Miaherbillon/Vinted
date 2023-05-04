import { Link } from "react-router-dom";
import Logo from "../assets/logo-antiguo.png";

const header = () => {
  return (
    <section className="router">
      <div>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <input type="text" placeholder="Je recherche" />
    </section>
  );
};
export default header;
