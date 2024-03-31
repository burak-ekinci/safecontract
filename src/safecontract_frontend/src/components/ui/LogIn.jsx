import React, { useState } from "react";
import { safecontract_backend } from "declarations/safecontract_backend";

const LogIn = () => {
  const [state, SetState] = useState(true);
  const [loading, SetLoading] = useState(false);
  const [signUp, setSignUp] = useState();
  const [login, setLogin] = useState();

  async function signUpBC(e) {
    SetLoading(true);
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    await safecontract_backend.sign_up(email, password).then((res) => {
      setSignUp(res);
      console.log(res);
      if (res.Ok == null) {
        SetLoading(false);
        alert("Registration Successful. Sign in.");
      } else if (res.Err) {
        SetLoading(false);
        alert("There is already such a user!");
      } else {
        SetLoading(false);
        alert("Error: Unknown:");
      }
    });

    return false;
  }

  async function loginBC(e) {
    SetLoading(true);
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    await safecontract_backend.login(email, password).then(async (res) => {
      setLogin(res);
      if (res.Ok == null) {
        SetLoading(false);
        await window.localStorage.setItem("user", JSON.stringify(email));
        window.location.href = "/mycontracts";
      } else {
        SetLoading(false);
        alert("Error: Unknown:");
      }
    });
    return true;
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6  border border-primary p-3 rounded text-center">
          <h3
            style={{
              fontFamily: "Chakra Petch",
              fontWeight: 700,
              fontSize: 45,
            }}
          >
            {" "}
            SAFE CONTRACT{" "}
          </h3>

          {/* <!-- Pills navs --> */}
          <ul
            className="nav nav-pills nav-justified mb-3"
            id="ex1"
            role="tablist"
          >
            <li
              className="nav-item m-1 border-primary border rounded"
              role="presentation"
            >
              <a
                className={state ? "nav-link active" : "nav-link"}
                id="tab-login"
                data-mdb-toggle="pill"
                role="tab"
                aria-controls="pills-login"
                aria-selected="true"
                onClick={() => SetState(true)}
              >
                Login
              </a>
            </li>
            <li
              className="nav-item m-1 border-primary border rounded"
              role="presentation"
            >
              <a
                className={state ? "nav-link" : "nav-link active"}
                id="tab-register"
                data-mdb-toggle="pill"
                role="tab"
                aria-controls="pills-register"
                aria-selected="false"
                onClick={() => SetState(false)}
              >
                Register
              </a>
            </li>
          </ul>
          {/* <!-- Pills navs --> */}

          {/* <!-- Pills content --> */}
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="tab-login"
            >
              {/*   FORM ACTİON /MY CONTRACTS */}
              <form onSubmit={state == true ? loginBC : signUpBC}>
                {/* <!-- Email input --> */}
                <div className="form-outline text-start mb-4">
                  <label className="form-label" for="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline text-start mb-4">
                  <label className="form-label" for="loginPassword">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="loginPassword"
                    className="form-control"
                  />
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block form-control mb-4"
                >
                  <span
                    className={
                      loading
                        ? "me-2 spinner-border spinner-border-sm"
                        : "me-2 visually-hidden spinner-border spinner-border-sm"
                    }
                    aria-hidden="true"
                  ></span>
                  {state ? "Log In" : "Sign Up"}
                </button>

                {/* <!-- Register buttons --> */}
                <div className="text-center">
                  <p>Understanding Satoshi: Safe Contract.</p>
                </div>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="pills-register"
              role="tabpanel"
              aria-labelledby="tab-register"
            ></div>
          </div>
          {/* <!-- Pills content --> */}
        </div>
      </div>
    </div>
  );
};

export default LogIn;
