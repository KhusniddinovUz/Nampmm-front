import React from 'react';
import "./PageSideMenu.css";
import {NavLink} from "react-router";


const PageSideMenu = (props) => {
  const links = [
    {link: "/haqida", name: "Institut haqida"},
    {link: "/rahbariyat", name: "Rahbariyat"},
    {link: "/tuzilma", name: "Institut Tuzilmasi"},
    {link: "/hamkorlik", name: "Xalqaro Hamkorlik"},
    {link: "/ish-orinlari", name: "Bo'sh ish o'rinlari"},
    {link: "/bolimlar", name: "Tarkibiy bo'limlar"},
    {link: "/kafedralar", name: "Kafedralar"}
  ];
  return (
      <div className="page-side-menu">
        <h3>{props.title}</h3>
        <ul>
          {links && links.map((link, index) => {
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
