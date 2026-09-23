import { memo } from "react";
import type { PostType } from "../types/post";
import { isNew } from "../utils/dateUtils";
import "./Post.css";

interface PostProps {
  post: PostType;
  highlightAuthor?: string;
}

const Post = ({ post, highlightAuthor }: PostProps) => {
  const isHighlighted = highlightAuthor === post.author;
  const showNewBadge = isNew(post.datePosted);

  // Inline style example (method #2)
  const inlineStyle = {
    borderLeft: isHighlighted ? "5px solid #ff6b6b" : "5px solid transparent",
  };

  return (
    <article
      className={`post-card ${isHighlighted ? "highlighted" : ""}`}
      style={inlineStyle}
    >
      <div className="post-header">
        <h3>{post.title}</h3>
        {showNewBadge && <span className="new-badge">New!</span>}
      </div>
      <p className="post-meta">
        By <strong>{post.author}</strong> · {post.datePosted}
      </p>
      <p className="post-preview">{post.content.slice(0, 80)}...</p>
    </article>
  );
};

// OPTIMIZATION: prevents re-render if post & highlightAuthor haven't changed
export default memo(Post);