import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // Home icon
import { MdOutlineMenuBook } from 'react-icons/md'; // Blog icon
import { FaInfoCircle, FaBriefcase, FaServicestack } from 'react-icons/fa'; // Icons for the new nav links

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home'); // Track active link
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Collapse the navbar when a nav link or logo is clicked
  const collapseNavbar = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // This will collapse the navbar
    }
  };

  // Set the active link based on the clicked section
  const handleLinkClick = (linkId) => {
    setActiveLink(linkId); // Update active link
  };

  // Helper function to determine if the link is active
  const getActiveClass = (linkId) => {
    return activeLink === linkId
      ? 'border-start border-4 rounded border-success'
      : '';
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${scrolled ? 'shadow-sm' : ''}`}
    >
      <div className="container">
        {/* Left aligned logo and blog icon */}
        <Link className="navbar-brand fs-2 font-weight-bolder fw-bold" to="/" onClick={() => setActiveLink('home')}>
          <MdOutlineMenuBook className="me-2" />
          Rec<span className="text-success">ipe</span>
        </Link>

        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center aligned nav links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link fw-bold d-flex align-items-center ${getActiveClass('home')}`}
                href="#hero" // This now links to the hero section
                style={{ paddingLeft: '1rem' }} // Adjust padding to align with the thicker border
                onClick={() => handleLinkClick('home')}
              >
                <FaHome className="me-2" /> Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link fw-bold d-flex align-items-center ${getActiveClass('about')}`}
                href="#about"
                onClick={() => handleLinkClick('about')}
              >
                <FaInfoCircle className="me-2" /> About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link fw-bold d-flex align-items-center ${getActiveClass('services')}`}
                href="#services"
                onClick={() => handleLinkClick('services')}
              >
                <FaServicestack className="me-2" /> Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link fw-bold d-flex align-items-center ${getActiveClass('portfolio')}`}
                href="#portfolio"
                onClick={() => handleLinkClick('portfolio')}
              >
                <FaBriefcase className="me-2" /> Portfolio
              </a>
            </li>
          </ul>
        </div>

        {/* Right aligned "Contact Me" button */}
        <div className="d-flex">
          <a
            className="btn btn-success rounded-pill"
            href="#contact"
            onClick={() => handleLinkClick('contact')}
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
