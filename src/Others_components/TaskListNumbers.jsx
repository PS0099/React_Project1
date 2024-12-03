const TaskListNumbers = ({ loggedInUserData }) => {
  return (
    <div className="flex justify-between gap-5 screen mt-10">
      {/* Failed Task section */}
      <div className="rounded-xl w-[45%] p-10 bg-red-400 py-6 px-9 text-center hover:text-black">
        <h2 className="text-5xl font-semibold">
          {loggedInUserData.taskNumbers.failed}
        </h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>

      {/* New Task section */}
      <div className="rounded-xl w-[45%] p-10 bg-blue-400 py-6 px-9 text-center hover:text-black">
        <h2 className="text-5xl font-semibold">
          {loggedInUserData.taskNumbers.newTask}
        </h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      {/* Completed Task section */}
      <div className="rounded-xl w-[45%] p-10 bg-green-400 py-6 px-9 text-center hover:text-black">
        <h2 className="text-5xl font-semibold">
          {loggedInUserData.taskNumbers.completed}
        </h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>

      {/* Accepted Task section */}
      <div className="rounded-xl w-[45%] p-10 bg-yellow-400 py-6 px-9 text-center hover:text-black">
        <h2 className="text-5xl font-semibold">
          {loggedInUserData.taskNumbers.active}
        </h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
