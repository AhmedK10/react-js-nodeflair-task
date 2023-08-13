import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card'; // Import the Card component
import JobDetails from './components/JobDetails'; // Import the JobDetails component
import { Jobs } from './components/Object';

function JobDetailsApp() {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleCardClick = (jobId, jobTitle) => {
    const selected = Jobs.find((job) => job.id === jobId);
    setSelectedJob(selected);
  };

  return (
    <div>
      <div className="jobs-cards-container">
        {Jobs.map((job) => (
          <Card
            key={job.id}
            job={job}
            isSelected={selectedJob && selectedJob.id === job.id}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>
      <div className="details-container">
        <div className="scrollable-details-container">
          <div className="details-job-title">
            <h1 id="selectedJobTitle">
              <JobDetails selectedJob={selectedJob} /> {/* Pass selected job to JobDetails */}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<JobDetailsApp />, document.getElementById('jobDetailsRoot'));
