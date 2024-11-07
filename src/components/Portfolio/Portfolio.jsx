import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { FaGithub, FaStar, FaStarHalfAlt } from 'react-icons/fa'; // Importing stars and GitHub icon
import portfolioData from '../../assets/portfolioData';

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  return (
    <Container id="portfolio" className="py-4 my-4">
      <h2 className="text-center">My <span className='text-primary'>Portfolio</span></h2>

      <p className='text-center text-muted container col-8 mb-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt assumenda, ducimus blanditiis repellendus error hic deleniti accusamus natus amet.
      </p>

      <Row>
        {portfolioData.map((project) => (
          <Col md={4} key={project.id} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={project.image}
                className="img-fluid"
                style={{ height: '200px', objectFit: 'cover' }} // Ensures uniform image height
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-3">{project.title}</Card.Title>

                {/* Stars for Rating */}
                <div className="mb-3">
                  <span className="text-primary">
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStarHalfAlt size={20} />
                  </span>
                </div>

                {/* GitHub Button on New Row */}
                <div className="mt-auto">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn d-inline-flex align-items-center"
                    style={{
                      backgroundColor: 'rgba(0, 123, 255, 0.1)', // primary bg with opacity
                      color: '#007bff',
                      padding: '10px 20px',
                      fontSize: '18px',
                      borderRadius: '5px',
                      width: 'auto', // Ensures button width adjusts to content
                    }}
                  >
                    <FaGithub style={{ marginRight: '8px' }} size={20} /> {/* GitHub icon on the left */}
                    GitHub
                  </a>
                </div>

                <div className="mt-3 d-flex justify-content-between">
                  <Button variant="primary rounded-pill" onClick={() => handleShow(project)}>
                    Read More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for project details */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={4}>
              <img
                src={selectedProject?.image}
                alt={selectedProject?.title}
                className="img-fluid"
                style={{ height: '200px', objectFit: 'cover' }} // Ensures uniform image height in modal
              />
            </Col>
            <Col md={8}>
              <h5>Description</h5>
              <p>{selectedProject?.description}</p>
              <a
                href={selectedProject?.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary rounded-pill"
              >
                View on GitHub
              </a>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Portfolio;
