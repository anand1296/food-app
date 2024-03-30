import { Link } from "react-router-dom";
import { AppConstants } from "../../../utils/constants";
// import "./Header.css"
import { useContext, useState } from "react";
import useOnlineStatus from "../../../utils/hooks/useOnlineStatus";
import UserContext from "../../../utils/contexts/user.context";
import { useSelector } from "react-redux";
import { RootState } from "../../../utils/store/store";
import { createPortal } from "react-dom";
import Cart from "../../Cart/Cart";

const Header = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);
  const [loginBtnText, setLoginBtnText] = useState<"Login" | "Logout">("Login");
  const [showCart, setShowCart] = useState(false);

  const isOnline = useOnlineStatus();
  const cartItems = useSelector((store: RootState) => store.cart.items);
  const totalItems = cartItems?.reduce((acc, curr) => acc+curr.count, 0);

  return (
    <div className="header-wrapper fixed top-0 left-0 right-0 h-20 px-5 flex justify-between items-center shadow-lg bg-[#fff] z-10">
      <div className="logo h-16 animate-logo">
        <img className="w-full h-full" src={AppConstants.HEADER.LOGO} alt="logo" />
      </div>
      <div className="links flex items-center">
        <ul className="flex gap-8">
          <li>Online Status {isOnline ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
          <li data-testid="cart-btn" className="relative" onClick={() => setShowCart(!showCart)}>
            🛒
            <span data-testid="cart-items-count"
              className="cart-items absolute top-0 right-0 p-[7px] w-[7px] h-[7px] flex justify-center items-center text-xs font-semibold rounded-full bg-red-400"
              style={{ backgroundColor: "red", height: "6px", width: "6px", padding: "7px", fontSize: "11px" }}
            >
              {totalItems}
            </span>
            {showCart && createPortal(<Cart />, document.body)}
          </li>
          <li>
            <button  onClick={() => setLoginBtnText((prevTxt: "Login" | "Logout") => (prevTxt === "Login" ? "Logout" : "Login"))}>
              {loginBtnText === "Logout" ? <b>{loggedInUser}</b> : loginBtnText}
            </button>
          </li>
          <li>
            <input
              id="username-ip"
              className="border"
              type="text"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
