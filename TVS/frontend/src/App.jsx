import Dashboard from "./components/Dashboard";
import ContentEditor from "./components/ContentEditor";
import UserManagement from "./components/UserManagement";
import CategoriesTags from "./components/CategoriesTags";
import "./index.scss";

const App = () => {
  
  return (
    <div>
      <Dashboard />
      <ContentEditor />
      <UserManagement />
      <CategoriesTags />
    </div>
  );
};

export default App;
