import { useContext, useRef } from "react";
import { AuthContext } from "../../Context_Store/AuthProvider";

const FailedTask = ({ loggedInUserData,logData,setNewTask }) => {
  const titleRef = useRef();

  const [userData, setUserData] = useContext(AuthContext);
  const data = userData.employees;

  const markAsReattempt = () => {
    const updatedUserData = data.map((e) => {
      setNewTask("Task Re-attempt")
      const v = titleRef.current.textContent;
      if (e.firstName === logData.firstName) {
        if (e.taskNumbers.failed > 0) {
          e.taskNumbers.failed--;
          e.taskNumbers.active++;
          // Update the specific task with matching title
          e.tasks = e.tasks.map(
            (task) =>
              task.title === v
                ? { ...task, active: true, failed: false } // Create a new updated task
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
      alert("Task completed");
    }
  };
  return (
    <div className="flex-shrink-0 h-full w-[370px] bg-red-400 rounded-xl shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        {/* Task category */}
        <h3 className="bg-gray-900 text-white py-1 px-3 rounded text-sm">
          {loggedInUserData?.category || "No Category"}
        </h3>
        {/* Task date */}
        <h4 className="text-sm text-gray-700">
          {loggedInUserData?.date || "No Date"}
        </h4>
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
          {/* Failed button */}
          <div className="flex justify-between gap-4">
            <button
              type="button"
              className="w-full bg-gray-900 hover:text-black py-2 rounded hover:bg-[#991f1f] transition duration-300 transform hover:scale-105 flex items-center justify-center"
              onClick={()=>setNewTask("Task Failed")}
            >
              <span className="mr-2">Failed ✘</span>
            </button>
            <button
              type="button"
              className="w-full bg-gray-900 hover:text-black py-2 rounded hover:bg-[#79e973] transition duration-300 transform hover:scale-105 flex items-center justify-center"
              onClick={markAsReattempt}
            >
              <span className="mr-2">Re-attempt ✔</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FailedTask;
