import Header from "../../Others_components/Heder";
import TaskListNumbers from "../../Others_components/TaskListNumbers";
import TaskList from "../Tasklist/TaskList";
import Massage from "../Tasklist/Message"; // Component for task-related messages
import { useState } from "react";

const EmployeeDashboard = ({ loggedInUserData, handleLogout }) => {
  // State to track newly created tasks
  const [newTask, setNewTask] = useState(null);

  return (
    <div className="p-10 bg-[#1c1c1c] text-white height: 100vh;">
      {/* Header component with logged-in user details and logout functionality */}
      <Header loggedInUserData={loggedInUserData} handleLogout={handleLogout} />
      
      {/* TaskListNumbers component for displaying task statistics */}
      <TaskListNumbers loggedInUserData={loggedInUserData} />
      
      {/* Massage component for displaying task-related messages */}
      <Massage 
        loggedInUserData={loggedInUserData} 
        newTask={newTask} 
        setNewTask={setNewTask} 
      />
      
      {/* TaskList component for displaying and managing the user's task list */}
      <TaskList 
        loggedInUserData={loggedInUserData} 
        setNewTask={setNewTask} 
      />
    </div>
  );
};

export default EmployeeDashboard;
