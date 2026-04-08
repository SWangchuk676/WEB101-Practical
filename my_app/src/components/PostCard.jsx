import { useState } from "react";

function PostCard({ username, image, caption }) {
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div
      style={{
        border: "1px solid #333",
        margin: "20px auto",
        maxWidth: "400px",
        backgroundColor: "#111",
        color: "#fff",
        borderRadius: "5px",
        fontFamily: "Arial",
      }}
    >
      {/* Username */}
      <div style={{ padding: "10px", fontWeight: "bold" }}>
        {username}
      </div>

      {/* Image */}
      <img
        src={image}
        alt="post"
        style={{ width: "100%", height: "auto" }}
      />

      {/* Content */}
      <div style={{ padding: "10px" }}>
        
        {/* Like Button */}
        <button
          onClick={() => setLikes(likes + 1)}
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
            color: "white",
            fontSize: "16px",
          }}
        >
          ❤️ {likes} likes
        </button>

        {/* Caption */}
        <p>
          <strong>{username}</strong> {caption}
        </p>

        {/* Comment Input */}
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{
            width: "100%",
            padding: "6px",
            marginTop: "5px",
            backgroundColor: "#222",
            color: "white",
            border: "1px solid #444",
          }}
        />

        {/* Display Comment */}
        {comment && (
          <p>
            <strong>{username}</strong> {comment}
          </p>
        )}

      </div>
    </div>
  );
}

export default PostCard;