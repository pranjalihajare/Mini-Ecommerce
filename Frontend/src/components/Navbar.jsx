import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Naksh Jewels</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Products
        </Link>

        <Link to="/cart" style={styles.link}>
          Cart ({cartItems.length})
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
    background: "linear-gradient(90deg, #1c1c1c, #2c2c2c)",
    color: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
  },

  logo: {
    color: "#d4af37",
    fontWeight: "bold",
    letterSpacing: "1px"
  },

  links: {
    display: "flex",
    alignItems: "center",
    gap: "25px"
  },

  link: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "0.3s",
  }
};

export default Navbar;
