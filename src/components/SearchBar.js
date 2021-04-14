import styles from "../HomeScreen.module.css";

const SearchBar = () => {
  return (
    <div>
      <div className={styles.search__bar}>
        <input type="text" placeholder="Search For Products" />
      </div>
    </div>
  );
};

export default SearchBar;
