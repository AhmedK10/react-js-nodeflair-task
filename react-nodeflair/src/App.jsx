import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import { Jobs } from './components/Object';
import JobDetails from './components/JobDetails'; // Import the JobDetails component

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null); // Add selectedJob state

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animation-show');
        } else {
          entry.target.classList.remove('animation-show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup the observer when component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleCardClick = (id, job) => {
    setSelectedCard(id);
    setSelectedJob(job); // Set the selected job
  };

  return (
    <div>
      <div className="jobs-cards-container">
        {Jobs.map((job) => (
          <Card
            key={job.id}
            job={job}
            isSelected={selectedCard === job.id}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>
      <div className="details-container">
        <div className="scrollable-details-container">
          <div className="details-job-title">
            <JobDetails selectedJob={selectedJob} /> {/* Pass the selected job to JobDetails */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
