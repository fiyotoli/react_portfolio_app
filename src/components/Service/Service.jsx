import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaTools, FaLaptopCode } from 'react-icons/fa'; // Importing relevant icons for MERN stack

const Service = ({ icon: Icon, title, description, isPrimary }) => {
  return (
    <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-4">
      <div
        className={`text-center flex-fill ${isPrimary ? 'bg-primary text-white shadow' : ''}`}
        style={{
          backgroundColor: isPrimary ? '#007bff' : '#fff', // Set primary color for background
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <Icon
          className={isPrimary ? 'text-white mb-2' : 'text-primary mb-2'} // Set icon color to white for primary
          size={50}
        />
        <h6 className={isPrimary ? 'text-white mb-1' : 'text-primary mb-1'}>{title}</h6> {/* Set title color to white for primary */}
        <p className={isPrimary ? 'text-white' : 'text-muted'}>{description}</p> {/* Set description color to white for primary */}
      </div>
    </div>
  );
};

const Section = () => {
  return (
    <div className="container mt-5" id='services'>
      <h2 className="text-center mb-5 font-weight-bolder">
        <span className="text-primary">Our</span> Services
      </h2>
      <div className="row">
        <Service
          icon={FaReact}
          title="React Development"
          description="Build dynamic and interactive front-end interfaces with React."
        />
        <Service
          icon={FaNodeJs}
          title="Node.js Backend"
          description="Develop robust and scalable backend systems using Node.js."
        />
        <Service
          icon={FaDatabase}
          title="Database Management"
          description="Manage databases efficiently with MongoDB for seamless data storage."
          isPrimary={true} // Set this card to primary color
        />
        <Service
          icon={FaCode}
          title="API Integration"
          description="Create and integrate RESTful APIs to connect your front-end and back-end."
        />
        <Service
          icon={FaTools}
          title="DevOps Services"
          description="Implement continuous integration and deployment for your web applications."
        />
        <Service
          icon={FaLaptopCode}
          title="Full Stack Solutions"
          description="Offer complete end-to-end solutions from front-end to back-end development."
        />
      </div>
    </div>
  );
};

export default Section;
