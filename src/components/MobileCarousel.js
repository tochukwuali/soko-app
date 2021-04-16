import { useContext } from "react";
import styles from "../styles/MobileCarousel.module.css";
import Slider from "react-slick";
import { ProductContext } from "../GlobalState";

const MobileCarousel = () => {
  const { products } = useContext(ProductContext);

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <div className={styles.mobile_carousel}>
      <Slider {...settings} style={{ width: "100%" }}>
        {products.map((product, i) => (
          <div key={i} className={styles.mobile_carousel_image}>
            <img src={product.pic} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MobileCarousel;
