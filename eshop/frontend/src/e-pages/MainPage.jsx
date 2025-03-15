import Navbar from "../e-components/NavBar";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles['main-page']}>
      <Navbar />
      <h1>E-parduotuvės Pagrindinis Puslapis</h1>
      {/* Čia galite pridėti kitą turinį */}
    </div>
  );
};

export default MainPage;