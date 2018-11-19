import React, { Component } from "react";
import "../styles/slide1.css";

export default class Slide1 extends Component {
  render() {
    return (
      <div className="slide1">
        <div className="slideHeader">
          <h1 className="header1">Attorney for </h1>
          <hr className="slide1hr" />
          <h1 className="header2">Immigration Law</h1>
        </div>
        <img
          src="https://tsegtslawgroup.com/wp-content/uploads/2017/06/BayarjargalSereenLawyer.png"
          id="headerPic"
        />
        <hr className="bottomHr" />
        <div className="awards">
          <img
            className="badges"
            src="http://tsegtslawgroup.com/wp-content/uploads/2017/05/award4-1.png"
          />
          <img
            className="badges"
            src="http://tsegtslawgroup.com/wp-content/uploads/2017/05/award1-1.png"
          />
          <img
            className="badges"
            src="http://tsegtslawgroup.com/wp-content/uploads/2017/05/award3-1.png"
          />
          <img
            className="badges"
            src="http://tsegtslawgroup.com/wp-content/uploads/2017/05/award2-1.png"
          />
        </div>
      </div>
    );
  }
}
