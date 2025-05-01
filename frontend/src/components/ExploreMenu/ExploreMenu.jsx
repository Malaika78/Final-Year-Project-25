import "./ExploreMenu.css";
import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const ExploreMenu = () => {
  const navigate = useNavigate();
  const { menuList } = useContext(StoreContext);

  const scrollRef = useRef(null);
  useEffect(() => {
    const scroller = scrollRef.current;
    const handleWheel = (e) => {
      if (scroller && e.deltaY !== 0) {
        e.preventDefault();
        scroller.scrollLeft += e.deltaY;
      }
    };
    scroller?.addEventListener("wheel", handleWheel, { passive: false });

    return () => scroller?.removeEventListener("wheel", handleWheel);
  }, []);
  return (
    <section className="explore-menu" id="explore-menu">
      <div className="container">
        <h1 className="section-title">Explore Restaurants</h1>
        <p className="section-description">
          Discover a world of flavors with our on-demand food delivery app!
          Browse through a wide range of restaurants, from local favorites to
          top-rated eateries. Enjoy a seamless ordering experience, explore
          diverse cuisines, and get your favorite meals delivered to your
          doorstep— fresh, fast, and hassle-free.
        </p>

        <div className="explore-menu-scroll" ref={scrollRef}>
          {menuList?.map((item, index) => (
            <div
              key={index}
              className="menu-card"
              onClick={() => navigate(`/restaurant/${item?._id}`)}
            >
              <div className="menu-image-wrapper">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="menu-content">
                <h3>{item.name}</h3>
                <p className="menu-description">{item?.description}</p>
                <span className="menu-count">
                  Total menu: {item?.menuItems?.length}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </section>
  );
};

export default ExploreMenu;
