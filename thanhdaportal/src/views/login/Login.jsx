import React, { useState } from "react";
import "./Login.scss";
import bg from "../../assets/images/bg.png";
import logo from "../../assets/images/Logo.png";
import { TbEye, TbEyeOff } from "react-icons/tb";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
    first_name: "",
    middle_name: "",
    last_name: "",
  };

  const [password, setPassword] = useState("");
  const [typefield, setType] = useState("password");
  const [icon, setIcon] = useState(TbEyeOff);
  const [isHide, setHide] = useState(false);

  const handleToggle = () => {
    if (typefield === "password") {
      setIcon(TbEye);
      setType("text");
      setHide(true);
    } else {
      setIcon(TbEyeOff);
      setType("password");
      setHide(false);
    }
  };

  const [user, setUser] = useState(initialValues);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <div
      style={{ width: "100%", height: "100vh", backgroundImage: `url(${bg})` }}>
      <div class='d-lg'>
        <div class='container'>
          <div class='container-login'>
            <div class='row align-items-center justify-content-center'>
              <div class='login-form'>
                <div className='login-logo'>
                  <img
                    src={logo}
                    alt='Logo Churchity'
                  />
                </div>
                <h3 class='login-title'>Login</h3>
                <form
                  action='#'
                  method='post'
                  class='form-group'>
                  <div
                    class='form-group first'
                    style={{ marginBottom: "1rem" }}>
                    <label
                      for='username'
                      style={{ marginBottom: "0.5rem" }}>
                      Username
                    </label>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Input email or username'
                      id='username'
                      name='username'
                      value={user.username}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div
                    class='form-group last mb-3'
                    style={{ marginBottom: "1rem" }}>
                    <label
                      for='password'
                      style={{ marginBottom: "0.5rem" }}>
                      Password
                    </label>
                    <div className='password'>
                      <input
                        type={typefield}
                        class='form-control'
                        placeholder='Input password'
                        id='password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span
                        class=''
                        onClick={handleToggle}>
                        {isHide ? (
                          <TbEyeOff
                            class='absolute mr-10'
                            size={20}
                          />
                        ) : (
                          <TbEye
                            class='absolute mr-10'
                            size={20}
                          />
                        )}
                      </span>
                    </div>
                  </div>

                  <div className='form-group button'>
                    <input
                      type='button'
                      value='Login'
                      class='btn btn-block'
                      style={{ width: "100%" }}
                      onClick={handleLogin}
                    />
                  </div>
                </form>
                <div className='login-forgot'>
                  <a
                    href='#'
                    className='forgot-link'>
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
