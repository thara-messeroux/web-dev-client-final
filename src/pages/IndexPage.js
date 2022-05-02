import React from "react";
import { Link } from "react-router-dom";

const IndexPage = () => {

  return (
    <div className="index-page">
      <div className="container-fluid mw-100">
        <div className="row">
          <div className="left-content col-12 col-md-6">
            <img className="img-fluid" src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" alt="twitter"/>
          </div>
          <div className="right-content col-12 col-md-6">
            <h1 className="">Happening now</h1>
            <h3>Join twitter today</h3>
            <Link to="/register" className="btn btn-primary mb-2">Register</Link>
            <p>Already registered?</p>
            <Link to="/login" className="btn btn-primary">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
