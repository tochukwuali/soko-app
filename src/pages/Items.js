import { useContext } from "react";
import styles from "../styles/Items.module.css";
import { Link } from "react-router-dom";
import { Count } from "../components/shared/StyledDiv";

import { ProductContext } from "../GlobalState";
import { AddIcon } from "../components/shared/Icons";

const Items = () => {
  const { selectedI } = useContext(ProductContext);
  const sproducts = [...selectedI.items];
  return (
    <div>
      <div className={styles.hm__middle_header}>
        <h4>{selectedI.category}</h4>
        <Count>
          <span>{selectedI.count}</span>
        </Count>
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
                <AddIcon />
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
