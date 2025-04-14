import { useState } from "react";
import BulletinForm from "./BulletinForm";
import "./bulletin.scss";

const BulletinBoard = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Vandens tiekimas", text: "Nuo balandžio 15d. vanduo vėl tiekiamas." },
    { id: 2, title: "Talkos diena", text: "Balandžio 20d. kviečiame visus į talką 10:00." }
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleAdd = ({ title, text }) => {
    setPosts(prev => [
      ...prev,
      { id: Date.now(), title, text }
    ]);
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div className="bulletin">
      <div className="bulletin-header">
        <h2>Skelbimų lenta</h2>
        <button className="open-form-btn" onClick={() => setShowForm(true)}>+ Naujas skelbimas</button>
      </div>
      <ul className="bulletin-list">
        {posts.map((post) => (
          <li key={post.id} className="bulletin-item">
            <h3>{post.title}</h3>
            <p>{post.text}</p>
            <button onClick={() => handleDelete(post.id)}>🗑️</button>
          </li>
        ))}
      </ul>
      
      <BulletinForm show={showForm} onClose={() => setShowForm(false)} onAdd={handleAdd} />
    </div>
  );
};

export default BulletinBoard;