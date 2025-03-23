import Navbar from "../e-components/NavBar";
import Searchbar from "../e-components/Searchbar";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles['main-page']}>
      <Navbar />
      <Searchbar />
      <h1>E-parduotuvės Pagrindinis Puslapis</h1>
      {/* Čia galite pridėti kitą turinį */}
    </div>
  );
};

export default MainPage;