import { useState } from "react";

function ProductCard({ bike }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <img
        src={bike.image}
        alt={bike.name}
        className="bike-image"
      />

      <h3>{bike.name}</h3>

      <p>{bike.desc}</p>

      <h4>{bike.price}</h4>

      <div className="card-buttons">
        <button
          className="like-btn"
          onClick={() => setLiked(!liked)}
        >
          {liked ? "❤️" : "🤍"}
        </button>

        <a href={bike.link} target="_blank" rel="noreferrer">
          <button className="details-btn">
            View Details
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProductCard;