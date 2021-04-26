import { useContext } from "react";
import { ProductContext } from "../../GlobalState";
import SearchBar from "../../components/SearchBar";
import styles from "./mobilecategories.module.css";
import { Link } from "react-router-dom";

const MobileCategories = ({ history }) => {
  const { products } = useContext(ProductContext);

  return (
    <div className={styles.mcategories_container}>
      <SearchBar />
      <div className={styles.mcategories_header}>
        <p>ALL CATEGORIES</p>
      </div>
      <div className={styles.mcategories_content}>
        {products.map((product, i) => (
          <div key={i} className={styles.category_container}>
            <div className={styles.category_content}>
              <Link to={`/categories/${product.category}`}>
                <img src={product.pic} alt={product.category} />
                <div className={styles.category_name}>
                  <p>{product.category}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileCategories;
