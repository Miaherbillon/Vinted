import {
  useStripe,
  useElements,
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const CheckoutForm = ({ product_name, product_price }) => {
  const [paymentStatus, setPaymentStatus] = useState(0); // 0 = pas encore cliqué, 1 = en attente de réponse, 2 = OK, 3 = Error

  const stripe = useStripe();
  const elements = useElements();
  const id = Cookies.get("vintedId");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPaymentStatus(1);
    try {
      const cardElement = elements.getElement(CardNumberElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: id,
      });

      const stripeToken = stripeResponse.token.id;

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: product_name,
          amount: product_price,
        }
      );
      // console.log(responseFromBackend);
      if (response.data === "succeeded") {
        setPaymentStatus(2);
      }
    } catch (error) {
      console.log(error.message);
      setPaymentStatus(3);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardNumberElement />
      <CardExpiryElement />
      <CardCvcElement />
      {paymentStatus === 2 ? (
        <p>Paiement validé</p>
      ) : (
        <button type="submit" disabled={paymentStatus === 1}>
          Payer !
        </button>
      )}

      {paymentStatus === 3 && (
        <p>Une erreur est survenue, veuillez réessayer !</p>
      )}
    </form>
  );
};
export default CheckoutForm;
