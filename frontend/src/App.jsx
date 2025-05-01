import { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingleRestaurant from "./pages/Restaurant";

import { io } from "socket.io-client";
import { StoreContext } from "./components/context/StoreContext";
import SearchScreen from "./pages/search/SearchScreen";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import AboutUs from "./pages/AboutUs/AboutUs";
const SOCKET_SERVER_URL = "http://localhost:4000";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const { token } = useContext(StoreContext);

  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL, {
      path: "/websocket",
      auth: {
        token: token,
      },
    });

    socket.on("connect", () => {
      console.log("User Connected");
    });
    // Listen for order status updates
    socket.on("order-status-update", (data) => {
      toast.success(data.message);
      //setData((prevStatus) => [...prevStatus, data]);
    });

    // Cleanup on component unmount
    return () => {
      socket.disconnect();
    };
  }, [token]);

  return (
    <>
      <ToastContainer />
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/restaurant/:id" element={<SingleRestaurant />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
