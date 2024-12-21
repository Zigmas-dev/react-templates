import { useState, useEffect } from "react";
import { FaCog } from "react-icons/fa";
import "./maintenancepage.scss";

const MaintenancePage = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 12); // Pridėti 12 dienų
    const difference = targetDate - new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  return (
    <div className="maintenance-page">
      <div className="content">
        <h1 className="title">Svetainė atnaujinama!</h1>
        <p className="subtitle">
          Mūsų svetainė šiuo metu atnaujinama. Grįžkite už:
        </p>
        <div className="timer">
          <div className="timer-block">
            <span>{timeLeft.days || "0"}</span>
            <small>Dienos</small>
          </div>
          <div className="timer-block">
            <span>{timeLeft.hours || "0"}</span>
            <small>Valandos</small>
          </div>
          <div className="timer-block">
            <span>{timeLeft.minutes || "0"}</span>
            <small>Minutės</small>
          </div>
          <div className="timer-block">
            <span>{timeLeft.seconds || "0"}</span>
            <small>Sekundės</small>
          </div>
        </div>
        <p className="description">
          Dėkojame už Jūsų kantrybę! 🌟
        </p>
      </div>

      <div className="gears">
        <FaCog className="gear gear--small" />
        <FaCog className="gear gear--medium" />
        <FaCog className="gear gear--large" />
      </div>
    </div>
  );
};

export default MaintenancePage;
