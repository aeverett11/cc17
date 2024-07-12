// App Component
import React from 'react';
import TaskGenerator from './TaskGenerator';
import './App.css';

function App() {
  return (
    <div className="App">
        <FancyText title={true} text="Task Manager Application" />
      <TaskGenerator />
    </div>
  );
}

export default App;
