import React, { Component } from "react";
import "../styles/footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <hr />
        <img
          id="logo"
          src="http://tsegtslawgroup.com/wp-content/uploads/2017/04/logo-footer.png"
          alt="Tsegts Law Group"
          className="footer-logo_img"
          width="171"
          height="58"
        />
        <div className="footer">
          © 2018 Tsegts Law Group, Inc. All Rights Reserved
        </div>
      </div>
    );
  }
}

export default Footer;
