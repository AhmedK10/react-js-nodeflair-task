import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import { Jobs } from './components/Object';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

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

  const handleCardClick = (id) => {
    setSelectedCard(id);
  };

  return (
    <div className="jobs-cards-container">
      {Jobs.map((job) => (
        <Card
          key={job.id}
          job={job}
          selectedCard={selectedCard}
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  );
}

export default App;
