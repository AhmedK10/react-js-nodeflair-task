import React, { useEffect, useRef } from 'react';

function Card({ job, isSelected, handleCardClick }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.closest('.job-card').classList.add('animation-show');
          } else {
            entry.target.closest('.job-card').classList.remove('animation-show');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className="card-container hidden">
      <div
        ref={cardRef}
        onClick={() => handleCardClick(job.id, job)}
        className={`job-card ${isSelected ? 'selected' : 'deselected'}`}
      >
            <div className="job-card-top-info">
                <div className="job-info-container">
                    <div className="job-avatar-container">
                        <img className="company-avatar" src={job.logo} alt="Company Logo" />
                    </div>
                    <div className="job-detailed-info-container">
                        <p className="company-name-rating">
                            <span className="company-name">{job.company}</span>
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
            <hr className="hr-line"/>
            <div className="job-card-bot-info">
                {job.stack.map((tech, index) => (
                    <span key={index} className="techstack-container">{tech}</span>
                ))}
            </div>
        </div>
      </div>
  );
}

export default Card;
