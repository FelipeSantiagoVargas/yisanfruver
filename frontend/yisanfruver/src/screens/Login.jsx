import React from "react";
import "./styles/login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-global">
      <div className="login-global-container">
        <div className="login-content">
          <div className="login-item">
            <div className="login-logo">
              <h1>YISAN FRUVER</h1>
            </div>
            <div className="login-item-input">
              <i className="fas fa-user"></i>
              <input type="login-text" />
            </div>
            <div className="login-item-input">
              <i className="fas fa-key"></i>
              <input type="password" />
            </div>
            <div className="login-item-input">
              <Link to="/purchaseMenu" className="link">
                <button>Acceder</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
