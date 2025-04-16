import { useState, useContext } from "react";
import { FaPlusCircle } from "react-icons/fa";
import BulletinForm from "./BulletinForm";
import { BulletinContext } from "./BulletinContext";
import "./adminDashboard.scss";

const AdminDashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const { addPost } = useContext(BulletinContext);

  const handleOpen = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  return (
    <div className="admin-dashboard">
      <button className="add-button" onClick={handleOpen}>
        <FaPlusCircle /> Pridėti skelbimą
      </button>

      <BulletinForm show={showForm} onClose={handleClose} onAdd={addPost} />
    </div>
  );
};

export default AdminDashboard;
