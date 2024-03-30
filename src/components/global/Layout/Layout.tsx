import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import UserContext from "../../../utils/contexts/user.context";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "../../../utils/store/store";

const Layout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "New Default User",
    };

    setUserName(data.name);
  }, []);

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <main>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </UserContext.Provider>
    </Provider>
  );
};

export default Layout;
