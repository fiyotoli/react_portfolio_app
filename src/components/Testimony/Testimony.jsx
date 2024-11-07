import React, { useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaQuoteLeft } from 'react-icons/fa';
import { IoArrowUndoCircle, IoArrowRedoCircle } from 'react-icons/io5';

const testimonials = [
  {
    quote: "This company helped me find my dream house in no time!",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    quote: "Amazing service and very professional staff.",
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    quote: "Highly recommend to anyone looking to buy or rent property!",
    name: "Mike Johnson",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    quote: "Best experience I’ve had with a real estate company.",
    name: "Emily Davis",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    quote: "They really listen to your needs and deliver great results.",
    name: "Michael Brown",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const TestimonialCarousel = () => {
  const carouselRef = useRef(null);

  return (
    <div className="container my-5">
      <h2 className="text-center">Testim<span className="text-primary">onials</span></h2>
      <p className="text-muted text-center container col-10 mb-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ullam atque aperiam ea. Ipsa pariatur ab amet distinctio impedit neque?
      </p>

      {/* Carousel with a reference */}
      <Carousel ref={carouselRef} indicators={false} controls={false} interval={5000}>
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className="row">
              {testimonials.slice(index, index + 3).map((testimonialItem, i) => (
                <div className="col-lg-4 col-md-6 mb-4" key={i}>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body text-center">
                      <FaQuoteLeft className="text-primary display-5 mb-3" />
                      <p className="card-text mb-3">{testimonialItem.quote}</p>
                      <hr className="border-primary" />
                      <img
                        src={testimonialItem.avatar}
                        alt={testimonialItem.name}
                        className="rounded-circle mb-3"
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                      />
                      <h5 className="card-title">{testimonialItem.name}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom Circle Controls with Icons */}
      <div className="d-flex justify-content-center mt-4">
        <IoArrowUndoCircle
          className="text-primary me-3"
          size={40}
          style={{ cursor: 'pointer' }}
          onClick={() => carouselRef.current.prev()} // Use the ref to call prev
        />
        <IoArrowRedoCircle
          className="text-primary"
          size={40}
          style={{ cursor: 'pointer' }}
          onClick={() => carouselRef.current.next()} // Use the ref to call next
        />
      </div>
    </div>
  );
};

export default TestimonialCarousel;
