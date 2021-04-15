import { Modal } from "react-bootstrap";
import RICIBs from "react-individual-character-input-boxes";
import styles from "../styles/purchase.module.css";

const EnterPhoneNumber = ({ show, handleClose, phone, handleOutputString }) => {
  return (
    <div className={styles.enter_phone}>
      <Modal show={show} onHide={handleClose} style={{ marginTop: "10rem" }}>
        <Modal.Header closeButton style={{ padding: "8px 10px" }}>
          <h4>Verify your number</h4>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
          }}
        >
          <p>Please enter verification code sent via sms to {phone}</p>
          <RICIBs
            amount={4}
            autoFocus={true}
            className={styles.input_box_div}
            handleOutputString={handleOutputString}
          />
        </Modal.Body>
        <Modal.Footer
          style={{
            display: "flex",

            justifyContent: "center",
          }}
        >
          <small>Resend code</small>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EnterPhoneNumber;
