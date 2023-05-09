import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios";

const CheckoutForm = ({ price, title }) => {
  const [isLoading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  //
  let stripe = useStripe();
  let elements = useElements();
  //
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: responseFromBackend.data,
      });
      console.log(stripeResponse);

      const stripeToken = stripeResponse.token.id;

      const responseFromBackend = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: title,
          amount: price,
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
      <p>{title}</p>
      <p>{price} €</p>
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
export default CheckoutForm;
