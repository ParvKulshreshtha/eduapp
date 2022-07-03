import React from 'react'

export const Header = () => {
  return (
    <div id="navlist">     
        <div style={{
            height:`50px`,
            borderBottom:`solid`
        }}>
                <span style={{
                    marginLeft:`20px`,
                    fontSize:`30px`,
                    marginTop:`20px`,
                    color:`purple`
                }}>
                    EduApp
                </span>
                <input style={{
                    borderRadius:`30px`,
                    height:`30px`,
                    width:`275px`,
                    float:`right`,
                    marginRight:`30px`,
                    marginTop:`10px`,
                    color:`purple`
                }} type="text"
                    placeholder=" Search Courses"
                    name="search" />
        </div>
</div>
  )
}
