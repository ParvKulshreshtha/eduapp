import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export const CourseContent = () => {
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
    <>
      <div style={{
        padding:`20px`,
        fontSize:`28px`,
        fontWeight: `bold`,
        paddingLeft:`100px`,
        marginBottom:`60px`
      }}>
        {course.name} :
      </div>
      <ul style={{
      padding:`20px`,
      fontSize:`18px`,
      paddingLeft:`100px`,
      listStyle:`none`,
      float:`left`
  }}>
      {
          course.curriculum?.map((topic,i) => (
              <li style={{
                  border:`solid 0.2px`,
                  width:`20vw`,
                  padding:`10px`,
                  backgroundColor:`#f7f9fa`,
              }} key={i}>{topic}</li>
          ))
      }
  </ul>
  <iframe style={{
    padding:`10px`,
  }} width="560" height="315" src="https://www.youtube.com/embed/BsDoLVMnmZs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </>
    
  )
}
