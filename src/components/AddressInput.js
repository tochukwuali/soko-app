import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import styles from "../styles/Account.module.css";

const AddressInput = (props) => {
  const [name, setName] = useState("");
  const [mnumber, setMNumber] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div className={styles.address_input_container}>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        style={{ marginTop: "5rem" }}
      >
        <Modal.Header closeButton style={{ padding: "6px 8px" }}>
          <h4>Enter Address</h4>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className={styles.form_item}>
              <label htmlFor="name" className={styles.input_label}>
                Name
              </label>
              <input
                type="text"
                value={name}
                id="name"
                className={styles.form_input}
                placeholder="e.g John Doe"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className={styles.form_item}>
              <label htmlFor="mobile number" className={styles.input_label}>
                Mobile Number
              </label>
              <input
                type="tel"
                value={mnumber}
                id="mobile-number"
                className={styles.form_input}
                placeholder="Enter mobile number"
                onChange={(e) => setMNumber(e.target.value)}
                required
              />
            </div>
            <div className={styles.form_item}>
              <label htmlFor="city" className={styles.input_label}>
                City
              </label>
              <input
                type="text"
                value={city}
                id="city"
                className={styles.form_input}
                placeholder="e.g Kampala"
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className={styles.form_item}>
              <label htmlFor="address" className={styles.input_label}>
                Address
              </label>
              <textarea
                name="address"
                id="address"
                cols="30"
                rows="4"
                className={styles.formInput_textArea}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="E.g Kalema Apartments, Plot 00 Johnson Road, Room 24B"
              />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer
          style={{
            padding: "6px 8px",
            display: "flex",
            justifyContent: "center",
            border: "none",
            marginTop: "1rem",
          }}
        >
          <Button
            style={{
              background: "#cac9c9",
              border: "1px solid #cac9c9",
            }}
          >
            Add Address
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddressInput;
