import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty
} from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div style={styles.item}>
      <img
        src={item.image}
        alt={item.name}
        style={styles.image}
      />

      <div style={styles.details}>
        <h4 style={styles.name}>{item.name}</h4>
        <p style={styles.price}>₹{item.price}</p>

        <div style={styles.qtyBox}>
          <button
            style={styles.qtyBtn}
            onMouseOver={(e) => (e.target.style.background = "#8b6508")}
            onMouseOut={(e) => (e.target.style.background = "#b8860b")}
            onClick={() => dispatch(decreaseQty(item.id))}
          >
            -
          </button>

          <span style={styles.qty}>{item.quantity}</span>

          <button
            style={styles.qtyBtn}
            onMouseOver={(e) => (e.target.style.background = "#8b6508")}
            onMouseOut={(e) => (e.target.style.background = "#b8860b")}
            onClick={() => dispatch(increaseQty(item.id))}
          >
            +
          </button>
        </div>
      </div>

      <button
        style={styles.removeBtn}
        onMouseOver={(e) => (e.target.style.background = "#a80000")}
        onMouseOut={(e) => (e.target.style.background = "#d32f2f")}
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        Remove
      </button>
    </div>
  );
};

const styles = {
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #eee",
    padding: "15px 0",
    gap: "15px"
  },

  image: {
    width: "90px",
    height: "90px",
    objectFit: "cover",
    borderRadius: "8px"
  },

  details: {
    flex: 1
  },

  name: {
    margin: "0",
    fontWeight: "bold",
    color: "#333"
  },

  price: {
    color: "#b8860b",
    fontWeight: "bold",
    margin: "5px 0"
  },

  qtyBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  qtyBtn: {
    background: "#b8860b",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s"
  },

  qty: {
    fontWeight: "bold",
    fontSize: "16px"
  },

  removeBtn: {
    background: "#d32f2f",
    color: "#fff",
    border: "none",
    padding: "7px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s"
  }
};

export default CartItem;
