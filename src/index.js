import React from 'react';  
import ReactDOM from 'react-dom/client';  
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'  
import './index.css';  
import App from './App';  
import { CourseContent } from './components/CourseDescription/CourseContent';
import { CoursePage } from './components/CourseItem/CoursePage';
import { Header } from './components/Header';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
  
root.render(  
  <>
  <Header />
  <Router> 
      <Routes>
        <Route path="/" element={<App />} />  
        <Route path="/:url" element={<CoursePage />} />
        <Route path="/:url/content" element={<CourseContent />} />  
      </Routes>
  </Router>  
  </>
)  