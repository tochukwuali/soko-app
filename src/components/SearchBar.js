import styles from "../styles/HomeScreen.module.css";
import { SearchIcon } from "../components/shared/Icons";

const SearchBar = () => {
  return (
    <div className={styles.hm__search_flex}>
      <div className={styles.hm__search_bar}>
        <input
          type="text"
          placeholder="Search For Products..."
          className={styles.search__input}
        />
        <button className={styles.search__btn}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
