import Dashboard from "./components/Dashboard";
import ContentEditor from "./components/ContentEditor";
import UserManagement from "./components/UserManagement";
import "./index.scss";

const App = () => {
  
  return (
    <div>
      <Dashboard />
      <ContentEditor />
      <UserManagement />
    </div>
  );
};

export default App;
