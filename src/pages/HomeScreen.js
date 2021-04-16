import { useContext } from "react";
import styles from "../styles/HomeScreen.module.css";
import Features from "../components/Features";
import Footer from "../components/Footer";
import MobileCarousel from "../components/MobileCarousel";
import Items from "./Items";
import { Count } from "../components/shared/StyledDiv";
import { RightIcon, SearchIcon, SadFaceIcon } from "../components/shared/Icons";

import { ProductContext } from "../GlobalState";

const HomeScreen = () => {
  const { products, selectCategory } = useContext(ProductContext);
  const handleCatOpen = (id) => {
    selectCategory(id);
  };

  return (
    <div>
      <div className={styles.hm__container}>
        <div className={styles.hm__search_flex}>
          <div className={styles.hm__search_bar}>
            <input
              type="text"
              placeholder="Search For Products..."
              className={styles.search__input}
            />
            <button className={styles.search__btn}>
              <SearchIcon />
            </button>
          </div>
        </div>
        <div className={styles.hm__content}>
          <div className={styles.hm__aside_left}>
            <div className={styles.hm__aside_left_mhead}>
              <p>TOP CATEGORIES</p>
            </div>
            <div className={styles.hm__aside_left_desktop}>
              {products.map((product) => (
                <div key={product.id}>
                  <div
                    className={styles.product__category}
                    onClick={() => handleCatOpen(product.id)}
                  >
                    <p>{product.category} </p>
                    <span>({product.count})</span>
                  </div>
                </div>
              ))}
              <div className={styles.hm__viewall_link}>
                <RightIcon />
              </div>
            </div>
            <MobileCarousel />
          </div>
          <div className={styles.hm__middle}>
            <Items />
          </div>
          <div className={styles.hm__aside_right}>
            <div className={styles.bag__title}>
              <h4>Bag</h4>
              <Count>
                <span>0</span>
              </Count>
            </div>
            <div className={styles.sadface__icon}>
              <SadFaceIcon />
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
