import React, { Component } from "react";
import "../styles/header.css";
import {
  Carousel,
  CarouselCaption,
  CarouselInner,
  CarouselItem,
  View,
  Mask
} from "mdbreact";
import CarouselPage from "../private/CarouselPage";
import Navbar from "../common/Navbar";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <CarouselPage />
      </div>
    );
  }
}
