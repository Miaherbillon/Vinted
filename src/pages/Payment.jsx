import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Paiement = () => {
  //
  const location = useLocation();
  const { title } = location.state;
  //
  const stripe = useStripe();
  const elements = useElements();
  //
  const [isLoading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  //
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: "id de l'acheteur",
      });
      console.log(stripeResponse);

      const stripeToken = stripeResponse.token.id;

      const responseFromBackend = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: "title",
          amount: "price",
        }
      );
      console.log(responseFromBackend.data);
      if (responseFromBackend.data === "succeeded") {
        setLoading(false);
        setCompleted(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="pay">
      <span>{title}</span>
      <form onSubmit={handleSubmit}>
        <h1>Formulaire de paiement</h1>
        <CardElement />
        {completed ? (
          <p>Paiement validé</p>
        ) : (
          <button type="submit" disabled={isLoading}>
            Pay
          </button>
        )}
      </form>
    </div>
  );
};
export default Paiement;
