import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Container,
  Mask,
  View
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../images/logo-small.png";

class FullPageIntroWithFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <Navbar color="transparent" dark expand="md" fixed="top" scrolling>
              <NavbarBrand href="/">
                <img className="brand" src={logo} alt="logo" id="logo" />
              </NavbarBrand>
              <Container>
                {!this.state.isWideEnough && (
                  <NavbarToggler onClick={this.onClick} />
                )}
                <Collapse isOpen={this.state.collapse} navbar>
                  <NavbarNav center>
                    <NavItem active>
                      <NavLink to="#">
                        <span className="links">
                          <b>Home</b>
                        </span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#">
                        <span className="links">
                          <b>Practice Areas & Services</b>
                        </span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#">
                        <span className="links">
                          <b>Legal News</b>
                        </span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#">
                        <span className="links">
                          <b>Affiliations and Awards</b>
                        </span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#">
                        <span className="links">
                          <b>More</b>
                        </span>
                      </NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>
          </Router>
        </header>
      </div>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbar;
