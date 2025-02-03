import AboutMe from "../components/AboutMe";
import Values from "../components/Values";
import "./home.scss";

const Home = () => {
   return (
      <div className="home-container">
        <AboutMe />
        <Values />
      </div>
   );
};

export default Home;