import React from 'react';

console.log(selectedJob);
function JobDetails({ selectedJob }) {
  if (!selectedJob) {
    return <p>Select a job to see details</p>;
  }

  return (
    <div>
      <h1>{selectedJob.job}</h1>
      {/* ... Display other job details ... */}
    </div>
  );
}

export default JobDetails;
