import { Link } from "react-router-dom";

const OffersCard = ({ offer }) => {
  const { owner, product_image, product_price, product_details } = offer;

  // console.log(offer);
  return (
    <Link to={`/offers/${offer._id}`}>
      <div>
        <article>
          <h2>
            <span>{offer.owner.account.username}</span>
            <span>
              {owner.account.avatar && (
                <img src={owner.account.avatar.secure_url} alt="" />
              )}
            </span>
          </h2>
          <div>
            <img src={offer.product_image.secure_url} alt="" />
            <p>{offer.product_price} €</p>
            <div>
              {product_details.map((detail, index) => {
                // console.log(detail);
                if (detail.MARQUE) {
                  return <p key={index}>{detail.MARQUE}</p>;
                } else if (detail.TAILLE) {
                  return <p key={index}>{detail.TAILLE}</p>;
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </article>
      </div>
    </Link>
  );
};

export default OffersCard;
