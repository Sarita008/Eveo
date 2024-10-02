import React, { useState } from "react";
import "../../assets/CSS/Career/Job.css";

const Job = () => {
  // State to manage the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle Apply button click
  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Data for the job cards
  const jobs = [
      {
        title: "Senior UX/UI Designer",
        experience: "4-6 years",
        openPosition: 1,
      },
      {
        title: "Senior UX/UI Designer",
        experience: "4-6 years",
        openPosition: 1,
      },
      {
        title: "Senior UX/UI Designer",
        experience: "4-6 years",
        openPosition: 1,
      },
      {
        title: "Senior UX/UI Designer",
        experience: "4-6 years",
        openPosition: 1,
      },
      {
        title: "Senior UX/UI Designer",
        experience: "4-6 years",
        openPosition: 1,
      },
    ];
  

  return (
    <div className="jobpage-container">
      {/* Heading section */}
      <div className="jobpage-heading">
        <h1>Available Job Vacancies at Eveo</h1>
      </div>

      {/* Cards section */}
      <div className="jobpage-cards">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <div className="job-details">
              <div className="detail-item">
                <h3>Job Title</h3>
                <p>{job.title}</p>
              </div>
              <div className="detail-item">
                <h3>Experience</h3>
                <p>{job.experience}</p>
              </div>
              <div className="detail-item">
                <h3>Open Position</h3>
                <p>{job.openPosition}</p>
              </div>
              <div className="apply-button-container">
                <button className="apply-button" onClick={handleApplyClick}>Apply</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div>
            <p>Application Submitted</p>
            <span className="tick-symbol">✔</span>
            </div>
            <button className="close-modal-button" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Job;