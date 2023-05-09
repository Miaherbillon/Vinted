import { useLocation } from "react-router-dom";

//Stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
//composants
import CheckoutForm from "../components/CheckoutForm";

//Clé
const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Paiement = () => {
  const location = useLocation();
  const { title, price } = location.state;

  // console.log(location);
  return (
    <>
      <Elements stripe={stripePromise}>
        <div></div> <div></div>
        <CheckoutForm title={title} price={price} />
      </Elements>
    </>
  );
};

export default Paiement;
