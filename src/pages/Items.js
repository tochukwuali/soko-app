import { useContext } from "react";
import styles from "../styles/Items.module.css";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { IconContext } from "react-icons";
import { ProductContext } from "../GlobalState";

const Items = () => {
  const { selectedI } = useContext(ProductContext);
  const sproducts = [...selectedI.items];
  return (
    <div>
      <div className={styles.hm__middle_header}>
        <h4>{selectedI.category}</h4>
        <div className={styles.category__count}>
          <span>{selectedI.count}</span>
        </div>
      </div>

      {sproducts.map((item) => (
        <div key={item.item_id} className={styles.product__details}>
          <div className={styles.product__image}>
            <img src={item.image} alt="" />
          </div>
          <div className={styles.product__name}>
            <p>{item.name}</p>
            <p>UGX {item.price}</p>
          </div>
          <Link to={`/item/${item.item_id}`} style={{ textDecoration: "none" }}>
            <div className={styles.add__btn}>
              <button>
                <IconContext.Provider
                  value={{
                    size: "1.5em",
                    color: "#2666cc",
                    style: { paddingRight: "4px" },
                  }}
                >
                  <FiPlus />
                </IconContext.Provider>
                Add
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Items;
