import React from 'react';
import Navbar from '../navbar/Navbar';
import PostsPage from '../PostsPage';
import './Main.css';

export default function Main() {
  return (
    <div>
        <Navbar />
        <main className="main">
            <PostsPage />
        </main>
    </div>
  )
}
