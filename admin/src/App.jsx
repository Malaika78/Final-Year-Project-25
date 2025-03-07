import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Restaurant from "./pages/restaurant";
import Menu from "./pages/Menu";
import { io } from "socket.io-client";
import { useEffect } from "react";

export const url = "http://localhost:4000";
const App = () => {
  const generateDummyId = () =>
    `admin_${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    const dummyId = generateDummyId();
    const socket = io(url, {
      path: "/websocket",
      query: { adminId: dummyId }, // Pass dummy ID as query parameter
    });

    socket.on("connect", () => {
      console.log("User Connected");
    });
    // Emit an `admin` event to the server
    socket.emit("admin", { message: "Admin is online" });

    // Listen for responses from the server (optional)
    socket.on("admin-response", (data) => {
      console.log("Server responded to admin event:", data);

      toast.success(data.message);
    });

    // Cleanup on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
          <Route path="/restaurant" element={<Restaurant url={url} />} />

          <Route path="/menu" element={<Menu url={url} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
