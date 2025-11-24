import React from 'react';
import "./PageSideMenu.css";
import {NavLink} from "react-router";


const PageSideMenu = (props) => {
  return (
      <div className="page-side-menu">
        <h3>{props.title}</h3>
        <ul>
          {props.links && props.links.map((link, index) => {
            if (link.name === props.active) {
              return (
                  <li key={index}>
                    <NavLink to={`/institut${link.link}`} className="active">
                      <i className="fa-solid fa-play"></i>
                      {link.name}
                    </NavLink>
                  </li>
              )
            } else {
              return (
                  <li key={index}>
                    <NavLink to={`/institut${link.link}`}>
                      <i className="fa-solid fa-play"></i>
                      {link.name}
                    </NavLink>
                  </li>
              )
            }
          })}
        </ul>
      </div>
  )
};

export default PageSideMenu;
