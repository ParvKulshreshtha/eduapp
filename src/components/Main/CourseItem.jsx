import React from 'react'
import { Link } from 'react-router-dom'

export const CourseItem = (props) => {
  return (
    <Link to={`/${props.course.url}`}>
        <div style={{
            margin:`10px`,
            display:'inline-block',
            padding:`5px`,
            width:`190px`,
            height:`200px`
        }}>
            <img 
            style={{
                height:`100px`,
                width:`190px`,
                "&:hover": {
                    border:`solid`
                  },
            }} 
            src={props.course.img_urls} alt={props.course.name} />
            <h2 style={{
                
            }}>{props.course.name}</h2>
            <h4>{props.course.instructors}</h4>
        </div>
    </Link>
        
  )
}
