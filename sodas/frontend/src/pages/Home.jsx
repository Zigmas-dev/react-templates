import LoginForm from "../components/LoginForm";
import Calendar from "../components/Calendar";
import BulletinBoard from "../components/BulletinBoard";
import "./home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <LoginForm />
      <BulletinBoard />
      <Calendar />
    </div>
  )
};

export default Home;