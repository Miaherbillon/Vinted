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
  const { product_name, product_price } = useLocation().state;

  return (
    <>
      {token ? (
        <div>
          <h1>Résumé de la commande</h1>
          <p>Prix de la commande : {product_price} €</p>
          <p>Vous allez acheter : {product_name}</p>
          <Elements stripe={stripePromise}>
            <CheckoutForm
              product_name={product_name}
              product_price={product_price}
            />
          </Elements>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Paiement;
