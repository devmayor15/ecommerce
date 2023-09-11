import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Congratulations!, You've successfully ordered");

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      {totalAmount > 1 ? (
        <div>
          <h1>Your Cart Items</h1>
        </div>
      ) : (
        <p></p>
      )}
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button onClick={notify}>Checkout</button>
          <Toaster
            toastOptions={{
              className: "",
              style: {
                border: "1px solid #fff",
                padding: "16px",
                color: "#000",
              },
            }}
          />
        </div>
      ) : (
        <h1> Your cart is empty</h1>
      )}
    </div>
  );
};
export default Cart;
