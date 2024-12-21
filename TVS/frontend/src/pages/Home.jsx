import { useEffect, useState } from "react";
import axios from "axios";
import "./home.scss";

const Home = () => {
  const [posts, setPosts] = useState([]); // Pradinė reikšmė - tuščias masyvas

  useEffect(() => {
    axios
      .get('/api/posts')
      .then(response => {
        // Užtikriname, kad response.data yra masyvas
        setPosts(Array.isArray(response.data) ? response.data : []);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h1>Visi straipsniai</h1>
      <ul>
        {posts.length > 0 ? (
          posts.map(post => (
            <li key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ))
        ) : (
          <p>Šiuo metu nėra straipsnių.</p>
        )}
      </ul>
    </div>
  );
};

export default Home;
