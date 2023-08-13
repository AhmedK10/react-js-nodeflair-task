import React, { useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import { Jobs } from './components/Object';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animation-show');
        } else {
          entry.target.classList.remove('animation-show'); // Remove the 'show' class if not intersecting
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup the observer when component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="jobs-cards-container">
      {Jobs.map((job) => {
        return <Card key={job.id} job={job} />;
      })}
    </div>
  );
}

export default App;
