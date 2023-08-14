import React from 'react';

function JobDetails({ selectedJob }) {
  if (!selectedJob) {
    return <h1>Select a job to see job title</h1>;
  }

  return (
    <div>
      <h1>{selectedJob.job}</h1>
    </div>
  );
}

export default JobDetails;
