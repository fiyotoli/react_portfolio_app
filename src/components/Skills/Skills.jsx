// Skills.jsx
import React from 'react';

const Skills = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">My Skills</h2>
            <p className="text-muted text-center mb-5">
                Here are the skills I've acquired in my journey as a Frontend Developer. I continuously strive to improve and expand my knowledge.
            </p>
            
            <div className="row">
                {/* First Section */}
                <div className="col-md-6 mb-4">
                    <h5 className="text-primary">Frontend Development</h5>
                    <div className="mb-3">
                        <h6>HTML</h6>
                        <div className="progress" role="progressbar" aria-label="HTML skill" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-primary" style={{ width: '90%' }}>90%</div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <h6>CSS</h6>
                        <div className="progress" role="progressbar" aria-label="CSS skill" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-primary" style={{ width: '85%' }}>85%</div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <h6>JavaScript</h6>
                        <div className="progress" role="progressbar" aria-label="JavaScript skill" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-primary" style={{ width: '75%' }}>75%</div>
                        </div>
                    </div>
                </div>

                {/* Second Section */}
                <div className="col-md-6 mb-4">
                    <h5 className="text-primary">Libraries & Frameworks</h5>
                    <div className="mb-3">
                        <h6>React</h6>
                        <div className="progress" role="progressbar" aria-label="React skill" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-primary" style={{ width: '80%' }}>80%</div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <h6>Bootstrap</h6>
                        <div className="progress" role="progressbar" aria-label="Bootstrap skill" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-primary" style={{ width: '70%' }}>70%</div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <h6>jQuery</h6>
                        <div className="progress" role="progressbar" aria-label="jQuery skill" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-primary" style={{ width: '60%' }}>60%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
