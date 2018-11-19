import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./common/Navbar";
import Header from "./common/Header";
import Footer from "./common/Footer";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
