import { useState } from "react";
import "./socialmedia.scss";

const SocialMedia = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Jonas",
      profilePic: "https://via.placeholder.com/50",
      content: "Sveiki, čia mano pirmasis įrašas!",
      comments: ["Puikus įrašas!", "Sveiki, Jonai!"],
      reactions: { like: 5, smile: 2 },
    },
  ]);
  const [newPostContent, setNewPostContent] = useState("");

  const handleCreatePost = () => {
    if (newPostContent.trim()) {
      const newPost = {
        id: Date.now(),
        user: "Jūs",
        profilePic: "https://via.placeholder.com/50",
        content: newPostContent,
        comments: [],
        reactions: { like: 0, smile: 0 },
      };
      setPosts([newPost, ...posts]);
      setNewPostContent("");
    }
  };

  const handleEditPost = (id, newContent) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, content: newContent } : post
      )
    );
  };

  const handleAddComment = (id, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  const handleReact = (id, reaction) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? {
              ...post,
              reactions: {
                ...post.reactions,
                [reaction]: post.reactions[reaction] + 1,
              },
            }
          : post
      )
    );
  };

  return (
    <div className="social-media">
      <div className="social-media__create-post">
        <textarea
          placeholder="Rašykite įrašą..."
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
        ></textarea>
        <button onClick={handleCreatePost}>Paskelbti</button>
      </div>
      <div className="social-media__posts">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            onEdit={handleEditPost}
            onComment={handleAddComment}
            onReact={handleReact}
          />
        ))}
      </div>
    </div>
  );
};

const Post = ({ post, onEdit, onComment, onReact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(post.content);
  const [newComment, setNewComment] = useState("");

  const handleSaveEdit = () => {
    onEdit(post.id, editContent);
    setIsEditing(false);
  };

  return (
    <div className="post">
      <div className="post__header">
        <img src={post.profilePic} alt={post.user} />
        <h4>{post.user}</h4>
      </div>
      <div className="post__content">
        {isEditing ? (
          <>
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            ></textarea>
            <button onClick={handleSaveEdit}>Išsaugoti</button>
          </>
        ) : (
          <p>{post.content}</p>
        )}
        {!isEditing && (
          <button onClick={() => setIsEditing(true)}>Redaguoti</button>
        )}
      </div>
      <div className="post__reactions">
        <button onClick={() => onReact(post.id, "like")}>
          ❤️ {post.reactions.like}
        </button>
        <button onClick={() => onReact(post.id, "smile")}>
          😊 {post.reactions.smile}
        </button>
      </div>
      <div className="post__comments">
        <h5>Komentarai:</h5>
        {post.comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
        <div className="post__add-comment">
          <input
            type="text"
            placeholder="Parašyti komentarą..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            onClick={() => {
              onComment(post.id, newComment);
              setNewComment("");
            }}
          >
            Komentuoti
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
