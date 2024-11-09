import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import "./login.css";
import { useLocation } from "react-router-dom";
import axiosSecure  from "../../utils/Api.js";
const Loginn = () => {
  // const {setUser} = useContext(UserContext);
  const [login, setLogin] = useState();
  const [error, setError] = useState();
  const history = useHistory();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
    .then((response) => response.json())
      .then((resp) => {
        console.log( resp.jwt);
        localStorage.setItem('token',resp.jwt)
 
        // localStorage.setItem('user',resp.user)

        axiosSecure.defaults.headers.authorization = 'Bearer '+resp.jwt
      if(resp.role==="patient")
        window.location.href = 'http://localhost:3000/patients';
        else if (resp.role==="admin")
        window.location.href = 'http://localhost:3000/side';
       else 
       window.location.href = 'http://localhost:3000/doctors';
 
       
      })
      .catch((e) => {
        console.log(e)
        // setUser(null);
        setError("Invalid Login!");
      });
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="login_box_img">
            <img class="img-fluid" src="img/login.jpg" alt="" />
            <div class="hover">
              <h4>Do you want to create an account?</h4>
              <a class="primary-btn" href="login.html">
                Signup
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="login_form_inner">
            <h3>Please login</h3>

            <span id="lastNameError"></span>
            <div class="col-md-12 form-group">
              <input
                type="text"
                class="form-control"
                className="form-control"
                id="floatingInput"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <span id="emailError"></span>
            <div class="col-md-12 form-group">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => setPass(e.target.value)}
              />
            </div>

            <div class="col-md-12 form-group">
              <button
                type="submit"
                value="submit"
                class="primary-btn"
                onClick={handleSignIn}
              >
                Login
              </button>
            </div>
            <div
              className="text-center mt-2"
              style={{ color: "red", minHeight: "25px" }}
              dangerouslySetInnerHTML={{ __html: error }}
            />
            <div className="row" style={{ minHeight: "30px" }}>
              {location.state && (
                <span
                  className="text-center ms-2 lead"
                  style={{ color: "blue" }}
                  dangerouslySetInnerHTML={{ __html: location.state.message }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginn;