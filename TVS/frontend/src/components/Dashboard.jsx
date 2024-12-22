import { FaChartLine, FaUsers, FaClipboardCheck } from "react-icons/fa";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Administratoriaus Skydelis</h1>
      <div className="dashboard-stats">
        <div className="stat-card">
          <FaChartLine size={30} />
          <h2>Visas turinys</h2>
          <p>1000 įrašų</p>
        </div>
        <div className="stat-card">
          <FaUsers size={30} />
          <h2>Visi vartotojai</h2>
          <p>150 vartotojų</p>
        </div>
        <div className="stat-card">
          <FaClipboardCheck size={30} />
          <h2>Skelbimai laukia peržiūros</h2>
          <p>5 įrašai</p>
        </div>
      </div>
      <div className="management-links">
        <button>Redaguoti turinį</button>
        <button>Valdyti vartotojus</button>
        <button>Redaguoti šablonus</button>
      </div>
    </div>
  );
};

export default Dashboard;