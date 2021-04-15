import { useState, useContext } from "react";
import styles from "../styles/Account.module.css";
import { FiPlus } from "react-icons/fi";
import { ProductContext } from "../GlobalState";
import AddressInput from "../components/AddressInput";
import EditInput from "../components/EditInput";
import {
  FileIcon,
  TargetIcon,
  FilterIcon,
  LocationIcon,
  CircleIconO,
  CircleIconB,
  StoreFrontIcon,
} from "../components/shared/Icons";

const Account = () => {
  const { users } = useContext(ProductContext);

  const [myOrder, setMyOrder] = useState(true);
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  return (
    <div className={styles.account_container}>
      <div className={styles.account_content}>
        <div className={styles.account_nav_container}>
          <div className={styles.account_nav}>
            <div
              className={styles.account_nav_item}
              onClick={() => setMyOrder(true)}
            >
              <FileIcon />
              My Order
            </div>
            <div
              className={styles.account_nav_item}
              onClick={() => setMyOrder(false)}
            >
              <LocationIcon />
              My Addresses
            </div>
          </div>
        </div>
        <div className={styles.account_dashboard}>
          {myOrder ? (
            <div className={styles.account_order}>
              <div className={styles.account_order_header}>
                <h4>Showing all Orders</h4>
                <div>
                  <FilterIcon /> <span>Filters</span>
                </div>
              </div>
              <div className={styles.account_order_cards}>
                <div className={styles.account_order_card}>
                  <div>
                    <div className={styles.account_order_card_header}>
                      <TargetIcon />
                    </div>

                    <div className={styles.account_order_card_body}>
                      <small>Order #1233341 </small>
                      <br></br>

                      <small>3 items </small>
                    </div>
                    <div style={{ marginTop: "1rem" }}>
                      <CircleIconO />
                    </div>
                  </div>
                  <div>
                    <small>UGX 12700</small>
                    <br></br>
                    <small>23/02/2021, 08:35pm</small>
                  </div>
                </div>
                <div className={styles.account_order_card}>
                  <div>
                    <div className={styles.account_order_card_header}>
                      <StoreFrontIcon />
                    </div>
                    <div className={styles.account_order_card_body}>
                      <small>Order #1213396 </small>
                      <br></br>
                      <small>1 items</small>
                    </div>
                    <div style={{ marginTop: "1rem" }}>
                      <CircleIconB />
                    </div>
                  </div>
                  <div>
                    <small>UGX 5400</small>
                    <br></br>
                    <small>26/02/2021, 01:55pm</small>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.account_address_cards}>
              <div className={styles.account_address_card}>
                <div className={styles.account_address_card_content}>
                  {users.map((user, i) => (
                    <div key={i}>
                      <h4>{user.name} </h4>
                      <p>
                        {user.street}, {user.city}, {user.country}
                      </p>
                      <div className={styles.account_address_card_action}>
                        <p onClick={handleEditShow}>Edit</p>
                        <p>Delete</p>
                      </div>
                      <EditInput
                        handleEditClose={handleEditClose}
                        editShow={editShow}
                        user={user}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={styles.acount_new_address_card}
                onClick={handleShow}
              >
                <FiPlus /> Add New Address
                <AddressInput handleClose={handleClose} show={show} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
