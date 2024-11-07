import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter'; // Importing Typewriter (without CSS)
import heroImage from '../../assets/hero.jpg'; // Import your image
import cvImage from '../../assets/cv.jpg'; // Import the CV image

const Hero = () => {
    return (
        <div className="container  d-flex align-items-center justify-content-center my-5 pt-5" id='hero'>
            <div className="row">
                {/* Left Section: Text */}
                <div className="col-md-6 mb-3 d-flex flex-column align-items-start justify-content-center">
                    {/* Small subtle text with primary color */}
                    <div className="d-flex align-items-center mb-2">
                        <FaCode className="me-2 text-primary" />
                        <small className="text-primary fw-bold">Mern Developer</small>
                    </div>

                    {/* Main Header with Typewriter */}
                    <h1 className="display-5 fw-bold">
                        I am a{' '}
                        <span style={{ color: '#007bff' }}>
                            <Typewriter
                                words={['React Developer', 'Backend Developer', 'MERN Developer']}
                                loop={false}
                                cursor
                                cursorStyle="_"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>

                    {/* Muted Paragraph with custom background and border */}
                    <p className="bg-warning bg-opacity-10 border-start border-warning border-4 rounded-start p-3 text-muted">
                        I specialize in creating responsive and dynamic user interfaces using React, HTML, CSS, and JavaScript. Let's build something amazing together!
                    </p>

                    {/* Buttons: Download CV and Hire Me */}
                    <div className="d-flex gap-3">
                        {/* Download CV Button with anchor link */}
                        <a href={cvImage} download="cv.jpg" className="btn btn-outline-primary">
                            Download CV
                        </a>
                        <Link to="/contact" className="btn btn-primary">
                            Hire Me
                        </Link>
                    </div>
                </div>

                {/* Right Section: Image */}
                <div className="col-md-6 mb-3 d-flex align-items-center justify-content-center">
                    <img
                        src={heroImage}
                        alt="Hero"
                        className="img-fluid rounded"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
