import React, { Component } from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselInner,
  CarouselItem,
  View,
  Mask
} from "mdbreact";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Navbar1 from "../common/Navbar";

class CarouselPage extends Component {
  render() {
    return (
      <span>
        <Navbar1 />
        <Carousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <Slide1 />
                <Mask overlay="black-light" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <Slide2 />
                <Mask overlay="black-light" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <Slide3 />
              </View>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </span>
    );
  }
}

export default CarouselPage;
