import React from 'react'
import { Link } from 'react-router-dom'

export const SideDetail = (props) => {
  return (
    <div style={{
        border:`solid 0.5px`,
        backgroundColor:`white`,
        width:'20vw',
        float:`right`,
        position:`fixed`,
        right:`90px`,
        bottom:`150px`,
      }}>
          <img src={props.img} alt="" style={{
              width:`98%`,
              margin:`1%`
          }} />
          <h2 style={{
              margin:`10px`,
              wordWrap:`break-word`
          }}>{props.name}:</h2>
          <div style={{
              padding:`20px`
          }}>
            <p>{props.rating}/5 rating</p>
            <p>{props.hours} hours of content</p>
            <p>{props.views} views</p>
          </div>
            <Link to={`/${props.url}/content`}>
              <button style={{
              margin:`5%`,
              backgroundColor:`purple`,
              color:`white`,
              width:`90%`,
              height:`35px`,
              border:`none`,
          }}>View This Course</button>
            </Link>
          

          
      </div>
  )
}
