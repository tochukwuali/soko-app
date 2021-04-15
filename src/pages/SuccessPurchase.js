import styles from "..styles/success.module.css";
import {
  YelloBgButton,
  WhiteBgButton,
  H4,
} from "../components/shared/StyledDiv";

const SuccessPurchase = () => {
  return (
    <div className={styles.success_container}>
      <div className={styles.success_content}>
        <div className={styles.success_header}>
          <H4>Thank you</H4>
        </div>
        <div className={styles.success_body}></div>
        <div className={styles.success_action_btn}></div>
      </div>
    </div>
  );
};

export default SuccessPurchase;
