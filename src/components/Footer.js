import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer__container}>
        <p>STORE DETAILS</p>
        <div className={styles.footer__body}>
          <h3>Target</h3>
          <p>Cham Towers, Plot 12 Nkruma Road, Kampala, Ug</p>
        </div>
        <div className={styles.footer__btn}>
          <button>
            {" "}
            <img src="/images/whatsapp-48.png" alt="" />
            Chat with Us
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
