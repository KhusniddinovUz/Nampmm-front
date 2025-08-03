import React from 'react';
import {useNavigate} from 'react-router';
import "./404Page.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
      <div className="not-found-page">
        <h1>404</h1>
        <p>Bu sahifa vaqtinchalik mavjud emas</p>
        <div className="home-btn-wrapper" onClick={() => navigate('/')}>
          <a>Bosh sahifa</a>
        </div>
      </div>
  )
};

export default NotFoundPage;
