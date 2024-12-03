import { useContext, useRef, useState } from "react";
import { AuthContext } from "../Context_Store/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext); // Context for employee data
  // References for input fields
  const titleTaskRef = useRef();
  const descriptionTaskRef = useRef();
  const categoryTaskRef = useRef();
  const assignToRef = useRef();
  const dueDateRef = useRef();

  // Submit handler function
  const submitHandler = (e) => {
    e.preventDefault();

    // Get input values
    const title = titleTaskRef.current.value;
    const description = descriptionTaskRef.current.value;
    const category = categoryTaskRef.current.value;
    const assignTo = assignToRef.current.value;
    const date = dueDateRef.current.value;

    // Validation for required fields
    if (!title || !description || !category || !assignTo || !date) {
      alert("All fields are required!");
      return;
    }

    // Create a new task object
    const task = {
      title,
      description,
      category,
      assignTo,
      date,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Fetch employee data from localStorage
    const data = userData.employees || [];
    if (!Array.isArray(data)) {
      console.error("Invalid data format for employees.");
      return;
    }

    // Update employee data with the new task
    const updatedData = data.map((employee) => {
      if (employee.firstName === assignTo) {
        // Initialize tasks array if not present
        if (!employee.tasks) {
          employee.tasks = [];
        }
        employee.tasks.push(task);
        employee.taskNumbers.newTask++;
      }
      return employee;
    });

    // Save updated data back to localStorage
    localStorage.setItem("employees", JSON.stringify(updatedData));

    setUserData({ ...userData, employees: updatedData });

    // Reset the form fields
    titleTaskRef.current.value = "";
    descriptionTaskRef.current.value = "";
    categoryTaskRef.current.value = "";
    assignToRef.current.value = "";
    dueDateRef.current.value = "";

    alert("Task assigned successfully!");
  };

  return (
    <div className="mt-6">
      <form
        className="flex w-full items-start justify-between bg-gray-800 p-6 rounded-lg shadow-md"
        onSubmit={submitHandler}
      >
        {/* Left Section */}
        <div className="w-[40%] pr-5">
          <div className="mb-4">
            <label
              htmlFor="taskTitle"
              className="block text-sm font-semibold mb-2 text-white"
            >
              Task Title
            </label>
            <input
              type="text"
              id="taskTitle"
              placeholder="Make A UI"
              className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ref={titleTaskRef}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-sm font-semibold mb-2 text-white"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ref={dueDateRef}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="assignTo"
              className="block text-sm font-semibold mb-2 text-white"
            >
              Assign To
            </label>
            <input
              type="text"
              id="assignTo"
              placeholder="Employee Name"
              className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ref={assignToRef}
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-semibold mb-2 text-white"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              placeholder="Design, Dev, etc."
              className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ref={categoryTaskRef}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[40%]">
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-semibold mb-2 text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              cols="40"
              rows="5"
              placeholder="Task details here..."
              className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ref={descriptionTaskRef}
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-200"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
