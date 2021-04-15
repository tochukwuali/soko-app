import { useState } from "react";
import styles from "./Qtytoggle.module.css";

const QtyToggle = () => {
  const [qty, setQty] = useState(1);
  return (
    <div className={styles.toggle_container}>
      <div className={styles.toggle_minus} onClick={() => setQty(qty - 1)}>
        -
      </div>
      <div className={styles.toggle_qty}>
        <p>{qty}</p>
      </div>
      <div className={styles.toggle_plus} onClick={() => setQty(qty + 1)}>
        +
      </div>
    </div>
  );
};

export default QtyToggle;
