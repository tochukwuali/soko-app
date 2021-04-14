import styles from "./Qtytoggle.module.css";

const QtyToggle = () => {
  return (
    <div className={styles.toggle_container}>
      <div className={styles.toggle_minus}>-</div>
      <div className={styles.toggle_qty}>
        <p>1</p>
      </div>
      <div className={styles.toggle_plus}>+</div>
    </div>
  );
};

export default QtyToggle;
