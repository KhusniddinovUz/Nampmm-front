import React from 'react'
import "./TeacherComponent.css";

const TeacherComponent = ({name, image, title}) => {
  return (
      <div className="col-12">
        <div className="leader-banner-wrapper">
          <div className="leader-banner">
            <div className="photo">
              <img src={image} alt="Prorector"/>
            </div>
            <div className="details">
              <h3 className="name">{name}</h3>
              <p className="role">
                {title}
              </p>

              <div className="divider"></div>

              <div className="contact-row">
                <a href="tel:+998555080667" className="pill">
                  <i
                      style={{color: "rgba(20, 95, 203, 1)"}}
                      className="fa-solid fa-phone"
                  ></i>
                  +998 69 234 37 11
                </a>
                <a href="mailto:murodkhujaevs@gmail.com" className="pill">
                  <i
                      style={{color: "rgba(15, 190, 85, 1)"}}
                      className="fa-solid fa-envelope"
                  ></i>
                  murodkhujaevs@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
};

export default TeacherComponent
