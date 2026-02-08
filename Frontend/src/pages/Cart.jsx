import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const Cart = () => {
  const items = useSelector(state => state.cart.items);

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart</h2>

      {items.length === 0 && <p>Cart is empty</p>}

      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default Cart;
