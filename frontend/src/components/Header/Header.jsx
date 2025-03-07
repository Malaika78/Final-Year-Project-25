/* eslint-disable react/no-unescaped-entities */
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
        Enjoy the convenience of ordering your favorite meals anytime,
         anywhere with our on-demand food delivery app. Browse a variety of restaurants, 
         explore diverse cuisines, and get fresh, hot meals delivered straight to your doorstep.
          With real-time tracking, multiple payment options, and exclusive deals,
           we make food delivery fast, easy, and reliable!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
