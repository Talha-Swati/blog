import React, { useState } from 'react';
import '../App.css'; // Ensure your component-specific CSS is imported

const BlogPost = ({ post }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="blog-post">
      <img src={post.image} alt={post.title} className="blog-image" />
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      {expanded && (
        <div>
          <p>{post.content}</p>
          {/* Add more detailed information here */}
        </div>
      )}
      <button onClick={toggleExpand} className="read-more">
        {expanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default BlogPost;
