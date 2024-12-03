const CompletedTask = ({ loggedInUserData,setNewTask }) => {
  return (
    <div className="flex-shrink-0 h-full w-[370px] bg-green-500 rounded-xl shadow-lg p-4">
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
        <h2 className="text-2xl font-semibold mb-2">
          {loggedInUserData?.title || "Untitled Task"}
        </h2>
        {/* Task description */}
        <b>
          <p className="text-sm text-gray-800">
            {loggedInUserData?.description || "No description available."}
          </p>
        </b>
        <div className="mt-4">
          {/* Completed button */}
          <button
            type="button"
            className="w-full bg-gray-900 hover:text-black py-2 px-2 rounded hover:bg-[#87fb3a] transition duration-300 transform hover:scale-105"
            onClick={()=>setNewTask("Task Completed")}
          >
            Task Completed ✔
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletedTask;
