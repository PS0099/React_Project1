import { useContext, useRef } from "react";
import { AuthContext } from "../../Context_Store/AuthProvider";

const AcceptTask = ({ loggedInUserData, logData, setNewTask }) => {
  // Reference to the task title element
  const titleRef = useRef();

  // Accessing user data from the AuthContext
  const [userData, setUserData] = useContext(AuthContext);
  const data = userData.employees;
  // Function to mark the task as completed
  const markAsCompleted = () => {
    const updatedUserData = data.map((e) => {
      const taskTitle = titleRef.current.textContent;

      // Check if the task belongs to the logged-in user
      if (e.firstName === logData.firstName) {
        // Check if the user has active tasks
        if (e.taskNumbers.active > 0) {
          // Update the task counts
          e.taskNumbers.active--;
          e.taskNumbers.completed++;

          // Update the specific task with the matching title
          e.tasks = e.tasks.map(
            (task) =>
              task.title === taskTitle
                ? { ...task, active: false, completed: true }
                : task // Return the unchanged task
          );
        } else {
          alert("Task Cannot Be Less Than 0"); // Alert if no active tasks to mark as completed
        }
      }
      return e; // Always return the employee object
    });

    // Check if the employee was found
    const employeeFound = updatedUserData.find(
      (e) => e.firstName === logData.firstName
    );

    if (!employeeFound) {
      alert("Employee not Found"); // Alert if employee is not found
    } else {
      // Update the context and local storage with the new user data
      setUserData({ ...userData, employees: updatedUserData });
      localStorage.setItem("employees", JSON.stringify(updatedUserData));
      alert("Task completed"); // Alert task completion
    }
  };

  // Function to mark the task as failed
  const markAsFailed = () => {
    const updatedUserData = data.map((e) => {
      const taskTitle = titleRef.current.textContent;

      // Check if the task belongs to the logged-in user
      if (e.firstName === logData.firstName) {
        // Check if the user has active tasks
        if (e.taskNumbers.active > 0) {
          // Update the task counts
          e.taskNumbers.active--;
          e.taskNumbers.failed++;

          // Update the specific task with the matching title
          e.tasks = e.tasks.map(
            (task) =>
              task.title === taskTitle
                ? { ...task, active: false, failed: true }
                : task // Return the unchanged task
          );
        } else {
          alert("Task Cannot Be Less Than 0"); // Alert if no active tasks to mark as failed
        }
      }
      return e; // Always return the employee object
    });

    // Check if the employee was found
    const employeeFound = updatedUserData.find(
      (e) => e.firstName === logData.firstName
    );

    if (!employeeFound) {
      alert("Employee not Found"); // Alert if employee is not found
    } else {
      // Update the context and local storage with the new user data
      setUserData({ ...userData, employees: updatedUserData });
      localStorage.setItem("employees", JSON.stringify(updatedUserData));
      localStorage.setItem("employeesNew", JSON.stringify(updatedUserData));

      alert("Task Marked As Failed"); // Alert task failure
    }
  };

  return (
    <div className="flex-shrink-0 h-full w-[370px] bg-yellow-400 rounded-xl shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        {/* Task category */}
        <h3 className="bg-gray-900 text-white py-1 px-3 rounded text-sm">
          {loggedInUserData?.category || "No Category"}
        </h3>
        {/* Task date */}
        <b className="text-sm text-gray-700">
          {loggedInUserData?.date || "No Date"}
        </b>
      </div>
      <div>
        {/* Task title */}
        <h2 className="text-2xl font-semibold mb-2" ref={titleRef}>
          {loggedInUserData?.title || "Untitled Task"}
        </h2>
        {/* Task description */}
        <b>
          <p className="text-sm text-gray-800">
            {loggedInUserData?.description || "No description available."}
          </p>
        </b>
        <div className="flex justify-between mt-4">
          {/* Buttons with explicit type and hover effects */}
          <button
            type="button"
            className="bg-gray-900 py-2 px-2 text-sm rounded hover:bg-green-600 hover:text-black transition duration-300 transform hover:scale-105"
            onClick={markAsCompleted}
          >
            Mark As Completed ✔✔
          </button>
          <button
            type="button"
            className="bg-gray-900 hover:text-black py-1 px-2 text-sm rounded hover:bg-red-600 transition duration-300 transform hover:scale-105"
            onClick={markAsFailed}
          >
            Mark As Failed ✘✘
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;
