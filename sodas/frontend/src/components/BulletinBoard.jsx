import { useState } from "react";
import "./bulletinBoard.scss";

const BulletinBoard = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Vandens tiekimas", text: "Nuo balandžio 15d. vanduo vėl tiekiamas." },
    { id: 2, title: "Talkos diena", text: "Balandžio 20d. kviečiame visus į talką 10:00." }
  ]);

  return (
    <div className="bulletin">
      <h2>Skelbimų lenta</h2>
      <ul className="bulletin-list">
        {posts.map((post) => (
          <li key={post.id} className="bulletin-item">
            <h3>{post.title}</h3>
            <p>{post.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletinBoard;