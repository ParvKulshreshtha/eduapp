import React from 'react'
import { CourseItem } from './CourseItem'

export const CourseList = (props) => {
  return (
        props.courseData.map((course,i)=>(
            <CourseItem key={i} course={course}/>)
        )
    
  )
}
