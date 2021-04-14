import { useState, useContext } from "react";
import styles from "../styles/Account.module.css";
import { FiPlus } from "react-icons/fi";
import { ProductContext } from "../GlobalState";
import AddressInput from "../components/AddressInput";

const Account = () => {
  const { users } = useContext(ProductContext);

  const [myOrder, setMyOrder] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className={styles.account_container}>
      <div className={styles.account_content}>
        <div className={styles.account_nav_container}>
          <div className={styles.account_nav}>
            <div
              className={styles.account_nav_item}
              onClick={() => setMyOrder(true)}
            >
              My Order
            </div>
            <div
              className={styles.account_nav_item}
              onClick={() => setMyOrder(false)}
            >
              My Addresses
            </div>
          </div>
        </div>
        <div className={styles.account_dashboard}>
          <div className={styles.account_header}>
            {myOrder ? (
              <>
                <h3>Showing all Orders</h3>
                <div className={styles.account_dashboard_cards}>
                  <div className={styles.account_dashborad_card}>
                    <div className={styles.account_dashborad_card_header}>
                      <div>Logo</div>
                      <div>Name</div>
                    </div>
                  </div>
                </div>
              </>
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
                          <p>Edit</p>
                          <p>Delete</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.acount_new_address_card}>
                  <FiPlus /> Add New Address
                  <AddressInput
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
