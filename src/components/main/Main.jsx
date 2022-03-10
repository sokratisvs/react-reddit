import React from 'react';
import Navbar from '../navbar/Navbar';
import SubredditPage from '../SubredditsPage';
import './Main.css';

export default function Main() {
  return (
    <div>
        <Navbar />
        <div className="main">
            <SubredditPage />
        </div>
    </div>
  )
}
