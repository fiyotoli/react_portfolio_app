import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUsers, FaBriefcase, FaCoffee } from 'react-icons/fa';

const SuccessfulJob = () => {
  return (
    <div
      className="successful-job-section mt-5"
      style={{
        backgroundColor: '#f8f9fa', // Bootstrap light background color
        padding: '50px 0',
      }}
    >
      <Container className="text-center">
        <Row>
          {/* Customer Section */}
          <Col md={4} className="mb-4">
            <div>
              <div
                className="icon-circle"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: '#007bff', // Bootstrap primary color
                }}
              >
                <FaUsers size={40} style={{ color: 'white' }} />
              </div>
              <h3 className="mt-3" style={{ color: '#333', fontSize: '1.25rem' }}>Happy Customers</h3>
              <h1 style={{ color: '#007bff' }}>1200+</h1> {/* Primary color for numbers */}
            </div>
          </Col>

          {/* Successful Job Section */}
          <Col md={4} className="mb-4">
            <div>
              <div
                className="icon-circle"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: '#007bff',
                }}
              >
                <FaBriefcase size={40} style={{ color: 'white' }} />
              </div>
              <h3 className="mt-3" style={{ color: '#333', fontSize: '1.25rem' }}>Successful Jobs</h3>
              <h1 style={{ color: '#007bff' }}>340+</h1>
            </div>
          </Col>

          {/* Coffee Section */}
          <Col md={4} className="mb-4">
            <div>
              <div
                className="icon-circle"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: '#007bff',
                }}
              >
                <FaCoffee size={40} style={{ color: 'white' }} />
              </div>
              <h3 className="mt-3" style={{ color: '#333', fontSize: '1.25rem' }}>Cups of Coffee</h3>
              <h1 style={{ color: '#007bff' }}>800+</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SuccessfulJob;
