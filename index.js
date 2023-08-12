import { createRoot } from 'react-dom/client';

function ReactJobs() {
  return <h1>Hello from React!</h1>;
}

const domNode = document.getElementById('react-job');
const root = createRoot(domNode);
root.render(<ReactJobs />);
