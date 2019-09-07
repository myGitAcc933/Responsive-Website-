import React from "react";
import {
  Jumbotron,
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardGroup
} from "reactstrap";
import "./Jambotron.css";
import one from "../overlay/one.png";
import two from "../overlay/two.png";
import three from "../overlay/three.png";
import four from "../overlay/four.png";
const Jambotron = props => {
  return (
    <div>
      <CardGroup>
        <Card style={{ marginLeft: 100, width: 700, height: 40 }}>
          <CardImg top width="10%" src={one} alt="Card image cap" />
          <div className="centered">
            <b>New York</b>
          </div>
          <div className="centered1">16 Properties</div>
        </Card>

        <Card style={{ marginLeft: 100, width: 400, height: 40 }}>
          <CardImg
            top
            width="10%"
            src={two}
            alt="Card image cap"
            style={{ width: 420 }}
          />
          <div className="centered2">
            <b>Los Angeles</b>
          </div>
          <div className="centered3">265 Properties</div>
        </Card>
      </CardGroup>
      <CardGroup style={{ marginTop: 350 }}>
        <Card style={{ marginLeft: 100, width: 200, height: 40 }}>
          <CardImg
            top
            width="10%"
            src={three}
            alt="Card image cap"
            style={{ width: 420 }}
          />
          <div className="centered4">
            <b>Chicago</b>
          </div>
          <div className="centered5">620 Properties</div>
        </Card>

        <Card style={{ marginRight: 300, width: 700, height: 40 }}>
          <CardImg
            top
            width="10%"
            src={four}
            alt="Card image cap"
            style={{ width: 720, marginRight: 1450 }}
          />
          <div className="centered6">
            <b>Philadelphia</b>
          </div>
          <div className="centered7">265 Properties</div>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Jambotron;
