import styles from "../styles/SuccessPurchase.module.css";
import { YellowBtn, WhiteBtn, H4 } from "../components/shared/StyledDiv";

const SuccessPurchase = ({ history }) => {
  const handleBackToHome = () => {
    history.push("/");
  };
  return (
    <div className={styles.success_container}>
      <div className={styles.success_content}>
        <div className={styles.success_content_img}>
          <img src="/images/confetti-64.png" alt="" />
        </div>
        <div className={styles.success_header}>
          <H4>Thank you</H4>
          <H4>Your order has bee successfully placed</H4>
        </div>
        <div className={styles.success_body}>
          <p>
            You'll receive a confirmation message as soon as the order is
            accepted
          </p>
          <p>Order Number: John - 271e</p>
        </div>
        <div className={styles.success_action_btn}>
          <WhiteBtn>Track order</WhiteBtn>
          <YellowBtn onClick={handleBackToHome}> Continue shopping</YellowBtn>
        </div>
      </div>
    </div>
  );
};

export default SuccessPurchase;
