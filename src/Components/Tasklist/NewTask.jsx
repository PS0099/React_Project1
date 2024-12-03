import { useContext, useRef } from "react";
import { AuthContext } from "../../Context_Store/AuthProvider";

const NewTask = ({ loggedInUserData, logData,setNewTask }) => {
  const titleRef = useRef();
  const [userData, setUserData] = useContext(AuthContext);
  const data = userData.employees;
  const acceptedTask = () => {
    setNewTask("Task Accepted")
    const updatedUserData = data.map((e) => {
      const v = titleRef.current.textContent;
      if (e.firstName === logData.firstName) {
        if (e.taskNumbers.newTask > 0) {
          e.taskNumbers.newTask--;
          e.taskNumbers.active++;
          // Update the specific task with matching title
          e.tasks = e.tasks.map(
            (task) =>
              task.title === v
                ? { ...task, newTask: false, active: true } // Create a new updated task
                : task // Return the unchanged task
          );
        } else {
          alert("Task Cannot Be Less Than 0");
        }
      }
      return e; // Always return the object
    });

    const employeeFound = updatedUserData.find(
      (e) => e.firstName === logData.firstName
    );

    if (!employeeFound) {
      alert("Employee not Found");
    } else {
      setUserData({ ...userData, employees: updatedUserData });
      localStorage.setItem("employees", JSON.stringify(updatedUserData));
      localStorage.setItem("bbbbbbb", JSON.stringify(updatedUserData));
      alert("Task Accepted successfully");
    }
  };
  return (
    <div className="flex-shrink-0 h-full w-[370px] bg-blue-400 rounded-xl shadow-lg p-4">
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
        <div className="mt-4">
          {/* Accept Task button */}
          <button
            type="button"
            className="w-full bg-gray-900  py-2 rounded hover:text-black hover:bg-[#38f9fc] transition duration-300 transform hover:scale-105"
            onClick={acceptedTask}
          >
            Accept Task ✔
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask; 