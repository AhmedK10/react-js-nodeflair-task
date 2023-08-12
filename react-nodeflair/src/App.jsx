import React from 'react';
import './App.css'
import  Card  from "./components/Card";
import { Jobs } from "./components/Object";

// const jobs = Jobs();

function App() {
  return (
        <div className="jobs-cards-container">
          {Jobs.map(job => {
            return <Card key={job.id} job={job} />;
          })}
        </div>
  );
}

export default App;
