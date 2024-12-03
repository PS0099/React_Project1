import { useContext } from "react";
import { AuthContext } from "../Context_Store/AuthProvider";

const AllTask = () => {
  // Destructuring the userData and setUserData from AuthContext
  const [userData, setUserData] = useContext(AuthContext);
  return (
    <div className="bg-gray-800 mt-5 p-4 rounded-lg">
      {/* Header section displaying task categories */}
      <div className="bg-neutral-800 border-2 border-blue-400 py-3 px-6 flex justify-between items-center rounded mb-4 shadow-md">
        <h6 className="w-1/5 text-lg font-medium">Employee Name</h6>
        <h6 className="w-1/5 text-lg font-medium">New Task</h6>
        <h6 className="w-1/5 text-lg font-medium">Active Task</h6>
        <h6 className="w-1/5 text-lg font-medium">Completed</h6>
        <h6 className="w-1/5 text-lg font-medium">Failed</h6>
      </div>

      <div>
        {/* Loop through each employee's data */}
        {userData.employees.map((e) => {
          return (
            <div
              className="border-emerald-400 bg-neutral-800 border-2 py-3 px-6 gap-12 flex justify-between items-center rounded mb-4 shadow-md"
              key={e.id}
            >
              {/* Employee's first name */}
              <h6 className="w-1/5 text-lg font-medium">{e.firstName}</h6>
              
              {/* Displaying task numbers with specific color for each task status */}
              <h6 className="w-1/5 text-lg font-medium text-blue-400">
                {e.taskNumbers.newTask}
              </h6>
              <h6 className="w-1/5 text-lg font-medium text-yellow-400">
                {e.taskNumbers.active}
              </h6>
              <h6 className="w-1/5 text-lg font-medium text-green-400">
                {e.taskNumbers.completed}
              </h6>
              <h6 className="w-1/5 text-lg font-medium text-red-600">
                {e.taskNumbers.failed}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
