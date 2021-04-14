import styles from "../styles/purchase.module.css";

const Purchase = () => {
  return (
    <div className={styles.purchase_container}>
      <div className={styles.purchase_content}>
        <div className={styles.purchase_order_details}>
          <div className={styles.purchase_order}>
            {/* <div className={styles.purchase_order_st}>1</div>
            <div className={styles.purchase_order_st}>2</div>
            <div className={styles.purchase_order_st}>3</div> */}
          </div>
          <div className={styles.purchase_buyer_details}>
            <div className={styles.purchase_account}>
              <h3>Account</h3>
              <small>
                To place your order, log in by entering your 10-digit mobile
                number
              </small>
              <div className={styles.purchase_buyer_input}>
                <label>Mobile Number</label>
                <div>
                  <input type="tel" placeholder="Enter mobile number" />
                  <button>Login</button>
                </div>
              </div>
            </div>
            <div className={styles.purchase_address}>
              <h3>Delivery Address</h3>
              <small>
                Select your delivery address from the existing one or add a new
                one
              </small>
            </div>
            <div className={styles.purchase_payment}>
              <h3>Payment</h3>
              <small>Select your payment method</small>
            </div>
          </div>
        </div>
        <div className={styles.purchase_items}>
          <div className={styles.purchase_items_content}>
            <div className={styles.purchase_item_name}>
              <h3> Bag </h3>
            </div>
            <div className={styles.purchase_item_qty}>
              <small>Clear Bag</small>
            </div>
          </div>
          <div className={styles.purchase_items_summary}>
            <div>
              <p>Subtotal</p>
              <p>Delivery</p>
            </div>
            <div>
              <p>UGX </p>
            </div>
          </div>
          <div className={styles.purchase_items_total}>
            <div>
              <h5>Total</h5>
              <h5>Amount</h5>
            </div>
            <small>inclusive of all taxes</small>
            <small>You're about to save UGX... on this order</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
