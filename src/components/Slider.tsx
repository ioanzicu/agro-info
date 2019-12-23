import React from "react";
import { Carousel } from "react-bootstrap";

const sliderContent = [
  {
    id: "34xc5jcw",
    imageUrl:
      "https://images.unsplash.com/photo-1555952678-9da903a4cd5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: "The Most Updated Weather Data",
    description:
      "The weather data is updated every 3 hours, making sure that you get the most updated weather forecast."
  },
  {
    id: "20jcwec9",
    imageUrl:
      "https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: "Get Weather by the Location",
    description:
      "You access data by the location you need or you are interested in."
  },
  {
    id: "2dae143",
    imageUrl:
      "https://images.unsplash.com/photo-1450528039619-bdc0c2d26850?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    title: "Easy to use",
    description:
      "Our platform offer an intuitive user experience for usability and comfort."
  },
  {
    id: "21034vrs",
    imageUrl:
      "https://images.unsplash.com/photo-1492114011589-509c6e695d8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    title: "Trusted Service",
    description:
      "Agro Info Team is a trusted partner for you agriculture entrepreneurship."
  }
];

const Slider: React.FC = () => {
  return (
    <Carousel>
      {sliderContent.map(({ id, imageUrl, title, description }) => (
        <Carousel.Item key={id}>
          <img className="d-block w-100" src={imageUrl} alt="First slide" />
          <Carousel.Caption
            style={{
              backgroundColor: "rgba(51, 51, 51, 0.8)",
              borderRadius: "1rem"
            }}
          >
            <h2>{title}</h2>
            <p>{description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
