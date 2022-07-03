// import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import useFetch from './components/hooks/useFetch';
import { CourseList } from './components/Main/CourseList';

function App() {

  const{ data: courseData, error} = useFetch('http://localhost:8000/CourseData')
  console.log(courseData);
  
  return (
    <div className="App">
      { error && <div>{error}</div> }
      { courseData ? <CourseList courseData={courseData}/>:
      "Loading..."}
      <Outlet />
    </div>
  );
}

export default App;
