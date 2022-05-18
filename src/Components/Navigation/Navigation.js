import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navigation = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">LOGO</div>
          <div className="nav-container">
            <ul>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/segements" className="link">
                  Segments
                </Link>
              </li>
              <li>
                <a href="" className="link">
                  CA Registration
                </a>
              </li>
              <li>
                <Link to="/magazine" className="link">
                  Our Magazine
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
