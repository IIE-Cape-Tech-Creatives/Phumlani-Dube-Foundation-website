// EventCarousel.js
import React from "react";
import Slider from "react-slick";
import "./EventCarousel.css"; // For custom styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assests/dubes.jpeg";
import image2 from "../assests/dude.jpeg";
import image3 from "../assests/gym.jpeg";

const events = [
  {
    id: 1,
    image: image1, 
    date: "Friday, Sep 6",
    title: "Community Fitness Event",
    description: "Join us for a fitness session at the park!"
  },
  {
    id: 2,
    image: image2,
    date: "Friday, Sep 6",
    title: "Food Drive",
    description: "Help us distribute food to the community."
  },
  {
    id: 3,
    image: image3,
    date: "Friday, Sep 6",
    title: "Speaker Session",
    description: "Attend a talk on community leadership."
  },
];

const EventCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="carousel-container">
      <h2>Izinhlelo Ezizayo</h2>
      <h3>Upcoming events</h3>
      <Slider {...settings}>
        {events.map(event => (
          <div className="event-card" key={event.id}>
            <div className="event-image-wrapper">
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-date">{event.date}</div>
              <div className="event-details">
                <h4>{event.title}</h4>
                <p>{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom arrow components for the carousel
const NextArrow = (props) => {
  const { className, onClick } = props;
  return <div className={`${className} custom-next-arrow`} onClick={onClick} />;
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return <div className={`${className} custom-prev-arrow`} onClick={onClick} />;
};

export default EventCarousel;
