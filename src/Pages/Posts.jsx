import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]); // Store posts
  const [page, setPage] = useState(1); // Page number
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [hasMore, setHasMore] = useState(true); // More data available

  const observer = useRef();

  // Fetch data from the API
  const fetchPosts = async () => {
    try {
      setLoading(true);
  
      // Simulating API delay for testing loader
      await new Promise((resolve) => setTimeout(resolve, 500));
  
      // Fetch posts from API
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
  
      // Handle non-200 responses
      if (!response.ok) throw new Error(`Failed to fetch posts. Status: ${response.status}`);
  
      const data = await response.json();
  
      // Simulate an edge case: API returns fewer than 10 posts
      if (data.length < 10) {
        setHasMore(false); // No more data available
      }
  
      // Append new posts to existing ones
      setPosts((prev) => [...prev, ...data]);
    } catch (err) {
      setError(err.message || "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };
  

  // Fetch posts when the page changes
  useEffect(() => {
    if (hasMore) fetchPosts();
  }, [page]);

  // Infinite scrolling logic
  const lastPostRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="posts-container">
  <h1>Posts</h1>
  {error && <p className="error">{error}</p>}
  <div className="posts-list">
    {posts.map((post, index) => (
      <div
        key={post.id}
        className="post-card"
        ref={index === posts.length - 1 ? lastPostRef : null}
      >
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ))}
  </div>
  {loading && <p className="loader">Loading...</p>}
  {!hasMore && <p className="end-message">No more posts to load</p>}
</div>
  );
};

export default Posts;
