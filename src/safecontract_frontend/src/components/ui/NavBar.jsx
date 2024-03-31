import { NavLink } from "react-router-dom";
import { safecontract_backend } from 'declarations/safecontract_backend';
import { useEffect, useState, useContext } from "react";
import pp from "../../assets/pp.png"


const NavBar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
  // Get Item from Local storage
  async function getLocal() {
    const userData = await window.localStorage.getItem('user');
  if (userData) {
    setUser(JSON.parse(userData));
  }
  }
  
  getLocal();
}, [])

function cleanUser() {
  localStorage.removeItem("user")
  setUser(null)
}

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-success-subtle">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a style={{
                fontFamily: "Chakra Petch",
                fontWeight: 700,
                fontSize: 25,
              }} class="navbar-brand" href="#">
            Safe Contract
          </a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink
                  to={"/mycontracts"}
                  className="nav-link border rounded active"
                  aria-current="page"
                >
                  My Contracts
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to={"/addcontract"}
                  className="nav-link border rounded "
                  aria-current="page"
                >
                  Add Contract
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to={"/roadmap"}
                  className="nav-link border rounded  active"
                  aria-current="page"
                >
                  RoadMap
                </NavLink>
              </li>
            </ul>
            <span className="fs-5">{user? user: ""}</span>
            <img
              style={{ width: 40, height: 40 }}
              src={pp}
              className="img-fluid m-2"
              alt="img"
            />
            <div className="mx-3">
              <a onClick={() => {cleanUser()}} href="/" className="btn btn-danger outlined">
                Log Out
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
