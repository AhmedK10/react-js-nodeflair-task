import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './App.css';
import  '../logos/Tata-Group-logo.png';


// Sample job data
const jobs = [
  {
      id: 1,
      company: 'TATA Group',
      job: 'Backend Software Engineer',
      rating: '3.6',
      type: 'Backend',
      time: '18 minutes ago',
      loc: 'Singapore',
      salary: 'S$6000 - S$7000 / mth',
      stack: ['C++', 'Python', 'Java'],
      logo: '..logos/Tata-Group-logo.png'
  },
  {
      id: 2,
      company: 'TATA Group',
      job: 'FullStack Software Engineer',
      rating: '1.3',
      type: 'FullStack',
      time: '20 minutes ago',
      loc: 'Japan',
      salary: 'S$6000 - S$7000 / mth',
      stack: ['C++', 'C', 'JavaScript', 'Java', 'MATLAB', 'Python', 'Java'],
      logo: '..logos/Tata-Group-logo.png'
  },
  {
      id: 3,
      company: 'TATA Group',
      job: 'Frontend Software Engineer',
      rating: '4.5',
      type: 'Frontend',
      time: '10 minutes ago',
      loc: 'Thailand',
      salary: 'S$6000 - S$7000 / mth',
      stack: ['C', 'JavaScript', 'Java', 'MATLAB'],
      logo: '..logos/Tata-Group-logo.png'
  },
];

// Individual job card component
function JobCard({ job }) {
  return (
      <div className="card-container">
          <div className="job-card">
              <div className="job-card-top-info">
                  <div className="job-info-container">
                      <div className="job-avatar-container">
                          <img className="company-avatar" src={job.logo} alt="Company Logo" />
                      </div>

                      <div className="job-detailed-info-container">
                          <p className="company-name-rating">
                              <span>{job.company}</span>
                              <span>{job.rating} ★</span>
                          </p>
                          <h2>{job.job}</h2>
                      </div>

                      <div className="job-type-container">
                          <div className="job-type">{job.type}</div>
                      </div>
                  </div>

                  <div className="job-time-loc-salary-info">
                      <div className="job-time-loc">
                          <span className="time-post">{job.time}</span>
                          <div className="loc">
                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" className="svg-inline--fa fa-map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                  <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                              </svg>
                              {job.loc}
                          </div>
                      </div>

                      <div>
                          <p className="job-salary">
                              <span className="salary">{job.salary}</span>
                              <span className="est-tag">EST</span>
                          </p>
                      </div>
                  </div>
              </div>

              <div className="job-card-bot-info">
                  {job.stack.map((tech, index) => (
                      <span key={index} className="techstack-container">{tech}</span>
                  ))}
              </div>
          </div>
      </div>
  );
}

// Main App component
function App() {
  console.log('Rendering App component'); // Debugging log

  return (
    <div className="main-container">
      <div className="jobs-list-and-nav-container">
        <div className="jobs-cards-container">
          {jobs.map(job => {
            console.log('Rendering JobCard for job:', job); // Debugging log
            return <JobCard key={job.id} job={job} />;
          })}
        </div>
      </div>
    </div>
  );
}

console.log('Rendering ReactDOM'); // Debugging log

// Render the App component
ReactDOM.render(<App />, document.getElementById('root'));
