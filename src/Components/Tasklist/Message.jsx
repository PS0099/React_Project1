import React, { useState, useEffect } from "react";

const Massage = ({ newTask, setNewTask }) => {
  // State to control the visibility of the message
  const [showMessage, setShowMessage] = useState(false);

  // Show a message when a new task is set
  useEffect(() => {
    if (newTask) {
      setShowMessage(true); // Show the message

      // Automatically hide the message after 5 seconds
      const timer = setTimeout(() => setShowMessage(false), 5000);

      // Cleanup the timer on unmount or when `newTask` changes
      return () => clearTimeout(timer);
    }
  }, [newTask]);

  // Get the appropriate message based on the task status
  const getMessage = () => {
    // Reset `newTask` state after 5 seconds
    setTimeout(() => {
      setNewTask(null);
    }, 5000);

    switch (newTask) {
      case "Task Completed":
        return "Task Completed! Enjoy Your Day 😊";
      case "Task Failed":
        return "Task Failed! Please Re-attempt the Task 😟";
      case "Task Re-attempt":
        return "Find the Problem and Fix It to Complete the Task 🔧";
      case "Task Accepted":
        return "Task Accepted Successfully! 🎉";
      default:
        return "";
    }
  };


  return (
    <>
      {showMessage && (
        <div className="p-4 text-2xl text-blue-800 border-none rounded-md text-center shadow-md mt-5">
          <b>{getMessage()}</b>
        </div>
      )}
    </>
  );
};

export default Massage;
