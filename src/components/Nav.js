import { IconContext } from "react-icons";
import { IoStorefrontOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import styles from "../styles/Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.nav__container}>
      <div className={styles.navbar}>
        <div className={styles.navbar__left}>
          <IconContext.Provider
            value={{
              size: "2.3em",
              color: "#8a8b8b",
              style: { verticalAlign: "middle" },
            }}
          >
            <div className={styles.navbar__icon}>
              <IoStorefrontOutline />
            </div>
          </IconContext.Provider>
          <div className={styles.navbar__address}>
            <h3>Target</h3>
            <p>Cham Towers, Plot 12 Nkruma Road, Kampala, Ug</p>
          </div>
          {/* <Title title={title} /> */}
        </div>

        <div className={styles.navbar__right}>
          <IconContext.Provider
            value={{
              size: "1.5em",
              color: "#8a8b8b",
              style: {
                verticalAlign: "middle",
              },
            }}
          >
            <Link to="/bag" style={{ textDecoration: "none" }}>
              <div className={styles.bag_icon}>
                <FiShoppingBag /> <span>Bag</span>
              </div>
            </Link>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              size: "1.5em",
              color: "#8a8b8b",
              style: {
                verticalAlign: "middle",
              },
            }}
          >
            <Link to="/account" style={{ textDecoration: "none" }}>
              <div className={styles.order_icon}>
                <IoPersonOutline />
                <span>Account</span>
              </div>
            </Link>
          </IconContext.Provider>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
