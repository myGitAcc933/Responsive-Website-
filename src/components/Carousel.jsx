import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../image1.jpg";
import Image3 from "../Image3.jpg";
import image from "../image.jpg";
import { Button, Input, InputGroup } from "reactstrap";

class Car extends Component {
  render() {
    return (
      <div style={{ height: 40 }}>
        <Carousel style={{ height: 500 }}>
          <Carousel.Item>
            <img
              style={{ opacity: 0.6, height: 500, width: 1500 }}
              className="Image1"
              src={image1}
              alt="First slide"
            />

            <Carousel.Caption style={{ marginBottom: 100 }}>
              <h1>Find Your Favorite Property</h1>
              <div className="container">
                <InputGroup style={{ width: 1000, height: 60 }}>
                  <Input
                    type="Enter Location"
                    name="Enter Location"
                    style={{ width: 50, height: 60 }}
                    id="exampleEnter Location"
                    placeholder="Enter Location placeholder"
                  />

                  <Input
                    type="select"
                    name="select"
                    id="exampleSelect"
                    style={{ height: 60 }}
                    placeholder="Location"
                  >
                    <option>Location</option>
                    <option></option>
                    <option>Location</option>
                    <option>Alabama</option>
                    <option>Arizona</option>
                    <option>Arkansas</option>
                    <option>California</option>
                    <option>colorado</option>
                    <option>connecticut</option>
                    <option>Delaware</option>
                    <option>District Of Columbia</option>
                  </Input>
                  <Input
                    type="select"
                    name="select"
                    id="exampleSelect"
                    style={{ height: 60 }}
                    placeholder="Property Type"
                  >
                    <option>Property Type</option>
                    <option></option>
                    <option>Property Type</option>
                    <option>House/Villa</option>
                    <option>Flat</option>
                    <option>Plot/Land</option>
                    <option>Office Space</option>
                    <option>Shop/Showroom</option>
                    <option>Commercial Land</option>
                    <option>Warehouse/Godown</option>
                  </Input>
                  <Button color="success" style={{ width: 160 }}>
                    Search
                  </Button>
                </InputGroup>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ opacity: 0.7, height: 500, width: 1500 }}
              className="Image1"
              src={Image3}
              alt="First slide"
            />

            <Carousel.Caption style={{ marginBottom: 100 }}>
              <h1>Find Your Favorite Property</h1>
              <div className="container">
                <InputGroup style={{ width: 1000, height: 60 }}>
                  <Input
                    type="Enter Location"
                    name="Enter Location"
                    style={{ width: 50, height: 60 }}
                    id="exampleEnter Location"
                    placeholder="Enter Location placeholder"
                  />

                  <Input
                    type="select"
                    name="select"
                    id="exampleSelect"
                    style={{ height: 60 }}
                    placeholder="Location"
                  >
                    <option>Location</option>
                    <option></option>
                    <option>Location</option>
                    <option>Alabama</option>
                    <option>Arizona</option>
                    <option>Arkansas</option>
                    <option>California</option>
                    <option>colorado</option>
                    <option>connecticut</option>
                    <option>Delaware</option>
                    <option>District Of Columbia</option>
                  </Input>
                  <Input
                    type="select"
                    name="select"
                    id="exampleSelect"
                    style={{ height: 60 }}
                    placeholder="Property Type"
                  >
                    <option>Property Type</option>
                    <option></option>
                    <option>Property Type</option>
                    <option>House/Villa</option>
                    <option>Flat</option>
                    <option>Plot/Land</option>
                    <option>Office Space</option>
                    <option>Shop/Showroom</option>
                    <option>Commercial Land</option>
                    <option>Warehouse/Godown</option>
                  </Input>
                  <Button color="success" style={{ width: 160 }}>
                    Search
                  </Button>
                </InputGroup>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        ;
      </div>
    );
  }
}

export default Car;
