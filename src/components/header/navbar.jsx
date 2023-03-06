import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/styles.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-4 col-md-2 text-center">
            <a className="navbar-brand" href="/">LOGO</a>
          </div>
          <div className="col-8 col-md-8">
            <div className="d-flex justify-content-end">
              <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/">HOME</a>
                <a className="nav-link" href="/work">WORK</a>
                <a className="nav-link" href="/contact">CONTACT</a>
                <a className="nav-link" href="/about">ABOUT ME</a>
              </div>
            </div>
          </div>
          <div className="col-4 col-md-2 text-center collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a className="nav-link" href="/signup">SIGN UP</a>
              <a className="nav-link" href="/login">LOGIN</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
