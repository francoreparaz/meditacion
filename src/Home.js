import React from "react";
import "./Home.css";
import { Carousel } from "react-bootstrap";
import buda from "./public/buda.jpg"
import meditacion from "./public/meditacion.jpeg"
// import Carousel from "react-bootstrap";
export const Home = () => {
  return (
    <div className="image">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={buda}
            width="500 px"
            height="500 px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={meditacion}
            width="500 px"
            height="500 px"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={buda}
            width="500 px"
            height="500 px"
          />

        </Carousel.Item>
      </Carousel>
      <h1>Meditacion Guiada por Andrea canale</h1>
      <h3><strong>Que es la meditación?</strong></h3>
    </div>
  );
};

export default Home;
