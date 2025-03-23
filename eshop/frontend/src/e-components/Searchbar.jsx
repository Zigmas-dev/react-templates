import { FaSearch } from "react-icons/fa";
import styles from "./Searchbar.module.scss";

const Searchbar = () => {
  return (
    <div className={styles.searchbarContainer}>
      <div className={styles.searchbar}>
        <input type="text" placeholder="Ieškoti..." className={styles.input} />
        <button className={styles.button}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
