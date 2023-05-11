import { Navigate, useLocation } from "react-router-dom";

//Stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
//composants
import CheckoutForm from "../components/CheckoutForm";

//Clé
const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Paiement = ({ token }) => {
  const location = useLocation();
  // console.log(location);
  const { product_name, product_price } = location.state;

  return (
    <>
      {token ? (
        <Elements stripe={stripePromise}>
          <div></div> <div></div>
          <CheckoutForm
            product_name={product_name}
            product_price={product_price}
          />
        </Elements>
      ) : (
        <Navigate to="/Login" />
      )}
    </>
  );
};

export default Paiement;
