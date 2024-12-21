import { useState, useEffect, useCallback } from "react";
import { FaCog } from "react-icons/fa";
import "./maintenancepage.scss";

const MaintenancePage = () => {
  // Numatytas tikslinis laikas (pvz., 2024-12-31 23:59:59)
  const targetDate = "2024-12-31T23:59:59";

  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  // Laiko atvaizdavimo komponentai
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="timer-block">
        <span>{timeLeft[interval]}</span>
        <small>{interval}</small>
      </div>
    );
  });

  return (
    <div className="maintenance-page">
      <div className="content">
        <h1 className="title">Svetainė atnaujinama!</h1>
        <p className="subtitle">
          Mūsų svetainė šiuo metu atnaujinama. Grįžkite už:
        </p>
        <div className="timer">
          {timerComponents.length ? timerComponents : <span>Laikas baigėsi!</span>}
        </div>
        <p className="description">Dėkojame už Jūsų kantrybę! 🌟</p>
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
