import { useContext, useState, useEffect } from "react";
import Footer from "../components/Footer";
import styles from "../styles/ItemDetails.module.css";
import { ProductContext } from "../GlobalState";
import Slider from "react-slick";
import Features from "../components/Features";
import QtyToggle from "../components/shared/QtyToggle/QtyToggle";
import { Link } from "react-router-dom";

const ItemDetails = ({ match }) => {
  const dotStyle = {
    bottom: "-25px",
    width: "100%",
    margin: 0,
    listStyle: "none",
    textAlign: "center",
    postion: "absolute",
  };

  const secondSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  const firstSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: () => (
      <div style={dotStyle}>
        <ul>
          <li className={styles.list_style}>
            <button></button>
          </li>
          <li className={styles.list_style}>
            <button></button>
          </li>
          <li className={styles.list_style}>
            <button></button>
          </li>
          <li className={styles.list_style}>
            <button></button>
          </li>
        </ul>
      </div>
    ),
  };

  const { selectedI, products } = useContext(ProductContext);

  const items =
    JSON.stringify(selectedI) !== "{}"
      ? selectedI.items[match.params.id]
      : products[0].items[match.params.id];
  useEffect(() => {
    if (JSON.stringify(selectedI) !== "{}") {
      setState(items);
    }
  }, [selectedI, items]);

  const [state, setState] = useState(items);
  return (
    <div>
      <div className={styles.details_container}>
        <div className={styles.details_content}>
          <div className={styles.details_image_carousel}>
            <Slider {...firstSettings} style={{ width: "30vw" }}>
              <div className={styles.carousel_image}>
                <img src={state.image} alt="" />
              </div>
              <div className={styles.carousel_image}>
                <img src={state.image} alt="" />
              </div>
              <div className={styles.carousel_image}>
                <img src={state.image} alt="" />
              </div>
              <div className={styles.carousel_image}>
                <img src={state.image} alt="" />
              </div>
            </Slider>
          </div>
          <div className={styles.details_wrapper}>
            <div className={styles.details_text}>
              <h4>{state.name}</h4>
              <p>{state.description}</p>
            </div>
            <div className={styles.details_price}>
              <p>UGX {state.price}</p>
              {state.discount ? (
                <div className={styles.details_discount}>
                  <small>-{state.discount}%</small>
                </div>
              ) : null}
            </div>
            <div className={styles.details_toggle}>
              <QtyToggle value={1} />
            </div>
            <div className={styles.details_btngroup}>
              <button>Add to Bag</button>
              <div className={styles.details_buy_btn}>
                <Link to="/purchase">Buy Now</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.details_rproducts}>
          <p>RELATED PRODUCTS</p>
          <div className={styles.details_rproducts_carousel}>
            <Slider {...secondSettings} style={{ width: "100vw" }}>
              <div className={styles.carousel_rel_image}>
                <img src={state.image} alt="" />
                <p>Related Product</p>
              </div>
              <div className={styles.carousel_rel_image}>
                <img src={state.image} alt="" />
                <p>Related Product</p>
              </div>
              <div className={styles.carousel_rel_image}>
                <img src={state.image} alt="" />
                <p>Related Product</p>
              </div>
              <div className={styles.carousel_rel_image}>
                <img src={state.image} alt="" />
                <p>Related Product</p>
              </div>
              <div className={styles.carousel_rel_image}>
                <img src={state.image} alt="" />
                <p>Related Product</p>
              </div>
              <div className={styles.carousel_rel_image}>
                <img src={state.image} alt="" />
                <p>Related Product</p>
              </div>
              <div className={styles.carousel_rel_image}>
                <img src={state.image} alt="" />
                <p>Related Product</p>
              </div>
              <div className={styles.carousel_rel_image}>
                <img src={state.image} alt="" />
                <p>Related Product</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <Features />
      <Footer />
    </div>
  );
};

export default ItemDetails;
