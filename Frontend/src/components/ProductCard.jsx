import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={product.image} alt={product.name} style={styles.image} />
      </div>

      <h3 style={styles.name}>{product.name}</h3>
      <p style={styles.price}>₹{product.price}</p>

      <button
        style={styles.button}
        onMouseOver={(e) =>
          (e.target.style.background = "#8b6508")
        }
        onMouseOut={(e) =>
          (e.target.style.background = "#b8860b")
        }
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #eee",
    padding: "15px",
    textAlign: "center",
    borderRadius: "10px",
    background: "#fff",
    transition: "0.3s",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },

  imageContainer: {
    width: "150px",
    height: "150px",
    margin: "0 auto",
    overflow: "hidden",
    borderRadius: "8px",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",   // all images same size
    transition: "transform 0.4s ease",
  },

  name: {
    fontWeight: "bold",
    marginTop: "10px",
    color: "#333",
  },

  price: {
    color: "#b8860b",   // jewellery gold color
    fontWeight: "bold",
    fontSize: "18px",
  },

  button: {
    marginTop: "10px",
    padding: "8px 14px",
    border: "none",
    background: "#b8860b",
    color: "white",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },
};

export default ProductCard;
