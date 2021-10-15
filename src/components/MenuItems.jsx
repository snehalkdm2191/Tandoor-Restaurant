// NPM packages
import { Link } from "react-router-dom";

export default function MenuItems({ item, to }) {
  const { name, description, imgUrl, price } = item;

  return (
    <div className="row category-row">
      <div className="col-md-4">
        <div className="category-img-div">
          <img className="category-food-img" src={imgUrl} alt={name} />
        </div>
      </div>
      <div className="col-md-8 category-text">
        <h4>{name}</h4>
        <p>{description}</p>
        <h6 className="price-data">{price} Sek</h6>
        <Link className="btn btn-view" to={to}>
          Edit profile
        </Link>
      </div>
    </div>
  );
}
