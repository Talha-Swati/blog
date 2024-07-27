import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MyNavbar from './components/MyNavbar';
import BlogList from './components/BlogList';

const Home = () => (
  <div className="home-page">
    <div className="home-content">
      <h1>Welcome to Our Website</h1>
      <p>Our website is all about blogs on natural beauty info,and different tourism gudance and interseting stories.</p>
    </div>
  </div>
);
const Blogs = ({ posts }) => (
  <div>
    <h1>Blogs Page</h1>
    <BlogList posts={posts} />
  </div>
);

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/blogPosts.json'); 
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
