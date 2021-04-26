import { YellowBgButton, P } from "../components/shared/StyledDiv";
import styles from "../styles/orders.module.css";

const Orders = () => {
  return (
    <div className={styles.orders_container}>
      <div className={styles.orders_content}>
        <div className={styles.orders_header}>
          <h2>SOKO</h2>
        </div>
        <div className={styles.orders_body}>
          <div>
            <h4>Login</h4>
            <P>Please Login to view your orders </P>
            <P>Enter your phone number </P>
          </div>
          <div className={styles.orders_body_input}>
            <label>Phone Number</label>
            <input type="number" placeholder="00 000 0000" />
          </div>
          <div className={styles.orders_body_btn}>
            <YellowBgButton>Send Verification Code</YellowBgButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
