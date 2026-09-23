import Post from "./Post";
import type { PostType } from "../types/post";
import "./PostList.css";

const samplePosts: PostType[] = [
  {
    id: 1,
    title: "Mastering React.memo",
    author: "Alice",
    content: "React.memo is a higher-order component that prevents unnecessary re-renders when props haven't changed...",
    datePosted: new Date().toISOString(), // today → gets "New!" badge
  },
  {
    id: 2,
    title: "Why Vite Beats CRA",
    author: "Bob",
    content: "Vite uses native ES modules for lightning-fast dev server startup compared to Webpack...",
    datePosted: "2025-09-10",
  },
  {
    id: 3,
    title: "TypeScript Utility Types",
    author: "Alice",
    content: "Partial, Pick, Omit, and Record are essential for writing reusable typed components...",
    datePosted: "2025-08-01",
  },
];

const PostList = () => {
  return (
    <section className="post-list">
      <h2>Latest Insights</h2>
      {samplePosts.map((post) => (
        <Post key={post.id} post={post} highlightAuthor="Alice" />
      ))}
    </section>
  );
};

export default PostList;