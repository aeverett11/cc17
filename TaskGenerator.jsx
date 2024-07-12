// TaskGenerator Component
import React from 'react';
import { tasks } from './tasks';
import FancyText from './FancyText';

function TaskGenerator() {
    const [taskList, setTaskList] = useState(tasks);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextTask = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tasks.length);
    };
  
    const handleCompleteTask = () => {
        const updatedTasks = taskList.map((task, index) =>
          index === currentIndex ? { ...task, isCompleted: true } : task
        );
        setTaskList(updatedTasks);
    
        const currentTask = tasks[currentIndex];
    const status = currentTask.isCompleted ? "Completed ✔" : "Pending";
  
    const motivationalMessages = [
      "Keep pushing forward!",
      "You're doing great!",
      "Almost there, keep it up!",
      "Stay focused and keep moving!"
    ];
    const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
  
    return (
      <div>
        <FancyText title={true} text={currentTask.name} />
      <FancyText title={false} text={`Status: ${status}`} />
      <FancyText title={false} text={randomMessage} />
      <button onClick={handleCompleteTask}>Mark as Completed</button>
      <button onClick={handleNextTask}>Next Task</button>
      </div>
    );
  }
  
  export default TaskGenerator; 
