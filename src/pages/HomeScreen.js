import { useContext } from "react";
import styles from "../styles/HomeScreen.module.css";
// import { products } from "../data";
import { IconContext } from "react-icons";
import { FiChevronRight, FiSearch } from "react-icons/fi";
import { IoSadOutline } from "react-icons/io5";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Items from "./Items";

import { ProductContext } from "../GlobalState";

const HomeScreen = () => {
  const { products, selectCategory, selectedI } = useContext(ProductContext);
  return (
    <div>
      <div className={styles.hm__container}>
        <div className={styles.hm__content}>
          <div className={styles.hm__aside_left}>
            {products.map((product) => (
              <div key={product.id}>
                <div
                  className={styles.product__category}
                  onClick={() => selectCategory(product.id)}
                >
                  <p>{product.category} </p>
                  <span>({product.count})</span>
                </div>
              </div>
            ))}
            <div className={styles.hm__viewall_link}>
              <IconContext.Provider
                value={{
                  size: "1.2em",
                  color: "#2666cc",
                  style: { verticalAlign: "middle" },
                }}
              >
                <h4>
                  View all Categories <FiChevronRight />
                </h4>
              </IconContext.Provider>
            </div>
          </div>
          <div className={styles.hm__middle}>
            <div className={styles.hm__search_bar}>
              <input
                type="text"
                placeholder="Search For Products..."
                className={styles.search__input}
              />
              <button className={styles.search__btn}>
                <IconContext.Provider
                  value={{
                    size: "1.3em",
                    color: "#2666cc",
                    style: {
                      verticalAlign: "middle",
                    },
                  }}
                >
                  <FiSearch />
                </IconContext.Provider>
              </button>
            </div>

            {JSON.stringify(selectedI) !== "{}" ? <Items /> : null}
          </div>
          <div className={styles.hm__aside_right}>
            <div className={styles.bag__title}>
              <h4>Bag</h4>
              <div className={styles.category__count}>
                <span>0</span>
              </div>
            </div>
            <div className={styles.sadface__icon}>
              <IconContext.Provider
                value={{
                  size: "8em",
                  color: "#2666cc",
                }}
              >
                <IoSadOutline />
              </IconContext.Provider>
            </div>
            <div className={styles.bag__body}>
              <h4>It's empty here</h4>
              <p> Start shopping to add items to your bag </p>
            </div>
          </div>
        </div>
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
