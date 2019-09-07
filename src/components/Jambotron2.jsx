import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./Jambotron2.css";
import one from "../user/one.jpg";
import two from "../user/two.jpg";
import three from "../user/three.jpg";
const Jambotron2 = props => {
  return (
    <div>
      <Jumbotron fluid style={{ marginTop: 500, height: 400 }}>
        <Container fluid>
          <h1 className="display1">Trusted Agents</h1>
          <p className="display">
            Lorem ipsum dolor sitamet,consectetur a dipisicing elit
          </p>

          <div className="class">
            <image src={one} roundedCircle className="image" />
            <p className="content">
              Lorem Ipsum is simply dummy text of the printing and
              <br /> typesetting industry.Lorem Ipsum has been
            </p>
            <p className="content2">
              -Stave Martin <br />
              Buying Agent{" "}
            </p>
          </div>

          <div className="class">
            <image src={two} roundedCircle className="image2" />
            <p className="content5">
              Lorem Ipsum is simply dummy text of the printing and
              <br /> typesetting industry.Lorem Ipsum has been
            </p>
            <p className="content6">
              -Mark Smith <br />
              Selling Agent{" "}
            </p>
          </div>

          <div className="class">
            <image src={three} roundedCircle className="image2" />
            <p className="content5">
              Lorem Ipsum is simply dummy text of the printing and
              <br /> typesetting industry.Lorem Ipsum has been
            </p>
            <p className="content6">
              -Ryan Printz <br />
              Estate Agent{" "}
            </p>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jambotron2;
