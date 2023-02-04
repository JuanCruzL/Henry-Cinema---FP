import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="loginContainer">
      <div className="form-imageContainer">
        <div className="image-container"></div>
        <div className="form-container">
          <form>
            <div class="group">
              <input required="" type="text" class="input"></input>
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Name</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
