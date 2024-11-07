// About.jsx
import React, { useState } from 'react';
import aboutImage from '../../assets/hero.jpg'; // Import your image

const About = () => {
    const [activeTab, setActiveTab] = useState('skills');

    return (
        <div className="container my-5" id="about" >
            <h2 className="text-center mb-4">About Me</h2>
            <p className="text-muted text-center mb-5">
                Welcome to my portfolio! I am a passionate Frontend Developer with a keen interest in creating user-friendly and visually appealing web applications.
            </p>
            <div className="row">
                {/* Image Section */}
                <div className="col-md-6 mb-4">
                    <img src={aboutImage} alt="About Me" className="img-fluid rounded" />
                </div>

                {/* Text Section */}
                <div className="col-md-6 mb-4">
                    <div className="d-flex flex-column justify-content-center h-100">
                        <h5 className="text-primary">Professional Background</h5>
                        <p className="text-muted mb-4">
                            I have experience in various frontend technologies and a solid understanding of web development principles. I continuously strive to enhance my skills and keep up with the latest trends.
                        </p>
                        {/* Tabs */}
                        <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'skills' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('skills')}
                                >
                                    Skills
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'personalInfo' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('personalInfo')}
                                >
                                    Personal Information
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('projects')}
                                >
                                    Projects
                                </button>
                            </li>
                        </ul>

                        {/* Tab Content */}
                        {activeTab === 'skills' && (
                            <div className="tab-content" id="myTabContent">
                                <h6 className="text-primary">Skills Overview</h6>
                                <ul>
                                    <li>HTML, CSS, JavaScript</li>
                                    <li>React, Bootstrap</li>
                                    <li>Responsive Web Design</li>
                                </ul>
                            </div>
                        )}
                        {activeTab === 'personalInfo' && (
                            <div className="tab-content" id="myTabContent">
                                <h6 className="text-primary">Personal Information</h6>
                                <ul>
                                    <li>Name: John Doe</li>
                                    <li>Location: City, Country</li>
                                    <li>Hobbies: Coding, Hiking, Traveling</li>
                                </ul>
                            </div>
                        )}
                        {activeTab === 'projects' && (
                            <div className="tab-content" id="myTabContent">
                                <h6 className="text-primary">Projects</h6>
                                <ul>
                                    <li>Project 1: Description of project 1.</li>
                                    <li>Project 2: Description of project 2.</li>
                                    <li>Project 3: Description of project 3.</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
