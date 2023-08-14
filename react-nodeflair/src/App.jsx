import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import { Jobs } from './components/Object';
import JobDetails from './components/JobDetails';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

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

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleCardClick = (id, job) => {
    setSelectedCard(id);
    setSelectedJob(job);
  };

  return (
    <div className="main-container">
      <div className="jobs-list-and-nav-container">
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
        <div className="pages-nav-container">
        <nav>
            <div className="pages-number-counter">
              <span>Page <b>1</b> of <b>500</b></span>
            </div>
            <div className="pages-list">
              <ul className="pagination">
                <li className="page-item selectedpage">
                  <a className="page-link selectedpage" href="#" aria-label="Go to page number 1">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Go to page number 2">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Go to page number 3">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Go to page number 4">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Go to page number 5">5</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Go to next page">⟩</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Go to last page">»</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="details-container">
        <div className="scrollable-details-container">
          <div className="details-job-title">
            <JobDetails selectedJob={selectedJob} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
