import styles from "../styles/Features.module.css";

const Features = () => {
  return (
    <div className={styles.ft__container}>
      <div className={styles.ft__content}>
        <div className={styles.ft__icons}>
          <div className={styles.ft__svg}>
            <img src="/images/truck-50.png" alt="" />
            <p>Fast Delivery</p>
          </div>
          <div className={styles.ft__svg}>
            <img src="/images/guarantee-50.png" alt="" />
            <p>Customer Support</p>
          </div>
          <div className={styles.ft__svg}>
            <img src="/images/last-24-48.png" alt="" />
            <p>Buyer Protection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
