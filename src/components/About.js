import React from "react";

export default function About(){
    return(
        <div className="container">
      <h1 className="mt-4 mb-3">About c9News</h1>
      <p>This is a simple news application built with React that fetches data from the <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">NewsAPI</a> to display top headlines from various categories.</p>
      <p>Features:</p>
      <ul>
        <li>Displays top headlines from different categories such as business, entertainment, health, science, sports, and technology.</li>
        <li>Allows users to navigate between different categories using the navigation bar.</li>
        <li>Responsive design with Bootstrap for better usability on different devices.</li>
      </ul>
      <h3 className="mt-4">Technologies Used</h3>
      <ul>
        <li>React.js</li>
        <li>Bootstrap</li>
        <li>NewsAPI</li>
      </ul>
      <h3 className="mt-4">Author and Repo</h3>
      <ul>
        <li>Author: Hariom Singh</li>
        <li>username: @c9hariom</li>
        <li>Git: <a href="https://github.com/c9hariom/react-news-app">react-news-app</a></li>
        
      </ul>
      <p>This project is for educational purposes only.</p>
    </div>
    )

}