// import React, { useEffect, useState } from 'react'
import { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Curriculum } from './Curriculum'
import { SideDetail } from './SideDetail'


export const CoursePage = () => {
  const [course, setCourse] = useState({})
  const { url } = useParams()
  const {data} = useFetch('http://localhost:8000/CourseData/')
  useEffect(()=>{
    if(data){
      setCourse(data.filter(course => course.url===url)[0])
      console.log(course);}
    },[course, data, url]
  )

  return (
    <div>
        <div style={{
          backgroundColor:`#16191b`,
          padding:`20px`,
          color:`white`,
          fontSize:`30px`,
          fontWeight: `bold`,
          paddingLeft:`100px`
        }}>
          <p style={{
          }}>{course.name} :</p>
          <p style={{
            width:`50vw`,
            fontWeight:`bold`,
            fontSize:`20px`,
            paddingTop:`0`,
          }}>By {course.instructors}</p>
          <p style={{
            width:`50vw`,
            fontWeight:`normal`,
            fontSize:`18px`,
            paddingTop:`0`
          }}>{course.description}</p>
       </div>
        <SideDetail img={course.img_urls}
                    name={course.name}
                    rating={course.rating}
                    hours={course.hours}
                    views={course.views}
                    url={course.url}/>

        <Curriculum course={course}/>
        <Outlet />
    </div>
  )
}
