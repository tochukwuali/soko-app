import { IoSadOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import styles from "../styles/Bag.module.css";

const Bag = () => {
  return (
    <div className={styles.bag_container}>
      <div className={styles.sadface_icon}>
        <IconContext.Provider
          value={{
            size: "10em",
            color: "#2666cc",
          }}
        >
          <IoSadOutline />
        </IconContext.Provider>
      </div>
      <div className={styles.bag_body}>
        <h4>It's empty here</h4>
        <p> Start shopping to add items to your bag </p>
        <button>Back to homepage</button>
      </div>
    </div>
  );
};

export default Bag;
