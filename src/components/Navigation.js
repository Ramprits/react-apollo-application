import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navigation = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
            alt="logo"
          />
        </Link>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/home" className="navbar-item">
            Home
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {user ? (
                <strong className="has-text-white ">
                  <button
                    type="button"
                    onClick={logout}
                    className="button is-link is-small is-rounded"
                  >
                    Logout
                  </button>
                </strong>
              ) : (
                <>
                  <strong className="has-text-white ">
                    <Link
                      className="button is-primary is-small is-rounded"
                      to="/signup"
                    >
                      Sign up
                    </Link>
                  </strong>
                  <strong className="has-text-white ">
                    <Link
                      className="button is-light is-small is-rounded"
                      to="/signin"
                    >
                      Sign in
                    </Link>
                  </strong>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
