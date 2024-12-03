import React, { useRef } from "react";

const Login = ({ handleLogin }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (email && password) {
      handleLogin(email, password);
      // Reset the form fields
      emailRef.current.value = "";
      passwordRef.current.value = "";
    } else {
      alert("Please fill in both email and password.");
    }
  };

  return (
    <section className="bg-[#1c1c1c] min-h-screen flex items-center justify-center">
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                {/* Left Side with Image */}
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid h-100"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>

                {/* Right Side with Form */}
                <div className="col-md-6 col-lg-7 d-flex align-items-center bg-gray-800 rounded-tr-2xl rounded-br-2xl">
                  <div className="card-body p-4 p-lg-5 text-white">
                    <form onSubmit={handleFormSubmit}>
                      {/* Logo */}
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        ></i>
                        <span className="h1 fw-bold mb-0">Logo</span>
                      </div>

                      {/* Title */}
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>

                      {/* Email Input */}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          ref={emailRef}
                          placeholder="Enter your email"
                        />
                        <label
                          className="form-label"
                          htmlFor="form2Example17"
                        >
                          Email address
                        </label>
                      </div>

                      {/* Password Input */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          ref={passwordRef}
                          placeholder="Enter your password"
                        />
                        <label
                          className="form-label"
                          htmlFor="form2Example27"
                        >
                          Password
                        </label>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-secondary btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>

                      {/* Links */}
                      <a className="small text-white" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "white" }}>
                        Don't have an account?{" "}
                        <a href="#!" style={{ color: "white" }}>
                          Register here
                        </a>
                      </p>
                      <a href="#!" className="small text-white">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-white">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
