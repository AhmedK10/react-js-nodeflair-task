import React from 'react';

function JobDetails({ selectedJob }) {
  if (!selectedJob) {
    return <p>Select a job to see details</p>;
  }

  return (
    <div>
      <h1>{selectedJob.job}</h1> {/* Change <h1> to <h2> */}
      {/* ... Display other job details ... */}
    </div>
  );
}

export default JobDetails;
