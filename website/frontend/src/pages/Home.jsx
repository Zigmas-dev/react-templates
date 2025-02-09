import { useState } from "react";
import Links from "../components/Links";
import Hero from "../components/Hero";
import "./home.scss";

const Home = () => {
   const [isHeroVisible, setIsHeroVisible] = useState(true);

   return (
      <div className="home-container">
       {isHeroVisible && <Hero />}
      <Links setIsHeroVisible={setIsHeroVisible} />
      </div>
   );
};

export default Home;