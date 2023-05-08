import React from "react";
import "./Login.scss";
import "./Login.css";
import bg from '../../assets/images/bg_1.jpg';

const Login = () => {
  return (
    <div style={{ width: "100%" }}>
      <div class="d-lg-flex half">
        <div
          class="bg order-1 order-md-2"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div class="contents order-2 order-md-1">
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-7">
                <h3>
                  Login to <strong>Thanh Da Portal</strong>
                </h3>
                <p class="mb-4">
                  Welcome joy with an open heart and even more open mind.
                </p>
                <form action="#" method="post">
                  <div
                    class="form-group first"
                    style={{ marginBottom: "1rem" }}
                  >
                    <label for="username" style={{ marginBottom: "0.5rem" }}>
                      Username
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="your-email@gmail.com"
                      id="username"
                    />
                  </div>
                  <div
                    class="form-group last mb-3"
                    style={{ marginBottom: "1rem" }}
                  >
                    <label for="password" style={{ marginBottom: "0.5rem" }}>
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Your Password"
                      id="password"
                    />
                  </div>

                  {/* <div class="d-flex mb-5 align-items-center" style={{ justifyContent: "space-between" }}>
                    <label class="control control--checkbox mb-0">
                      <span class="caption">Remember me</span>
                      <input type="checkbox" checked="checked" />
                      <div class="control__indicator"></div>
                    </label>
                    <span class="ml-auto">
                      <a href="#" class="forgot-pass">
                        Forgot Password
                      </a>
                    </span>
                  </div> */}

                  <input
                    type="submit"
                    value="Log In"
                    class="btn btn-block btn-primary"
                    style={{ width: "100%" }}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
