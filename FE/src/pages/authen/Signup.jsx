import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./authen.css";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

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

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
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

  const signupSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  return (
    // <div className="App">

    <div className="App">
      <div className="container mb-4">
        <div className="row mt-lg-n12 mt-md-n12 mt-n12 justify-content-center">
          <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
            <div className="card mt-8">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1 text-center py-4">
                  <h4 class="font-weight-bolder text-white mt-1">Sign Up</h4>
                  <p class="mb-1 text-sm text-white"> Add your credentials </p>
                </div>
              </div>

              <div className="card-body">
                <form
                  method="post"
                  className="text-start"
                  id="loginform"
                  onSubmit={signupSubmit}
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
                    <label>Email </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email_login"
                      // placeholder="Enter username"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <small id="emailHelp" className="text-danger form-text">
                      {emailError}
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
                  {/* TODO: handle comfirm password */}
                  <div className="input-group input-group-static mb-4">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="pwd_login"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <small id="passworderror" className="text-danger form-text">
                      {passwordError}
                    </small>
                  </div>
                  <div class="col itext-center">
                    <button
                      type="submit"
                      className="btn bg-gradient-dark w-100 mt-3 mb-0"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center pt-0 px-lg-2 px-1">
                <div className="mb-4 text-sm mx-auto">
                  {/* <a
                    href="login"
                    class="text-primary text-gradient font-weight-bold"
                  >
                    Already has an account?
                  </a> */}
                  <Link to="/login">
                    <p className="text-primary text-gradient font-weight-bold">
                      Already has an account?
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// export default Login;

// export Login;
