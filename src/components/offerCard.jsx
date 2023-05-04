import { Link } from "react-router-dom";

const OffersCard = ({ offer }) => {
  console.log(offer);
  return (
    <>
      <Link to={`/offer/$(offer._id}`} />
      <div>
        <button>
          <h2>
            {offer.owner.account.username} {}
          </h2>
          <h1>{offer.product_name}</h1>
          <img src={offer.product_image.secure_url} alt="" />
          <p>{offer.product_price}</p>
        </button>
      </div>
    </>
  );
};

export default OffersCard;
