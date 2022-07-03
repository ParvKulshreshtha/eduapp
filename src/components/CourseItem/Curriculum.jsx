import React from 'react'
import bullet from '../Icons/edit.png'

export const Curriculum = (props) => {
  return (
      <>
        <div style={{
            padding:`20px`,
            fontSize:`28px`,
            fontWeight: `bold`,
            paddingLeft:`100px`
        }}>
          Curriculum :
        </div>
        <ul style={{
            padding:`20px`,
            fontSize:`18px`,
            paddingLeft:`100px`,
            listStyle:`none`
        }}>
            {
                props.course.curriculum?.map((topic,i) => (
                    <li style={{
                        border:`solid 0.2px`,
                        width:`50vw`,
                        padding:`10px`,
                        backgroundColor:`#f7f9fa`,
                    }} key={i}>  <img src={bullet} alt="" style={{
                        width:`20px`,
                        marginRight:`20px`
                    }}/> {topic}</li>
                ))
            }
        </ul>
      </>
    
      
  )
}
