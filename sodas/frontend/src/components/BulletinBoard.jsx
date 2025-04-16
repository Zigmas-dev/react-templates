import { useContext } from "react";
import { BulletinContext } from "./BulletinContext"; // Įsitikink, kad kelias teisingas
import "./bulletinBoard.scss";

const BulletinBoard = () => {
  const { posts } = useContext(BulletinContext); // Naudojame bendrus skelbimus

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
