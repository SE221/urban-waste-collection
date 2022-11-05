import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./authen.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setpasswordError] = useState("");

  const handleValidation = (event) => {
    let formIsValid = true;

    if (
      !username.match(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/)
    ) {
      formIsValid = false;
      setUsernameError("Username Not Valid");
      return false;
    } else {
      setUsernameError("");
      formIsValid = true;
    }
    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  return (
    <div className="App">
      <div className="container mb-4">
        <div className="row mt-lg-n12 mt-md-n12 mt-n12 justify-content-center">
          <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
            <div className="card mt-8">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1 text-center py-4">
                  <h4 class="font-weight-bolder text-white mt-1">Sign IN</h4>
                  <p class="mb-1 text-sm text-white"> Add your credentials </p>
                </div>
              </div>
              <div className="card-body">
                <form
                  method="post"
                  className="text-start"
                  id="loginform"
                  onSubmit={loginSubmit}
                >
                  <div className="input-group input-group-static mb-4">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username_login"
                      // placeholder="Enter username"
                      onChange={(event) => setUsername(event.target.value)}
                    />
                    <small id="emailHelp" className="text-danger form-text">
                      {usernameError}
                    </small>
                  </div>
                  <div className="input-group input-group-static mb-4">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="pwd_login"
                      // placeholder="Password"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <small id="passworderror" className="text-danger form-text">
                      {passwordError}
                    </small>
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label">
                      Keep me logged in
                    </label>
                  </div>
                  {/* TODO: handle submit */}
                  <div class="col itext-center">
                    <button
                      type="submit"
                      className="btn bg-gradient-dark w-100 mt-3 mb-0"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center pt-0 px-lg-2 px-1">
                <div className="mb-4 text-sm mx-auto">
                  {/* <a
                    href="signup"
                    class="text-primary text-gradient font-weight-bold"
                  >
                    Register
                  </a> */}
                  <Link
                    to="/signup"
                    className="text-primary text-gradient font-weight-bold"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // <div className="container"> */}
      {/* //   <div className="row d-flex justify-content-center"> */}
      {/* // <div className="col-md-4"> */}

      {/* Source: <a href="https://askavy.com/react-form/">React Form</a> */}
      {/* // </div> */}
    </div> // app
  );
}
// export default Login;

// export Login;
