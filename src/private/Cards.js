import React, { Component } from "react";
import { Card, CardBody, CardUp, Avatar, Row, Col, Fa } from "mdbreact";
import "../styles/cards.css";

class Cards extends Component {
  render() {
    return (
      <div className="cardRow">
        <Row>
          <Col className="cardCol">
            <Card testimonial className="cardTest">
              {/* <Avatar className="mx-auto white">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                  alt=""
                />
              </Avatar> */}
              <CardBody>
                <h4 className="card-title">Our Vision</h4>
                <hr />
                <p>
                  <Fa icon="quote-left" /> Founded in 2013, our firm has been
                  providing effective, affordable and often untraditional legal
                  solution to our hundreds of clients over the years. Our law
                  firm work with remarkable team of expert attorneys in just
                  about every field of law you can name, and it is because of
                  this comprehensive nature of the legal services we provide,
                  our firm has been able to stay ahead of its competitors.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col className="cardCol">
            <Card testimonial className="cardTest">
              {/* <CardUp gradient="aqua" /> */}
              {/* <Avatar className="mx-auto white">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                alt=""
              />
            </Avatar> */}
              <CardBody>
                <h4 className="card-title">Who We Are</h4>
                <hr />
                <p>
                  <Fa icon="quote-left" /> Headed by one of the young, talented,
                  and creative lawyers in the area, Bayarjargal Sereenen, our
                  firm have a sound base in the law fraternity, and we aim to
                  put our resources to effective use for the success of our
                  clients. Thus, you can rest assured that your case is in safe
                  hands with.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col className="cardCol">
            <Card testimonial className="cardTest">
              {/* <CardUp gradient="aqua" /> */}
              {/* <Avatar className="mx-auto white">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                alt=""
              />
            </Avatar> */}
              <CardBody>
                <h4 className="card-title">Our Mission</h4>
                <hr />
                <p>
                  <Fa icon="quote-left" /> Headed by one of the young, talented,
                  and creative lawyers in the area, Bayarjargal Sereenen, our
                  firm have a sound base in the law fraternity, and we aim to
                  put our resources to effective use for the success of our
                  clients. Thus, you can rest assured that your case is in safe
                  hands with.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Cards;
