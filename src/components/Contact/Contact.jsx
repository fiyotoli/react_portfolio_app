import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Form, Input, Button } from 'antd';

const Contact = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="container my-5" id="contact">
      <div className="row">
        {/* Form Section (Left) */}
        <div className="col-md-6 bg-primary bg-opacity-10 p-5 rounded">
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please enter your name',
                },
              ]}
            >
              <Input placeholder="Enter your name" className="form-control" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'Please enter a valid email',
                },
                {
                  required: true,
                  message: 'Please enter your email',
                },
              ]}
            >
              <Input placeholder="Enter your email" className="form-control" />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[
                {
                  required: true,
                  message: 'Please enter your message',
                },
              ]}
            >
              <Input.TextArea
                placeholder="Enter your message"
                rows={4}
                className="form-control"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="btn btn-primary">
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>

        {/* Text Section (Right) */}
        <div className="col-md-6 d-flex flex-column justify-content-center ps-md-5 mt-5 mt-md-0">
          <h2 className="text-primary mb-3">Get in Touch</h2>
          <p className="mb-4 text-muted">
            Feel free to reach out to us for any inquiries or further information. We are always here to help you find your dream property or answer any questions you may have.
          </p>

          <ul className="list-unstyled">
            <li className="mb-3">
              <FaEnvelope className="text-primary me-2" /> 
              <span className="text-muted">info@realestateworld.com</span>
            </li>
            <li className="mb-3">
              <FaPhone className="text-primary me-2" /> 
              <span className="text-muted">+123 456 7890</span>
            </li>
            <li className="mb-3">
              <FaMapMarkerAlt className="text-primary me-2" /> 
              <span className="text-muted">123 Real Estate St., City, Country</span>
            </li>
          </ul>

          <h4 className="text-primary mb-3 mt-4">Follow Us</h4>
          <div className="d-flex">
            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center shadow me-3" style={{ width: '50px', height: '50px' }}>
              <FaFacebook size={24} />
            </div>
            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center shadow me-3" style={{ width: '50px', height: '50px' }}>
              <FaTwitter size={24} />
            </div>
            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center shadow" style={{ width: '50px', height: '50px' }}>
              <FaInstagram size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
