import React, { Component } from "react";
import "../styles/slide2.css";
import Cards from "./Cards";

export default class Slide2 extends Component {
  render() {
    return (
      <div className="slide2">
        <h1 className="slide2Hdr">Cases We Handle</h1>
        <Cards className="cards" />
      </div>
    );
  }
}
