import { useState, useContext } from "react";
import EnterPhoneNumber from "../components/EnterPhoneNumber";
import { CheckIcon, PlusIcon } from "../components/shared/Icons";
import { Link } from "react-router-dom";
import styles from "../styles/purchase.module.css";
import {
  UnstyledLine,
  UnstyledCircle,
  StyledCircle,
  UnstyledLine2,
  PurchaseAddress,
  OldAddress,
  NewAddress,
  InputButton,
  UserName,
  UserAddress,
  UserNumber,
  IconBg,
  WhiteBgButton,
  YellowBgButton,
} from "../components/shared/StyledDiv";

import { ProductContext } from "../GlobalState";

const Purchase = () => {
  const [pin, setPin] = useState("");
  const [edit, setEdit] = useState(false);

  const [phone, setPhone] = useState("");
  const [show, setShow] = useState(false);
  const [complete1, setComplete1] = useState(false);
  const [start2, setStart2] = useState(false);
  const [start3, setStart3] = useState(false);
  const [complete2, setComplete2] = useState(false);
  const [complete3, setComplete3] = useState(false);
  const [changeA, setChangeA] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOutputString = (string) => {
    setPin(string);
    if (string.length === 4) {
      setShow(false);
      setComplete1(true);
      setStart2(true);
    }
  };

  const handleAddressDisappear = () => {
    setTimeout(() => {
      setStart2(false);
      setChangeA(true);
    }, 5000);
  };

  const handleAddressClick = () => {
    setEdit(true);
    handleAddressDisappear();
    setComplete2(true);

    setStart3(true);
  };

  const { users } = useContext(ProductContext);
  return (
    <div className={styles.purchase_container}>
      <div className={styles.purchase_content}>
        <div className={styles.purchase_order_details}>
          <div className={styles.purchase_buyer_details}>
            <div className={styles.purchase_account}>
              <div className={styles.purchase_account_order}>
                <StyledCircle>
                  {complete1 ? <CheckIcon size={"1.3em"} /> : "1"}
                </StyledCircle>
                <UnstyledLine complete1={complete1}></UnstyledLine>
              </div>

              <div>
                <h4>Account</h4>
                {complete1 ? (
                  <small>You are securely logged in</small>
                ) : (
                  <div>
                    <small>
                      To place your order, log in by entering your 10-digit
                      mobile number
                    </small>
                    <div className={styles.purchase_buyer_input}>
                      <label>Mobile Number</label>
                      <div>
                        <input
                          type="tel"
                          placeholder="Enter mobile number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                        <InputButton
                          onClick={handleShow}
                          disabled={phone.length < 9}
                          phone={phone}
                        >
                          Login
                        </InputButton>
                        <EnterPhoneNumber
                          handleClose={handleClose}
                          show={show}
                          phone={phone}
                          pin={pin}
                          setPin={setPin}
                          handleOutputString={handleOutputString}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <PurchaseAddress>
              <div className={styles.purchase_address_order}>
                {complete2 ? (
                  <StyledCircle>
                    {complete2 ? <CheckIcon size={"1.3em"} /> : "2"}
                  </StyledCircle>
                ) : (
                  <UnstyledCircle>2</UnstyledCircle>
                )}
                <UnstyledLine2
                  complete2={complete2}
                  start2={start2}
                ></UnstyledLine2>
              </div>

              <div>
                <div>
                  <h4>Delivery Address</h4>
                  <div style={{ display: "flex" }}>
                    <small>
                      Select your delivery address from the existing one or add
                      a new one
                    </small>
                    {changeA ? (
                      <WhiteBgButton onClick={() => setStart2(true)}>
                        Change Address
                      </WhiteBgButton>
                    ) : null}
                  </div>
                </div>

                {start2 ? (
                  <div className={styles.purchase_address_flex}>
                    {users.map((user, i) => (
                      <div key={i}>
                        <OldAddress
                          onClick={handleAddressClick}
                          complete2={complete2}
                        >
                          {edit ? (
                            <IconBg>
                              <CheckIcon size={"0.9em"} />
                            </IconBg>
                          ) : null}
                          <UserName edit={edit}>{user.name} </UserName>
                          <UserAddress>
                            {user.street}, {user.city}, {user.country}
                          </UserAddress>
                          <UserNumber>{user.telephone}</UserNumber>
                        </OldAddress>
                      </div>
                    ))}

                    <NewAddress>
                      <PlusIcon /> Add New Address
                    </NewAddress>
                  </div>
                ) : null}
              </div>
            </PurchaseAddress>
            <div className={styles.purchase_payment}>
              {start3 ? (
                <StyledCircle>
                  {complete3 ? <CheckIcon size={"1.3em"} /> : "3"}
                </StyledCircle>
              ) : (
                <UnstyledCircle>2</UnstyledCircle>
              )}

              <div>
                <div style={{ position: "relative" }}>
                  <h4>Payment</h4>
                  <small>Select your payment method</small>
                </div>
                <div style={{ marginTop: "1.2rem" }}>
                  {start3 ? (
                    <div>
                      <div>
                        <input type="radio" checked />
                        <span style={{ padding: "0 1rem" }}>
                          Cash on delivery
                        </span>
                      </div>
                      <Link to="/purchase/success">
                        <YellowBgButton style={{ marginBottom: "0.8rem" }}>
                          Place order
                        </YellowBgButton>
                      </Link>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.purchase_items}>
          <div className={styles.purchase_items_content}>
            <div className={styles.purchase_item_name}>
              <h4> Bag </h4>
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
            <br></br>
            <small>You're about to save UGX... on this order</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
