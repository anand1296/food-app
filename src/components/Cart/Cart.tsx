import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../utils/store/store";
import "./Cart.css";
import { clearCart } from "../../utils/store/cart.slice";

const Cart = () => {
    const dispatch = useDispatch();
  const cartItems = useSelector((store: RootState) => store.cart.items);

  const getTotal = () => {
    let sum = 0;
    cartItems.forEach((item) => {
        const price = item.price / 100;
        sum += price * (item.count ?? 1);
    });
    return sum.toFixed(2);
  };

  return (
    <div className="modal flex flex-col justify-between">
      <div className="modal-header"></div>
      <div className="modal-content cart-items-list">
        {cartItems.map((item) => (
          <div data-testid="cart-item" key={item.id} className="flex justify-between my-2">
            <div className="item-name">
              {item.name}
            </div>
            <div>
                x {item.count ?? 1}
            </div>
            <div>{(item.price / 100).toFixed(2)}</div>
          </div>
        ))}
      </div>

      <div className="modal-footer">
        <div className="total flex justify-between w-12/12" style={{ width: "100%", padding: '1rem 0' }}>
          <div>Total</div>
          <div>₹ {getTotal()}</div>
        </div>
        <div style={{ width: "100%", display: 'flex', gap: '10px' }}>
          <button className="btn primary" style={{flex: 1}}>Checkout</button>
          <button className="btn default" style={{flex: 1}} onClick={() => dispatch(clearCart())}>Clear cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
