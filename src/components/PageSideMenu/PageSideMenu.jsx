import React from 'react';
import "./PageSideMenu.css";
import {NavLink} from "react-router";


const PageSideMenu = (props) => {
  return (
      <div className="page-side-menu">
        <h3>{props.title}</h3>
        <ul>
          <li>
            <NavLink to={"/"}>
              <i className="fa-solid fa-play"></i>
              Institut haqida
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"} className="active">
              <i className="fa-solid fa-play"></i>
              Rahbariyat
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <i className="fa-solid fa-play"></i>
              Institut Tuzilmasi
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <i className="fa-solid fa-play"></i>
              Xalqaro Hamkorlik
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <i className="fa-solid fa-play"></i>
              Bo'sh ish o'rinlari
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <i className="fa-solid fa-play"></i>
              Tarkibiy Bo'limlar
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <i className="fa-solid fa-play"></i>
              Kafedralar
            </NavLink>
          </li>
        </ul>
      </div>
  )
};

export default PageSideMenu;
